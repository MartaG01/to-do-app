import React, {Component} from 'react';
import {SignOut, TaskList, TaskCreation} from "../../components";
import {withAuth} from "../../components/userAuth";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    
    render() { 
        
        return ( 
            <Grid container justify="center" alignItems="center">
            <SignOut />
            <Grid item xs={12}>
            <Typography
                variant="h3"
                color="primary"
                align="center"
                gutterBottom
            >
                To do or not to do:
            </Typography>
            
            </Grid>
            <Grid item container xs={12} justify="center" >
                <TaskCreation />
            </Grid>
            <Grid item container xs={12}  justify="center">
                <TaskList />
            </Grid>
            
            </Grid>
         );
    }
}
 
const Home = withAuth(HomePage);
export default Home;