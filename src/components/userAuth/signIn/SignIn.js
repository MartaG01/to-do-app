import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SignInFrom from './SignInFrom';



class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <SignInFrom />
            </>
         );
    }
}
 
export default SignIn;