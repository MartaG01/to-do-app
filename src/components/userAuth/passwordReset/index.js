import { Button, Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import { withFirebase } from '../../firebase';
import { TextField } from '@material-ui/core';

const initialState={
    email: "",
    error: null
}

class PasswordResetForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState,
            invalidInputText: null
        }
    }
    
    ResetText=()=>{
        return(
            <Typography
                variant="h6"
                align="center"
                color="primary"
            >
                Reset your password
            </Typography>
        )
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if (this.state.email===""|| !this.state.email.includes("@")){
            this.setState({invalidInputText: "Invalid input"})
        } else {
            this.props.firebase.passwordReset(this.state.email).then(()=>{
                this.setState({...initialState})
                this.props.history.push("/")
            }).catch(error=>{
                this.setState({error});
            });
        }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() { 
        return ( 
            <Grid container alignItems="center" justify="center" style={{height: "100vh"}}>
                <Grid item container xs={12} justify="center">
                    <this.ResetText />
                </Grid>
                <Grid item container xs={12} justify="center">
                <Grid item container xs={12} justify="center">
                    <form autoComplete="off" onSubmit={this.onSubmit}>
                        <TextField
                            label="Type in your email address"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            required
                        />
                    </form>
                    
                </Grid>
                <Grid item container xs={12} justify="center" style={{paddingTop: 20}}>
                    <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                    >
                        Reset password
                        
                    </Button>
                </Grid>
                </Grid>
                <Grid item container xs={12} justify="center">
                    {this.state.invalidInputText&&<p>Invalid email</p>}
                    {this.state.error&&<p>Error, please try again later</p>}
                </Grid>
                <Grid item container xs={12} justify="center">
                    <Link to="/">Back to log in</Link>
                </Grid>
                
                
            </Grid>
         );
    }
}
 
export default withRouter(withFirebase(PasswordResetForm));