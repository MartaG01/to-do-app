import React, {Component} from 'react';
import {Link} from "react-router-dom";


class About extends Component {
    state = {  }

    AboutText(){
        return(
            <div>
                <h2>About us</h2>
                <p>text</p>
            </div>
        )
    }
    render() { 
        return ( 
            <>
                <this.AboutText />
                <Link to="/">Back</Link>
            </>
         );
    }
}
 
export default About;