import React from 'react'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
//mock data
import { setupServer } from 'msw/node';
import { handlers, get_success, get_failed } from '@inf/utils/testing/handlers/handlers.js';
const server = setupServer(...handlers);
////
import { renderWithProviders } from '@/_infrastructure/utils/testing/test-utils';
import IncidentsDisplay from '@dom/Incidents/views/IncidentsDisplay.jsx';

const initState = {
  incidents: {
    stuff: { total: 18},
    status: 'idle',
    errors: [],
    itemsCount: 0,
    allItems: [
      {id:1, title:'Tom'},
      {id:2, title: 'Beverly'},
      {id:3, title:'Lee'}]
  }
 };

 describe('IncidentsDisplay Suite', async ()=> {

  let comp, user;
  let updateTotalsBtn, getApiDataBtn, statusText, errorsText, totalText, dataList;

  beforeEach(()=>{
    user = userEvent.setup();
    comp = renderWithProviders(<IncidentsDisplay />, { preloadedState: initState });
    updateTotalsBtn = comp.getByTestId('update_total_btn');
    getApiDataBtn = comp.getByTestId('get_api_data_btn');
    statusText = comp.getByTestId('status_text');
    errorsText = comp.getByTestId('errors_text');
    totalText = comp.getByTestId('total_text');
    dataList = comp.getByTestId('data_list');
  });
  afterEach(()=> {
    cleanup;
  });
  afterAll(() => { server.close() });

  it('Should show Initial Data State', () => {
    let listItem = dataList.getElementsByTagName('li')[1];
    expect(listItem.textContent).toEqual('Beverly');
  });

  it('Should show Idle Status', () => {
    expect(statusText.textContent).toEqual('Status: idle');
  });

  it('<<User Action>> Should show PENDING Status', async () => {
    // Intercept real API calls
    server.listen({onUnhandledRequest: 'error'});
    // Call MSW with a success response
    server.use( get_success);

    expect(statusText.textContent).toEqual('Status: idle');    
    await user.click(getApiDataBtn);
    
    // don't wait for MSW API call 
    expect(statusText.textContent).toEqual('Status: pending');


    server.resetHandlers();
  });


  it('<<User Action>> Should show SUCCESS Status', async () => {
    // Intercept real API calls
    server.listen({onUnhandledRequest: 'error'});
    // Call MSW with a success response
    server.use( get_success );
    
    expect(statusText.textContent).toEqual('Status: idle');
    await user.click(getApiDataBtn);
    expect(statusText.textContent).toEqual('Status: pending');
    
    // wait for API call
    await waitFor(() => {
      expect(statusText.textContent).toEqual('Status: succeeded');
    });
    server.resetHandlers();
  });


  it('<<User Action>> Should show ERROR Status', async () => {
    server.listen({onUnhandledRequest: 'error'});
    server.use( get_failed );

    expect(statusText.textContent).toEqual('Status: idle');
    await user.click(getApiDataBtn);     

    await waitFor(() => {
      expect(statusText.textContent).toEqual('Status: failed');
    });
    server.resetHandlers();
  });


  it('<<User Action>> Should update total from Store', async () => {

    expect(totalText.textContent).toEqual('Total Items in Store: 0');
    await user.click(updateTotalsBtn);     

    await waitFor(() => {
      expect(totalText.textContent).toEqual('Total Items in Store: 3');
    });
  });

  it('<<User Action>> Should update total from FAKE API', async () => {

    expect(totalText.textContent).toEqual('Total Items in Store: 0');

    server.listen({onUnhandledRequest: 'error'});
    server.use( get_success );
    
    await user.click(getApiDataBtn);
    await waitFor(() => {
      expect(statusText.textContent).toEqual('Status: succeeded');
    });


    await user.click(updateTotalsBtn);
    await waitFor(() => {
      expect(totalText.textContent).toEqual('Total Items in Store: 2');
    });

    server.resetHandlers();
  });


  ////
  //// 508 accessibility Checks
  ////

  it('Should have 508 checks passing for buttons', () => {
    expect(updateTotalsBtn.getAttribute('role')).toEqual('button');
    expect(getApiDataBtn.getAttribute('role')).toEqual('button');
  });

  it('Should have 508 checks for Live areas', ()=> {
    expect(totalText.getAttribute('aria-live')).toEqual('polite');
  })


});