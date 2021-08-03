import React, {Component} from 'react';
import {withAuth} from "../../components/userAuth";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';


let initialState={
    // date: new Date().toLocaleString(),
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
            <Typography
                variant="subtitle2"
                align="center"
            >
            <form onSubmit={this.addTask} autoComplete="off">
                <TextField 
                helperText="Set due date" 
                label="date"
                type="text" 
                name="date" 
                color="primary"
                onFocus={(e)=>{e.target.type="date"}}
                onBlur={(e)=>{e.target.type="text"}}
                value={this.state.date} 
                onChange={this.onChange}
                />
                
                <TextField 
                label="title" 
                type="text" 
                helperText="Name your task"
                name="title" 
                value={this.state.title} 
                onChange={this.onChange}
                />
                <TextField 
                label="text" 
                type="text"
                helperText="and some description..." 
                multiline
                rows={8}
                name="description" 
                value={this.state.description} 
                onChange={this.onChange}
                />
            <Button 
            type="submit"
            variant="contained"
            endIcon={<AddCircleIcon />}
            >
                Add task
            </Button>
            {this.state.error&& <p>An error occured, please try again later</p>}
            </form>
            </Typography>
         );
    }
}
 
const AddTask= withAuth(AddTaskElement);
export default AddTask;