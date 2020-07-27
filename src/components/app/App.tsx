import React, { useReducer, useMemo } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { MainDiv } from './styles/styles';
import Context from './../../utils/context';
import { movieReducer } from './../../store/reducers/movieReducer';
import HomeComponent from '../HomeComponent'
import MovieComponent from '../MovieComponent'

const App = () => {
  const [state, dispatch] = useReducer(movieReducer, { movies: []});

  const contextValue = useMemo(() => ({
    state,
    dispatch
    }), [state, dispatch]);
    
  return (
    <BrowserRouter>
      <Context.Provider value={contextValue}>
        <MainDiv>
            <Switch>
              <Route path="/movie/:imdbID"
                component={MovieComponent}
              />
              <Route path="/"
              component={HomeComponent}
              />
            </Switch>
        </MainDiv>
      </Context.Provider>
    </BrowserRouter>
  );
}


export default (process.env.NODE_ENV === 'development'
? (App)
: App);
