import { Grid, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import main_image from "../../images/calendar.jpg"

class About extends Component {
    state = {  }

    AboutText(){
        return(
            <Grid container justify="center" alignItems="center" spacing={7} style={{padding: "4rem 2rem", width: "100vw", height: "100vh"}}> 
                <Grid item container justify="center" xs={12}>
                    <Typography variant="h3" color="primary">About this page and the authors</Typography>
                </Grid>
                <Grid item container justify="center" xs={12} md={6} >
                    <img src={main_image} style={{height: "100%", width: "100%"}} alt={"Diary Photo by Dwayne Blee from freeimages.com"}/>
                </Grid>
                <Grid item container xs={12} md={6}>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus neque malesuada lobortis volutpat. Nam eu tempus dolor. Proin tincidunt in leo auctor bibendum. Vestibulum blandit nisi id auctor aliquet. Quisque quis efficitur eros. Proin libero lorem, mollis at mauris vitae, porta placerat eros. Nullam blandit ac sem vel viverra. Etiam dignissim, felis in dictum bibendum, ex ex ullamcorper neque, vel ullamcorper ante nisi eleifend neque. Duis nulla justo, varius eu consectetur vel, tincidunt quis turpis. Ut vel malesuada erat. Aliquam non dapibus enim, sit amet egestas mauris. Mauris a velit velit. Nunc massa nulla, tincidunt id tempor vitae, aliquam eu urna. Duis porttitor tempus metus ac congue. Integer efficitur semper tellus, vitae mattis lacus ultrices tristique. Curabitur eros dui, ornare at tellus quis, accumsan varius sapien.
                    </Typography>
                    <Typography>
                    Quisque euismod rhoncus mi eu sodales. Aliquam leo quam, aliquet iaculis lobortis ut, eleifend ut magna. Proin vel efficitur enim. In vel magna ut nibh tempus lobortis. Sed in malesuada tellus. Nulla pellentesque gravida sapien, sed gravida libero. Integer venenatis libero sit amet libero rhoncus viverra. Integer eu bibendum est. Aliquam erat volutpat. Nullam pharetra fermentum convallis. Vestibulum egestas dapibus urna, at ultrices neque mollis vitae. Etiam condimentum ut leo ac tempus.

                    Sed in ullamcorper odio. Pellentesque ultricies diam in mattis tristique. Phasellus finibus vel elit sed congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque dolor dui, tristique in pharetra et, imperdiet sed lectus. Fusce nisi dui, faucibus in aliquet eget, condimentum sit amet massa. Suspendisse potenti.
                    </Typography>
                </Grid>
                <Grid item container xs={12} justify="center" >
                    <Link to="./">Back</Link>
                </Grid>
            </Grid>
        )
    }
    render() { 
        return ( 
            <this.AboutText />
         );
    }
}
 
export default About;