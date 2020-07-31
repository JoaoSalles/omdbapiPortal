import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import HomeComponent from './HomeComponent';
import Context from './../../utils/context';

describe('Test for HomeComponent', () =>{
  it('Should render input and change it value and call search', async () => {
    const { getByTestId, getByText } = render(
      <Context.Provider value={{state: { totalResults: 0, movies: [] }, dispatch: () => {}}}>
        <HomeComponent/>
      </Context.Provider>
    )

    const inputField = await waitForElement(
      () => getByTestId('form-textInput')
    )

    fireEvent.change(
      inputField,
      { target : { value: 'new movie'}
    });
    
    expect(inputField.value).toBe('new movie');

    const submitButton = await waitForElement(
      () => getByTestId('form-submit')
    )

    fireEvent.click(submitButton);

    const loadingElement = await waitForElement(
      () => getByText('Loading...')
    )
    
    expect(loadingElement).toBeInTheDocument();
  });
})
