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
            Array.from(document.querySelectorAll("input")).forEach(
                input=>(input.value="")
            );
        } else {
            this.props.firebase.passwordReset(this.state.email).then(()=>{
                this.setState({...initialState})
                this.props.history.push("/")
            }).catch(error=>{
                this.setState({...initialState,
                                invalidInputText: "This email address is not registered in our database"});
                
            });
        
        }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() { 
        return ( 
            <Grid container alignItems="center" justify="center" style={{height: "100vh"}} >
                <form onSubmit={this.onSubmit} autoComplete="off">
                <Grid item container xs={12} justify="center">
                    <this.ResetText />
                </Grid>
                
                <Grid item container xs={12} justify="center" style={{padding: "1rem"}}>
                    
                        <TextField
                            label="Type in your email address"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            required
                        />
                    
                    
                </Grid>
                <Grid item container xs={12} justify="center" style={{padding: "1rem"}}>
                    <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                    >
                        Reset password
                        
                    </Button>
                </Grid>
                <Grid item container xs={12} justify="center" style={{color: "red", textAlign: "center"}}>
                    {this.state.invalidInputText&&<span>{this.state.invalidInputText}</span>}
                    {this.state.error&&<span>{this.state.error.message}</span>}
                </Grid>
                <Grid item container xs={12} justify="center" style={{padding: "1rem"}}>
                    <Link to="/">Back to log in</Link>
                </Grid>
                
                </form>
            </Grid>
         );
    }
}
 
export default withRouter(withFirebase(PasswordResetForm));