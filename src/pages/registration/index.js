import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {UserRegistrationForm} from "../../components";


class Register extends Component {
    render() { 
        return ( 
            <>
                <UserRegistrationForm />
                <Link to="/">Back to log in</Link>
            </>
         );
    }
}
 
export default Register;
