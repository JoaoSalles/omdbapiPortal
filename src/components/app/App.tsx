import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { MainDiv } from './styles/styles';
import HomeComponent from '../HomeComponent'

const App = () => {
  return (
    <BrowserRouter>
      <MainDiv>
          <Switch>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
      </MainDiv>
    </BrowserRouter>
  );
}


export default (process.env.NODE_ENV === 'development'
? (App)
: App);
