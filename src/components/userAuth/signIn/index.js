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
            <>         
            <form autoComplete="off" onSubmit={this.onSubmit}>
                <Grid item xs={12} style={{padding: 10}}>
                {this.LoginFormField("email", "text")}
                </Grid>
                <Grid item xs={12} style={{margin: 10}}>
                {this.LoginFormField("password", "password")}
                </Grid>
                <Grid item xs={12} container style={{display:"flex", justifyContent:"center", margin: 10}}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    >Login
                </Button>
                </Grid>
            </form>
            
            {this.state.invalidText&&<p>{this.state.invalidText}</p>}
            {this.state.error&&<p>{this.state.error.message}</p>}
            </>
         );
    }
}
 
export default withRouter(withFirebase(SignInForm));