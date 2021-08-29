import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {withFirebase} from '../../firebase/index';
import { Button, Grid, TextField } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const initialState= {
    username: "",
    usersurname: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
    checkboxCheck: true
}

class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState,
            inputTextInvalid: null
        }
        
    }
    

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    onCheck=()=>{
        this.state.checkboxCheck === true ? this.setState({checkboxCheck: false}) : this.setState({checkboxCheck: true})
    }


    onSubmit=(event)=>{
        event.preventDefault();
        if(this.state.username===""||this.state.usersurname===""||this.state.email===""||!this.state.email.includes("@")||(this.state.passwordOne!==this.state.passwordTwo)||this.state.checkboxCheck===false){
            
            this.setState((prevState)=>{return({
                ...prevState,
                inputTextInvalid: "Invalid input"
            })})

            
        
            
        } else {
            console.log("form submitted")
            this.props.firebase.createUser(this.state.email, this.state.passwordOne).then(authUser=>{
                
                let user=authUser.user.uid
                this.props.firebase.db.collection("users").doc(user).set({
                    name: this.state.username,
                    surname: this.state.usersurname,
                    tasks: []
                })
                .then(()=>{
                    this.setState({...initialState});
                    this.props.history.push("/home");
                })
                .catch((error)=>{
                    this.setState({error: error});
                    console.log("login error")
                })
            })
            .catch(error=>{
                this.setState({error: error})
                console.log("login error in catch")
                
            });
            }
            
        }
    

    InputField(propName, placeHolder) {
       let field = null;
       if (propName==="username"){
           field=
           <Grid item container justify="center">
               <TextField 
                    label={placeHolder} 
                    name={propName} 
                    value={this.state.propName} 
                    type="text" 
                    onChange={this.onChange} 
                    autoFocus={true} 
                    variant="outlined" 
                    required 
               />
           
           </Grid>
       } else if (propName.includes("password")) {
        field=
        <Grid item container justify="center">
            <TextField 
                label={placeHolder} 
                name={propName} 
                value={this.state.propName} 
                type="password" 
                onChange={this.onChange} 
                variant="outlined" 
                required 
            />
        
        </Grid>
       } else if (propName==="email"){

            field=
            <Grid item container justify="center">
               <TextField 
                label={placeHolder} 
                name={propName} 
                value={this.state.propName} 
                type="email" 
                onChange={this.onChange} 
                variant="outlined" 
                required 
            />
                
            </Grid>

       } else {
           field=
           <Grid item container justify="center">
               <TextField 
                label={placeHolder} 
                name={propName} 
                value={this.state.propName} 
                type="text" 
                onChange={this.onChange} 
                variant="outlined" 
                required 
            />
                
            </Grid>
       }
        return(
            
            field
        )
    }
    
    render() { 
        return ( 
            <Grid container justify="center" spacing={10} style={{maxWidth: "100%", overflowX: "hidden"}}>
                <Grid item container justify="center" xs={12} >
                    <Typography
                                variant="h4"
                                color="primary"
                                align="center"
                    >
                        Complete the registration form
                    </Typography>

                </Grid>
                
            <form autoComplete="off" onSubmit={this.onSubmit} onReset={this.onReset} >
            <Grid container item justify="center"  spacing={1}>
                <Grid item xs={12}>
                    {this.InputField("username", "Name")}
                </Grid>
                <Grid item xs={12}>
                    {this.InputField("usersurname", "Surname")}
                </Grid>
                <Grid item xs={12}>
                    {this.InputField("email", "Email")}
                </Grid>
                <Grid item xs={12}>
                    {this.InputField("passwordOne", "Password")}
                </Grid>
                <Grid item xs={12}>
                    {this.InputField("passwordTwo", "Repeat password")}
                </Grid>
                <Grid item container justify="center" xs={12}>
                    
                    <FormControlLabel control={
                        <Checkbox
                        inputProps={{"aria-label": "Agree to policy terms"}}
                        checked={this.state.checkboxCheck}
                        color="primary"
                        onChange={this.onCheck}
                    />
                    }
                    label="Agree to policy terms"
                    />
                </Grid> 
                <Grid item container xs={12} justify="center">
                    <Link to="/register/policyterms">Read the terms here</Link>
                </Grid>    
                <Grid item container justify="center" xs={12}>           
                <Button 
                    variant="contained"
                    type="submit"
                    color="primary">
                        Submit
                </Button>
                </Grid>
                <Grid item container xs={12} justify="center">
                    {this.state.inputTextInvalid && <p style={{color: "red"}}>{this.state.inputTextInvalid}</p>}
                    {this.state.error&&<p style={{color: "red"}}>An error occured, please try again later</p>}
                </Grid>
                
                </Grid>
                
            </form>
            
                <Grid item container xs={12} justify="center" >
                    <Link to="/" >Back to login</Link>
                </Grid>
            </Grid>
         );
    }
}
 
const UserRegistrationForm= withRouter(withFirebase(RegistrationForm));
export default UserRegistrationForm;