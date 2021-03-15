import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {SignIn} from "../../components/userAuth";


class LandingPage extends Component {
    state = {  }
    LandingText() {
        return(
            <main>
            <article>
                <h1>Organize Your Life!</h1>
                <h2>Log in or register - it's free</h2>
            </article>
            <article>
                <SignIn />
            </article>
            <div>
                <h3>Don't have an account?</h3>
                <Link to="/register">Register here</Link>
                
            </div>
            <div>
                <h3>Forgot password? </h3>
                <Link to="/resetpassword">Click here to reset your password</Link>
            </div>
            <section>
                <div>
                    <Link to="/about">About Us</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </section>
            
            </main>
        )
    }
    render() { 
        return (
            <this.LandingText/>
         );
    }
}
 
export default LandingPage;