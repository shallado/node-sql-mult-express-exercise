import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../component/Header';
import HomePage from '../pages/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;