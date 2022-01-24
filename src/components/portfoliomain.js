import React, { useState } from 'react';
import Nav from './nav';
import About from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { MDBFooter } from "mdbreact";



const Portfoliomain = () => {


  // const appContext = useContext('/')
  // let location = useLocation()

  // useEffect(() => {
  //   appContext.setActivePath(location.pathname)
  //   // eslint-disable-next-line
  // }, [location])



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
      <MDBFooter color='dark' className="">
        <p className='footer-copyright mb-0 py-3 text-center'>
          &copy; {new Date().getFullYear()}
        </p>
      </MDBFooter>
    </Router>




  );
}

export default Portfoliomain;