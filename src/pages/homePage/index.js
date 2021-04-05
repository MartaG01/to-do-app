import React, {Component} from 'react';
import {AddTask, SignOut, TaskList} from "../../components";
import {withAuth} from "../../components/userAuth";

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    
    render() { 
        // console.log(this.props.firebase.auth.currentUser.uid)
        return ( 
            <>
            <p>home page</p>
            <SignOut />
            <AddTask />
            <TaskList />
            </>
         );
    }
}
 
const Home = withAuth(HomePage);
export default Home;