import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import MovieComponent from './MovieComponent';

jest.mock('react-router-dom');
jest.mock('./hooks/useMovie', () => (testcase) => {
  if(testcase === 1) {
    return {
      status: 'pedding'
    }
  }
  if(testcase === 2) {
    return {
      status: 'error'
    }
  }
  if(testcase === 3) {
    return {
      status: 'resolved',
      movieInfo: {
        Title: 'title',
        Year: 'year',
        Rated: 'rated',
        Released: 'release',
        Genre: 'genre',
        Director: 'director',
        Writer: 'writer',
        Actors: 'actor',
        Plot: 'plot',
        Language: 'language',
        Country: 'country',
        Awards: 'awards',
        Poster: 'post',
        Metascore: 'metascore',
        imdbRating: 'imdRating',
        imdbVotes: 'imdbvotes',
        imdbID: 'imdID',
        Type: 'type'
      }
    }
  }
  return {}
});


const defaultProps = {
  match: { params: ''}
}


describe('Test for MovieComponent.spec', () =>{
    it('Should render loading text', async () => {
      const { getByText } = render(<MovieComponent  match={{ params: { imdbID: 1 }}} />)
  
      const loadingElement = await waitForElement(
        () => getByText('Loading...')
      )
      
      expect(loadingElement).toBeInTheDocument();
    });

    it('Should render no movie found text', async () => {
        const { getByText } = render(<MovieComponent match={{ params: { imdbID: 2 }}} />)
    
        const noMovie = await waitForElement(
          () => getByText('Filme não encontrado encontrado, consulte novamente.')
        )
        
        expect(noMovie).toBeInTheDocument();
    });

    it('Should render movie information', async () => {
        const { getByText } = render(
          <MovieComponent 
          match={{ params: { imdbID: 3 }}}
          />)
    
          const movieInfo = await waitForElement(
            () => getByText('Title:')
          )
    });
})