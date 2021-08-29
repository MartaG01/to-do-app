import React, {Component} from 'react';
import {withFirebase} from "../../firebase";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Grid, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const initialState={
    email: "",
    password: "",
    error: null
}

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState,
            invalidText: null
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.email===""||!this.state.email.includes("@")||this.state.password===""){
            this.setState({invalidText: "Invalid input"})
        } else {
            this.props.firebase.signIn(this.state.email, this.state.password).then(()=>{
                this.setState({...initialState});
                this.props.history.push("/home");
            }).catch(error=>{
                this.setState({error});
                console.log(error.message)
            })
        }
        
    }

    LoginFormField(inputName, inputType){
        return(
            
                <TextField 
                label={inputName}
                variant="outlined" 
                name={inputName} 
                value={this.state.inputName} 
                onChange={this.onChange} 
                type={inputType}
                required 
                />

        )
    }
    
    render() { 
        return ( 
            <Grid item container xs={12} style={{padding: 10}} justify="center">         
            <form autoComplete="off" onSubmit={this.onSubmit}>
                <Grid item xs={12} style={{padding: 10}}>
                {this.LoginFormField("email", "email")}
                </Grid>
                <Grid item xs={12} style={{padding: 10}}>
                {this.LoginFormField("password", "password")}
                </Grid>
                <Grid item xs={12} container style={{display:"flex", justifyContent:"center", padding: 10}}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    >Login
                </Button>
                </Grid>
            </form>
            <Grid item container justify="center" style={{color: "red"}}>
                {this.state.invalidText&&<p>{this.state.invalidText}</p>}
                {this.state.error&&<p>{this.state.error.message}</p>}
            </Grid>
            
            </Grid>
         );
    }
}
 
export default withRouter(withFirebase(SignInForm));