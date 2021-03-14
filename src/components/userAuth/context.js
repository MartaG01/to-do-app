import React from 'react';
import {withFirebase} from "../firebase";
import {withRouter} from "react-router-dom";

const AuthUserContext = React.createContext(null);

const withAuth= (Component) => {
    class WithAuth extends React.Component {
        constructor(props){
            super(props);
            this.state={
                authUser: null
            };
            
        }
   
        
        componentDidMount(){
            this.isUserAuth=this.props.firebase.auth.onAuthStateChanged(
                authUser=>{
                    if(authUser){
                        this.setState({authUser: authUser})
                    } else{
                        this.setState({authUser: null});
                        this.props.history.push("/");
                    }
                }
            )
          
        }
        componentWillUnmount(){
            this.isUserAuth();
        }
        render(){
          return (
            
            // <TestingContext />
            <AuthUserContext.Provider value={this.state.authUser}>
              <Component {...this.props} />

            </AuthUserContext.Provider>
          )}
      
    }
    return withRouter(withFirebase(WithAuth));
    
}


export default withAuth;


