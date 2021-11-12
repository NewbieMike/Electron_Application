import React from 'react';

import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
