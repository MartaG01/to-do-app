import React, {Component} from 'react';
import {withFirebase} from "../../firebase";
import {Link, withRouter} from "react-router-dom";

const initialState={
    email: "",
    password: "",
    error: null
}

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();
        this.props.firebase.signIn(this.state.email, this.state.password).then(()=>{
            this.setState({...initialState});
            this.props.history.push("/home");
        }).catch(error=>{
            this.setState({error});
        })
    }

    LoginFormField(inputName, inputType){
        return(
            <label>{inputName}
                <input name={inputName} value={this.state.inputName} onChange={this.onChange} type={inputType} placeholder={inputName} />
            </label>
        )
    }
    
    render() { 
        return ( 
            <>
            <form onSubmit={this.onSubmit}>
                {this.LoginFormField("email", "text")}
                {this.LoginFormField("password", "password")}
                <button type="submit">Login</button>
            </form>
            </>
         );
    }
}
 
export default withRouter(withFirebase(SignInForm));