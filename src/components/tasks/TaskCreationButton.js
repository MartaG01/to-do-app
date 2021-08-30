import { Button, Grid } from '@material-ui/core';
import React, {Component} from 'react';
import { AddTask } from '.';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

class TaskCreation extends Component {
    constructor(props){
        super(props)
        this.state={
            displayButton: "flex",
            displayForm: "none",
            data: "from child"
        }
    }

    handleTaskAdd=()=>{
        this.setState({displayButton: "flex", displayForm: "none"})
    }

    render() { 
        return ( 
            <Grid item container justify="center">
                {this.state.displayButton==="flex"?
                <Button 
                variant="contained" 
                color="primary" 
                onClick={()=>{this.setState({displayButton: "none"})}}
                endIcon={<NoteAddIcon />}
                >
                    Create a task
                </Button>
                :
                <Grid item container xs={12} justify="center">
                    
                    <Grid item container xs={12} justify="center">
                        <AddTask addTaskCallback={this.handleTaskAdd}/>
                    </Grid>
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={()=>{this.setState({displayButton: "flex"})}}
                        endIcon={<VisibilityOffIcon />}
                        
                        >
                            Hide
                        </Button>
                    </Grid>
                    
                </Grid>
                
                }
            </Grid>
         );
    }
}
 
export default TaskCreation;