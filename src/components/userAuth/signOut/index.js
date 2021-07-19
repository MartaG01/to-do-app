import React, {Component} from 'react';
import {withFirebase} from "../../../components/firebase";
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class SignOut extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        console.log(this.props)
        return ( 
            <Button
            variant="contained" 
            endIcon={<ExitToAppIcon/>}
            onClick={this.props.firebase.signOut}
            >
                Sign out
            </Button>
         );
    }
}
 
export default withRouter(withFirebase(SignOut));
