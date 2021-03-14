import React, {Component} from 'react';
import {Link, Redirect, useHistory, withRouter} from "react-router-dom";
import {withFirebase} from '../../firebase/index';

const initialState= {
    username: "",
    usersurname: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
    checkboxCheck: true
}

class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState
        }
        
    }
    

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    onCheck=()=>{
        this.state.checkboxCheck === true ? this.setState({checkboxCheck: false}) : this.setState({checkboxCheck: true})
    }


    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
        if(this.state.username===""||this.state.usersurname===""||this.state.email===""||!this.state.email.includes("@")||(this.state.passwordOne!==this.state.passwordTwo)||this.state.checkboxCheck===false){
            console.log("form not submitted")
            
            
        } else {
            console.log("form submitted")
            this.props.firebase.createUser(this.state.email, this.state.passwordOne).then(authUser=>{
                
                this.setState({...initialState});
                this.props.history.push("/home");
            })
            .catch(error=>{
                this.setState({error: error})
            });
            }
            
        }
    

    InputField(propName, placeHolder) {
       let field = null;
       if (propName==="username"){
           field=
           <label>{placeHolder}
           <input name={propName} value={this.state.propName} type="text" placeholder={placeHolder} onChange={this.onChange} autoFocus={true} />
           </label>
       } else if (propName.includes("password")) {
        field=
        <label>{placeHolder}
        <input name={propName} value={this.state.propName} type="password" placeholder={placeHolder} onChange={this.onChange} />
        </label>
       } else {
           field=
        <label>{placeHolder}
        <input name={propName} value={this.state.propName} type="text" placeholder={placeHolder} onChange={this.onChange} />
        </label>
       }
        return(
            
            field
        )
    }
    
    render() { 
        
        return ( 
            <form onSubmit={this.onSubmit}>
                {this.InputField("username", "Name")}
                {this.InputField("usersurname", "Surname")}
                {this.InputField("email", "Email")}
                {this.InputField("passwordOne", "Password")}
                {this.InputField("passwordTwo", "Repeat password")}
                <label>Agree to policy
                <input type="checkbox" checked={this.state.checkboxCheck} onChange={this.onCheck}/>
                </label>                
                <button type="submit">Submit</button>
            </form>
         );
    }
}
 
const UserRegistrationForm= withRouter(withFirebase(RegistrationForm));
export default UserRegistrationForm;