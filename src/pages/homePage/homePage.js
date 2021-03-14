import React, {Component} from 'react';
import {withAuth} from "../../components/userAuth";
import SignOut from "../../components/userAuth/SignOut";

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <p>home page</p>
            <SignOut />
            </>
         );
    }
}
 
const Home = withAuth(HomePage);
export default Home;