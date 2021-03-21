import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import { withFirebase } from '../../firebase';

const initialState={
    email: "",
    error: null
}

class PasswordReset extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState,
            invalidInputText: null
        }
    }
    
    ResetText=()=>{
        return(
            <div>
                <h2>Reset Your Password</h2>
            </div>
        )
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if (this.state.email===""|| !this.state.email.includes("@")){
            this.setState({invalidInputText: "Invalid input"})
        } else {
            this.props.firebase.passwordReset(this.state.email).then(()=>{
                this.setState({...initialState})
                this.props.history.push("/")
            }).catch(error=>{
                this.setState({error});
            });
        }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() { 
        return ( 
            <>
                <this.ResetText />
                <form onSubmit={this.onSubmit}>
                    <label>Your email address: 
                        <input type="text" name="email" value={this.state.email} placeholder="email" onChange={this.onChange}/>
                    </label>
                    <button type="submit">Reset password</button>
                </form>
                {this.state.invalidInputText&&<p>Invalid email</p>}
                {this.state.error&&<p>Error, please try again later</p>}
                <Link to="/">Back to log in</Link>
            </>
         );
    }
}
 
export default withRouter(withFirebase(PasswordReset));