import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Members from './components/Members';
import Events from './components/Events';
import Projects from './components/Projects';
import Tutorials from './components/Tutorials';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component = {Home} exact />
        <Route path="/members" component = {Members} />
        <Route path="/events" component = {Events} />
        <Route path="/projects" component = {Projects} />
        <Route path="/tutorials" component = {Tutorials} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
