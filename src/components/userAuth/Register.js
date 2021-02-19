import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LandingPage from "../../pages/landingPage";

class Register extends Component {
    state = {  }
    RegisterText(){
        return(
            <div>Registration Form</div>
        )
    }
    render() { 
        return ( 
            <>
            <Router>
                <Switch>
                    <Route exact path="/register">
                        <this.RegisterText />
                        <Link to="/">Back to log in</Link>
                    </Route>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </Router>
            </>
         );
    }
}
 
export default Register;
