import { Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {UserRegistrationForm} from "../../components";


class Register extends Component {
    render() { 
        return ( 
                
                    <UserRegistrationForm />
                
                    
               
         );
    }
}
 
export default Register;
