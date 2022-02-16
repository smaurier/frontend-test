import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';



function MainRouter(){
  return(
    <Router>
      <Header />
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  )
}

export default MainRouter;