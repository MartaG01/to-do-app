import React, {Component} from 'react';
import {FirebaseContext} from "../firebase";
import {withFirebase} from "../firebase";

class TestContext extends Component {
    state = { 
        text: null
     }
    // static contextType = FirebaseContext;
    componentDidMount() {
        this.props.firebase.db.collection("test").doc("testing").get().then((doc)=>{
            if(doc.exists){
                this.setState({text: doc.data().database})
            } else {
                console.log("No such doc!")
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
    

    render() { 
        return ( 
            <>
                <div>
                {this.state.text}
                </div>
            
            </>
         );
    }
};

const TestingContext=withFirebase(TestContext)
export {TestingContext}