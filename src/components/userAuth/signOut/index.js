import React, {Component} from 'react';
import {withFirebase} from "../../../components/firebase";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Grid } from '@material-ui/core';

class SignOut extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return ( 
            <Grid container item xs={12} justify="flex-end">
                <Button
                variant="contained" 
                endIcon={<ExitToAppIcon/>}
                onClick={this.props.firebase.signOut}
                color="primary"
                >
                    Sign out
                </Button>
            </Grid>
            
         );
    }
}
 
export default withRouter(withFirebase(SignOut));
