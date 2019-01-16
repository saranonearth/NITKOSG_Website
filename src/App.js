import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.jsx';
import Members from './components/Members.jsx';
import Events from './components/Events.jsx';
import Projects from './components/Projects.jsx';
import Tutorials from './components/Tutorials.jsx';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component = {Home} exact />
          <Route path="/members" component = {Members} />
          <Route path="/events" component = {Events} />
          <Route path="/projects" component = {Projects} />
          <Route path="/tutorials" component = {Tutorials} />
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
