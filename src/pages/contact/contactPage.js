import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from '../landingPage';

class Contact extends Component {
    state = {  }

    ContactText(){
        return(
            <div>contact details and contact form</div>
        )
    }
    render() { 
        return ( 
            <Router>
                        <Switch>
                            <Route exact path="/contact">
                               <this.ContactText />
                               <Link to="/">Back</Link>
                            </Route>
                            <Route exact path="/" component={LandingPage} />
                        </Switch>
                    </Router>
         );
    }
}
 
export default Contact;