import React, {Component} from 'react';
import {withAuth} from "../../components/userAuth";



class AddTaskElement extends Component {
    constructor(props){
        super(props)
        this.state = { 
            date: new Date().toLocaleString(),
            title: "",
            description: ""
         }
    }
    
    addTask=(event)=>{
        event.preventDefault();
        console.log(this.props.firebase)
        // let updateTimestamp= this.props.firebase.db.collection("users").doc(this.props.firebase.auth.currentUser.uid).update({
        //     timestamp: this.props.firebase.db.FieldValue.serverTimestamp()
        // });
        
        this.props.firebase.db.collection("users").doc(this.props.firebase.auth.currentUser.uid).update({
            tasks: this.props.firebase.db.Pd.firebase_.firestore.FieldValue.arrayUnion({...this.state})
        
    })
}

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    render() { 
        console.log(this.state)
        return ( 
            <form onSubmit={this.addTask}>
            <input type="date" name="date" value={this.state.date} onChange={this.onChange}/>
            <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.onChange}/>
            <input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.onChange}/>
            <button type="submit">Add task</button>
            </form>
         );
    }
}
 
const AddTask= withAuth(AddTaskElement);
export default AddTask;