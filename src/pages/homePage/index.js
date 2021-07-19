import React, {Component} from 'react';
import {AddTask, SignOut, TaskList} from "../../components";
import {withAuth} from "../../components/userAuth";
import Typography from "@material-ui/core/Typography";

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    
    render() { 
        
        return ( 
            <>
            <SignOut />
            <Typography
                variant="h3"
                color="primary"
                align="center"
                gutterBottom
            >
                To do or not to do:
            </Typography>
            
            <AddTask />
            <TaskList />
            </>
         );
    }
}
 
const Home = withAuth(HomePage);
export default Home;