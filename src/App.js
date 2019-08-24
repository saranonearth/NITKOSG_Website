import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Members from './components/Members.jsx';
import Events from './components/Events.jsx';
import Projects from './components/Projects.jsx';
import Tutorials from './components/Tutorials.jsx';
import Err from './components/Error.jsx';
import Navigation from './components/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/members' component={Members} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/tutorials' component={Tutorials} />
            <Route component={Err} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
