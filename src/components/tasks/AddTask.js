import React, {Component} from 'react';
import {withAuth} from "../../components/userAuth";

let initialState={
    date: new Date().toLocaleString(),
    title: "",
    description: "",
    error: null
}

class AddTaskElement extends Component {
    constructor(props){
        super(props)
        this.state = { 
            ...initialState
 
         }
    }
    
    addTask=(event)=>{
        event.preventDefault();
        this.props.firebase.db.collection("users").doc(this.props.firebase.auth.currentUser.uid).update({
            tasks: this.props.firebase.db.Pd.firebase_.firestore.FieldValue.arrayUnion({...this.state,})
        
        
    }).then(()=>{
        this.setState({...initialState})
         Array.from(document.querySelectorAll("input")).forEach(
                input=>(input.value="")
            );
    })
    .catch((error)=>{
        this.setState({error: error})
    })
}

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }
    render() { 
        return ( 
            <form onSubmit={this.addTask}>
                <label htmlFor="date">Set due date: </label>
                <input type="date" name="date" value={this.state.date} onChange={this.onChange}/>
                <label htmlFor="title">Task title: </label>
                <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.onChange}/>
                <label htmlFor="description">and some description...</label>
                <input type="text" placeholder="description" name="description" value={this.state.description} onChange={this.onChange}/>
            <button type="submit">Add task</button>
            {this.state.error&& <p>An error occured, please try again later</p>}
            </form>
         );
    }
}
 
const AddTask= withAuth(AddTaskElement);
export default AddTask;