import React from 'react';
import Nav from './nav';
import About from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const Portfoliomain = () => {


  return (
    <Router>

      <Nav />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/aboutme' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>

    </Router>

  );
}

export default Portfoliomain;