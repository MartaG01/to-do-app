import React, {Component} from 'react';
import {withFirebase} from "../../firebase";
import {withRouter} from "react-router-dom";

const initialState={
    email: "",
    password: "",
    error: null
}

class SignInForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState,
            invalidText: null
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();
        if(this.state.email===""||!this.state.email.includes("@")||this.state.password===""){
            this.setState({invalidText: "Invalid input"})
        } else {
            this.props.firebase.signIn(this.state.email, this.state.password).then(()=>{
                this.setState({...initialState});
                this.props.history.push("/home");
            }).catch(error=>{
                this.setState({error});
                console.log(error.message)
            })
        }
        
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
            {this.state.invalidText&&<p>{this.state.invalidText}</p>}
            {this.state.error&&<p>{this.state.error.message}</p>}
            </>
         );
    }
}
 
export default withRouter(withFirebase(SignInForm));