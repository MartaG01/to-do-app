import { Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {UserRegistrationForm} from "../../components";


class Register extends Component {
    render() { 
        return ( 
            <>
                <Grid container justify="center" alignItems="flex-start" style={{marginTop: "5rem"}} spacing={10}>
                <UserRegistrationForm />
                <Grid item xs={12}>
                <Typography
                            variant="h6"
                            color="primary"
                            align="center"
                >
                <Link to="/" style={{display: "flex", justifyContent: "center"}}>Back to log in</Link>
                </Typography>
                </Grid>
                </Grid>
            </>
         );
    }
}
 
export default Register;
