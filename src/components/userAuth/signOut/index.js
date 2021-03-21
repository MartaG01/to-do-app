import React, {Component} from 'react';
import {withFirebase} from "../../firebase";
import {withRouter} from "react-router-dom";

class SignOut extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        
        return ( 
            <button onClick={this.props.firebase.signOut}>
                Sign out
            </button>
         );
    }
}
 
export default withRouter(withFirebase(SignOut));