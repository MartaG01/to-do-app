import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Contact extends Component {
    state = {  }

    ContactText(){
        return(
            <div>contact details and contact form</div>
        )
    }
    render() { 
        return ( 
            <>
            <this.ContactText />
            <Link to="/">Back</Link>
            </>
         );
    }
}
 
export default Contact;