import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {TextareaAutosize} from "@material-ui/core"
import { ContactSupportOutlined } from '@material-ui/icons';
import { withFirebase } from '../../components/firebase';


const initialStateContact={
    name: "",
    email: "",
    message: "",
    error: null
}


class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            ...initialStateContact
        }
        
    }

    onChange=(event)=>{
        
        this.setState({[event.target.name]: event.target.value});
        
    }

    onSubmit=(event)=>{
        event.preventDefault();
        
        this.props.firebase.db.collection("messages").add({
            ...this.state
        })
        
        .then(()=>{
            this.setState({...initialStateContact});
            document.getElementById("contactForm").reset();
        })
        .catch((error)=>{
            this.setState({
                error: error
            })
        })
        
        
    }

    ContactForm=()=>{
        return(
            <Grid item container justify="center" alignItems="center">
                <form id="contactForm" onSubmit={this.onSubmit}>
                    <Grid item xs={12}>
                    <TextField 
                        label="name"
                        variant="outlined"
                        name="name"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.name} 
                        autoFocus={true}
                        autoComplete="off"
                        style={{width: "100%", marginBottom: 20}}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                        label="email"
                        variant="outlined"
                        name="email"
                        type="email"
                        onChange={this.onChange}
                        autoComplete="off"
                        style={{width: "100%", marginBottom: 20}}
                        required
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                        label="message"
                        variant="outlined"
                        name="message"
                        type="text"
                        onChange={this.onChange}
                        autoComplete="off"
                        rows={7}
                        multiline
                        style={{width: "100%", marginBottom: 20}}
                        required
                    />
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            
                        >
                            Send
                        </Button>
                    </Grid>
                    <Grid item container>
                        {this.state.error&&<p>An error occured, please try again later</p>}
                    </Grid>
                </form>
            </Grid>
        )
    }
    render() { 
        return ( 
            <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                    >
                        Fill in the form for contact
                    </Typography>
                    
                </Grid>
                <this.ContactForm />
            <Grid item container xs={12} justify="center">
                <Link to="/">Back</Link>
            </Grid>
            </Grid>
         );
    }
}
 

export default withFirebase(Contact);