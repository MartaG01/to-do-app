import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandingPage from "../../pages/landingPage/landingPage";

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
                <this.ResetText />
                <Link to="/">Back to log in</Link>
            </>
         );
    }
}
 
export default PasswordReset;