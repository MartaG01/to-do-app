import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {SignInForm} from "../../components/userAuth";
import Typography from "@material-ui/core/Typography";
import  Grid  from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';



class LandingPage extends Component {
    state = {  }
    LandingText() {
        return(
            <main>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>               
                        <Typography 
                        variant="h2"
                        color="primary"
                        align="center"
                        gutterBottom
                        
                        >
                            Organize Your Life!

                        </Typography>
                        
                        <Typography
                            variant="h3"
                            color="primary"
                            align="center"
                            style={{padding: "1rem"}}
                        >
                            Log in or register - it's free
                        </Typography>

                    </Grid>
                    <Grid item xs={12} >
                            <Grid item container style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <SignInForm />
                            </Grid>
                        
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item xs={12} >
                        <Typography
                            variant="h6"
                            color="primary"
                            align="center"
                        >
                            Don't have an account?
                        </Typography>
                        <Typography
                            variant="h6"
                            color="primary"
                            align="center"
                        >
                            <Link to="/register">Register here</Link>
                        </Typography>
                    </Grid>
                
            
                    <Grid item xs={12} >
                        <Typography
                            variant="h6"
                            color="primary"
                            align="center"
                        >
                            Forgot password? 
                        </Typography>
                        <Typography
                            variant="h6"
                            color="primary"
                            align="center"
                        >
                            <Link to="/resetpassword">Click here to reset your password</Link>
                        </Typography>
                        <Grid item xs={12} />
                    </Grid>
            <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                    >
                        <Link to="/about">About Us</Link>
                    </Typography>
                    
               
                    <Typography
                        variant="h6"
                        color="primary"
                        align="center"
                    >
                        <Link to="/contact">Contact</Link>
                    </Typography>
                    
               
            </Grid>
            </Grid>
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