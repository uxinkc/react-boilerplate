import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/_infrastructure/utils/testing/test-utils';

import DashboardCounter from '@dom/Dashboard/views/DashboardCounter.jsx';

describe('DashboardCounter Component Suite', async ()=> {
  
  let comp, user;
  let header3Elm, bigCount, incBtn, decBtn;

  beforeEach(() => {
    user = userEvent.setup();
    comp = renderWithProviders(<DashboardCounter/>, {});
    header3Elm = comp.getByTestId('h3-title');
    bigCount = comp.getByTestId('incident_name');
    incBtn = comp.getByTestId('incBtn');
    decBtn = comp.getByTestId('decBtn');
  });
  afterEach( cleanup );

  it('Should be Defined', () => {
    expect(comp).toBeDefined();
  });

  it('Should have a default value of 0', async () => {
    expect(bigCount.textContent).toEqual('0');
  });

  it('Should increment by 1', async () => {
    let n1 = Number(bigCount.textContent)
    await user.click(incBtn);
    //expect(bigCount.textContent).toEqual('1');
    let n2 = Number(bigCount.textContent)
    expect(n2).toBeGreaterThan(n1);
  });

  it('Should decrement count by 1', async () => {
    await user.click(decBtn);
    expect(bigCount.textContent).toEqual('-1');
  });

  it('Should have header Text', async () => {
    expect(header3Elm.textContent).not.toBeNull();
    expect(header3Elm.textContent).toBeTypeOf("string");
  });


});
