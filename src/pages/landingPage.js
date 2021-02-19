import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {LogIn, PasswordReset, Register} from "../components/userAuth";
import About from "./about/aboutPage";
import Contact from "./contact/contactPage";

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
                <div>
                    <LogIn />
                </div>
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
                    <Router>
                        <Switch>
                            <Route exact path="/">
                               <this.LandingText />
                            </Route>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/resetpassword" component={PasswordReset} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </Router>
         );
    }
}
 
export default LandingPage;