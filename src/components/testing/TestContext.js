import React, {Component} from 'react';
import {FirebaseContext} from "../firebase";

class TestContext extends Component {
    state = { 
        text: null
     }
    static contextType = FirebaseContext;
    componentDidMount() {
        this.context.db.collection("test").doc("testing").get().then((doc)=>{
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
            {this.state.text}
            </>
         );
    }
}


 
export default TestContext;