import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import MoviesList from './MoviesList';

const defaultProps = {
    status: 'resolved',
    showList: true,
    searchResults: [],
    currentPage: 0,
    maxPage: 0,
    onChangePagination: () => {}
}

const defaultMovieList = [
    { Poster: '', Title: 'image' },
    { Poster: '', Title: 'image1' },
    { Poster: '', Title: 'image2' },
    { Poster: '', Title: 'image3' },
    { Poster: '', Title: 'image4' },
    { Poster: '', Title: 'image5' },
    { Poster: '', Title: 'image6' },
    { Poster: '', Title: 'image7' },
]

jest.mock('react-router-dom');

describe('Test for MoviesList', () =>{
    it('Should render loading text', async () => {
      const { getByText } = render(<MoviesList {...defaultProps} status='pedding' />)
  
      const loadingElement = await waitForElement(
        () => getByText('Loading...')
      )
      
      expect(loadingElement).toBeInTheDocument();
    });

    it('Should render no movie found text', async () => {
        const { getByText } = render(<MoviesList {...defaultProps} />)
    
        const noMovie = await waitForElement(
          () => getByText('Nenhum filme encontrado, consulte novamente.')
        )
        
        expect(noMovie).toBeInTheDocument();
    });

    it('Should render 6 movies in the first page change page and previous button disabled', async () => {
        const mockChangePage = jest.fn();
        const { getAllByTestId, getByTestId } = render(
          <MoviesList 
          {...defaultProps}
          onChangePagination={mockChangePage}
          searchResults={defaultMovieList} 
          maxPage={1} 
          />)
    
        let movieList = await waitForElement(
          () => getAllByTestId('movie-display')
        )

        expect(movieList).toHaveLength(6);

        const previousButton = await waitForElement(
            () => getByTestId('previous-button')
        )

        fireEvent.click(previousButton)

        expect(mockChangePage).not.toHaveBeenCalled();

        const nextButton = await waitForElement(
            () => getByTestId('next-button')
        )

        fireEvent.click(nextButton)

        expect(mockChangePage).toHaveBeenCalled();
    });

    it('Should render 2 movies in the second page and next button disabled', async () => {
      const mockChangePage = jest.fn();
      const { getAllByTestId, getByTestId } = render(
        <MoviesList 
        {...defaultProps}
        onChangePagination={mockChangePage}
        searchResults={defaultMovieList} 
        currentPage={1}
        maxPage={1} 
        />)
  
      let movieList = await waitForElement(
        () => getAllByTestId('movie-display')
      )

      expect(movieList).toHaveLength(2);

      const nextButton = await waitForElement(
          () => getByTestId('next-button')
      )

      fireEvent.click(nextButton)

      expect(mockChangePage).not.toHaveBeenCalled();

      const previousButton = await waitForElement(
        () => getByTestId('previous-button')
      )

      fireEvent.click(previousButton)

      expect(mockChangePage).toHaveBeenCalled();
  });
})