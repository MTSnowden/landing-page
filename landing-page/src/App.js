import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Router from './Router'
import { thisExpression } from '@babel/types';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
