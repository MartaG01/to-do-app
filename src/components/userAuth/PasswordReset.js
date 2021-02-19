import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from "../../pages/landingPage";

class PasswordReset extends Component {
    state = {  }
    ResetText(){
        return(
            <div>Reset your password</div>
        )
    }
    render() { 
        return ( 
            <>
            <Router>
                <Switch>
                    <Route exact path="/resetpassword">
                        <this.ResetText />
                        <Link to="/">Back to log in</Link>
                    </Route>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </Router>
            </>
         );
    }
}
 
export default PasswordReset;