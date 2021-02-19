import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from '../landingPage';

class About extends Component {
    state = {  }

    AboutText(){
        return(
            <div>
                <h2>About us</h2>
                <p>text</p>
            </div>
        )
    }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route exact path="/about">
                        <this.AboutText />
                        <Link to="/">Back</Link>
                    </Route>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </Router>
         );
    }
}
 
export default About;