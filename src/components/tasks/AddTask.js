import React, {Component} from 'react';
import {withAuth} from "../../components/userAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid } from '@material-ui/core';


let initialState={
    
    date: "",
    title: "",
    description: "",
    error: null
}



class AddTaskElement extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState
 
         }
    }

    
    
    addTask=(event)=>{
        event.preventDefault();
        this.props.addTaskCallback();
        this.props.firebase.db.collection(this.props.firebase.auth.currentUser.uid).add({
            ...this.state
        })

        
            
        
        
        
    .then(()=>{
        this.setState({...initialState})
         Array.from(document.querySelectorAll("input")).forEach(
                input=>(input.value="")
            );
    })
    .catch((error)=>{
        this.setState({error: error})
    })
}

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    render() { 
        return ( 
            
            <Grid item container justify="center" alignItems="center" xs={12} md={6} style={{display: "flex"}}>
            
            <form onSubmit={this.addTask} autoComplete="off">
            <Grid item container justify="center" alignItems="center" direction="column" xs={12} spacing={2}>
                <Grid item>
                <TextField 
                
                label="due date"
                type="text" 
                name="date" 
                color="primary"
                onFocus={(e)=>{e.target.type="date"}}
                onBlur={(e)=>{e.target.type="text"}}
                value={this.state.date} 
                onChange={this.onChange}
                variant="outlined"
                />
                </Grid>
                <Grid item>
                <TextField 
                label="task title" 
                type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.onChange}
                variant="outlined"
                />
                </Grid>
                <Grid item style={{width: "100%"}}>
                <TextField 
                label="description" 
                type="text" 
                multiline
                rows={8}
                name="description" 
                value={this.state.description} 
                onChange={this.onChange}
                variant="outlined"
                style={{width: "100%"}}
                />
                </Grid>
                <Grid item container justify="center" alignItems="center" >
                    <Button 
                    type="submit"
                    variant="contained"
                    endIcon={<AddCircleIcon />}
                    color="primary"
                    >
                    Add task
                </Button>
                </Grid>
                <Grid item xs={12} justify="center">
                    {this.state.error&& <p>An error occured, please try again later</p>}
                </Grid>
                </Grid>
                
            
            </form>
            </Grid>
         );
    }
}
 
const AddTask= withAuth(AddTaskElement);
export default AddTask;