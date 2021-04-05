import React, {Component, useEffect, useState} from 'react';
import {withAuth} from "../../components/userAuth";


const TaskList=(props)=>{
    const [tasks, setTasks]=useState(null);
    
    
    
    
    const onRemove=(id)=>{
        const updatedTasks = Object.entries(tasks).filter((elem)=>{return elem[0] !== id})
        setTasks(Object.fromEntries(updatedTasks))
       
    }
    
    
    useEffect(()=>{
        tasks && props.firebase.db.collection("users").doc(props.firebase.auth.currentUser.uid).update({
            tasks: tasks
        })

        
    },[tasks])

    
    

    useEffect(()=>{
        props.firebase.auth.onAuthStateChanged((user)=>{
            
            props.firebase.db.collection("users").doc(user.uid).onSnapshot((doc)=>{
                setTasks(doc.data().tasks)
                
            })
        })
        
        // return tasks
},[])

    
        return(
            
            <ul>
                {
                   tasks && Object.entries(tasks).map(([key,value])=>{
                       return(
                           <li key={key}>
                               <div>{value.date}</div>
                               <div>{value.title}</div>
                               <div>{value.description}</div>
                               <button onClick={()=>onRemove(key)}>Remove</button>
                           </li>
                       )
                   })
                }
            </ul>
        )


}
 
export default withAuth(TaskList)
