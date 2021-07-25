import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Policyterms extends Component{
    render(){
        return(
            <Grid container xs={12} justify="center" spacing={10}>
                <Grid item container justify="center" xs={12} style={{marginTop: "5rem"}}>
                    <Typography variant="h3" color="primary">Policy terms to read</Typography>
                </Grid>
                <Grid item container justify="center" xs={12} style={{margin: "0 5rem 5rem 5rem"}}>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus neque malesuada lobortis volutpat. Nam eu tempus dolor. Proin tincidunt in leo auctor bibendum. Vestibulum blandit nisi id auctor aliquet. Quisque quis efficitur eros. Proin libero lorem, mollis at mauris vitae, porta placerat eros. Nullam blandit ac sem vel viverra. Etiam dignissim, felis in dictum bibendum, ex ex ullamcorper neque, vel ullamcorper ante nisi eleifend neque. Duis nulla justo, varius eu consectetur vel, tincidunt quis turpis. Ut vel malesuada erat. Aliquam non dapibus enim, sit amet egestas mauris. Mauris a velit velit. Nunc massa nulla, tincidunt id tempor vitae, aliquam eu urna. Duis porttitor tempus metus ac congue. Integer efficitur semper tellus, vitae mattis lacus ultrices tristique. Curabitur eros dui, ornare at tellus quis, accumsan varius sapien.
                    </Typography>
                    <Typography>
                    Fusce mollis orci eros, nec condimentum turpis congue et. Proin eu imperdiet tortor, sed vulputate mauris. Aenean fermentum luctus sollicitudin. In feugiat lectus quis nulla rutrum, ac vestibulum dolor volutpat. Sed a vestibulum nunc. Pellentesque nec purus placerat, venenatis mauris sed, cursus nulla. Praesent et nisi erat. Nam fermentum sapien nibh, eu suscipit nibh elementum a. Sed efficitur auctor sapien, quis tincidunt nibh imperdiet placerat. Proin eget mi sed ex sagittis molestie non mattis eros. Nunc a porta leo. Fusce ullamcorper consectetur ante feugiat cursus. Donec dictum, urna non fringilla blandit, augue sem tempor purus, quis finibus arcu diam imperdiet lectus.
                    </Typography>
                    <Typography>
                    Maecenas eu vestibulum metus. Phasellus eu elementum lorem, sed maximus massa. Fusce in mauris non risus condimentum ornare. Fusce ornare tempor luctus. Praesent tortor magna, suscipit at facilisis quis, aliquam et turpis. Mauris lectus mauris, accumsan et arcu malesuada, ornare hendrerit sapien. Aliquam volutpat imperdiet lacinia. Maecenas gravida pulvinar nibh, faucibus convallis lorem lobortis bibendum. In et eleifend lorem, eu pellentesque nibh. Aenean porttitor quis justo eu hendrerit. Nunc tristique neque mi, in elementum lorem rutrum ac. Nunc placerat neque mattis, convallis diam et, porttitor nulla. Nulla facilisi. Etiam sit amet placerat ante. Vivamus egestas dignissim sapien quis egestas. Morbi volutpat ante eget orci tristique congue.
                    </Typography>
                    <Typography>
                    Vestibulum pretium nisl in eros consequat ornare. Suspendisse sollicitudin suscipit faucibus. Cras venenatis tortor vel fringilla gravida. Vestibulum id ligula maximus, semper mauris facilisis, eleifend lacus. Nam scelerisque dui eu odio pulvinar bibendum. Mauris egestas imperdiet eros sed laoreet. Nullam felis massa, efficitur at ipsum ac, hendrerit pellentesque risus. Nunc nec eleifend velit. Aliquam et magna vitae est accumsan tincidunt sit amet sed felis.
                    </Typography>
                    <Typography>
                    Aenean euismod id metus condimentum pulvinar. Sed in ligula nec nibh ultrices ultricies at nec est. Donec sit amet ligula vel dui vulputate consequat. Morbi ac ante id urna condimentum aliquam. Pellentesque vel augue sed sapien sollicitudin consectetur. Integer feugiat quam eu turpis gravida, ac dapibus nisi laoreet. Mauris mattis faucibus nisl, nec vulputate ligula sollicitudin vitae. Sed non fringilla diam, sed commodo lectus. Mauris vehicula felis non mi pulvinar, quis bibendum risus sagittis. Phasellus auctor sem eu facilisis accumsan.
                    </Typography>
                </Grid>
                <Grid item container justify="center"  xs={12}>
                    <Typography color="primary">
                        <Link to="/register">Back</Link>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}


export default Policyterms