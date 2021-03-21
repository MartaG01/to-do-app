import React, {Component} from 'react';
import {withAuth, SignOut} from "../../components/userAuth";

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