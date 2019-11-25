import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import SecondTask from './components/SecondTask';
import ThirdTask from './components/ThirdTask';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Route path="/task-2" component={SecondTask} />
      <Route path="/task-3" component={ThirdTask} />
    </div>
  </BrowserRouter>
);
export default App;
