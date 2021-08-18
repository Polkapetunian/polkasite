import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Startpage from './pages/Startpage';
import Background from './pages/Background';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Startpage} />
          <Route path='/background' component={Background} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
