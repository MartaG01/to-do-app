import { Grid } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Policyterms extends Component{
    render(){
        return(
            <Grid container xs={12} justify="center" spacing={10}>
                <Grid item container justify="center" xs={12}>
                    <p>Policy terms to read</p>
                </Grid>
                <Grid item container justify="center" xs={12}>
                    <div>text</div>
                </Grid>
                <Grid item container justify="center"  xs={12}>
                    <Link to="/register">Back</Link>
                </Grid>
            </Grid>
        )
    }
}


export default Policyterms