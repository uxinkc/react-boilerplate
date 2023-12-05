
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from '@app/store.js';

export const renderWithProviders = ( ui, 
  {
    preloadedState = {},
    newStore = setupStore( preloadedState ),
    ...renderOptions
  } = {}
) => {

  const Wrapper = ({ children }) => {
    return <Provider store={ newStore }>{ children }</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { newStore, ...render( ui, {wrapper: Wrapper, ...renderOptions}) }

};


export * from '@testing-library/react';

