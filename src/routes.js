import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import VSC from './Pages/VSC';
import GDB from './Pages/GDB';
import Teste from './Pages/Teste';

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />            
            <Route path='/VSC' component={VSC} />            
            <Route path='/GDB' component={GDB} />    
            <Route path='/teste' component={Teste} />        
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
