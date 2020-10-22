import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Header from './components/Header';
import World from './components/World';
import India from './components/India';
import State from './components/Statedata'

class App extends React.Component{

  constructor(){
    super();
  }

  render(){
    return(
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route path = '/world'>
        <World/>
      </Route>
      <Route path = '/india'>
        <India/>
      </Route>
      <Route path = '/state'>
        <State/>
      </Route>
      </Switch>
      </BrowserRouter>



    )
  }

}

export default App;
