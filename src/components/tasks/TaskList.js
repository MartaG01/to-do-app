import React, {Component, useEffect, useState} from 'react';
import {withAuth} from "../../components/userAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import EditIcon from '@material-ui/icons/Edit';
import { Description } from '@material-ui/icons';


const TaskList=(props)=>{
    const [date, setDate]=useState(new Date()) 
    const [tasks, setTasks]=useState([]);
    const [editValue, setEditValue]=useState(null);
    const [editButton, setEditButton]=useState("Edit");
    const [taskDate, setTaskDate]=useState("");
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [dateInput, setDateInput]=useState("text");
    
    

    const removeTask=(taskId)=>{
        
        props.firebase.db.collection(props.firebase.auth.currentUser.uid).doc(taskId).delete().then(()=>{
            console.log("deleted!");
        }).catch((error)=>{
            console.log(error)
        })

    } 
    
    const editTask=(taskId)=>{
        if(editButton==="Edit"){
            setEditValue(taskId);
            setEditButton("Save");
            setDateInput("date");
            props.firebase.db.collection(props.firebase.auth.currentUser.uid).doc(taskId).get().then((doc)=>{
            setTaskDate(doc.data().date);
            setTitle(doc.data().title);
            setDescription(doc.data().description)
        })
        }
        
        if(editButton==="Save"){
            props.firebase.db.collection(props.firebase.auth.currentUser.uid).doc(taskId).set({
                date: taskDate,
                title: title,
                description: description
            }, { merge: true })
            setEditButton("Edit")
            setEditValue(null)
            setTaskDate("");
            setTitle("");
            setDescription("");
            setDateInput("text");

        }
        
    }
    
    
    useEffect(()=>{
        
        tasks && console.log("tasks update")
            console.log(date)
        
        
        
    },[tasks])

   

    useEffect(()=>{
        
        props.firebase.auth.onAuthStateChanged((user)=>{
            

            props.firebase.db.collection(props.firebase.auth.currentUser.uid).onSnapshot((querySnapshot)=>{
                let newTasks=[]
                querySnapshot.forEach(doc => {
                    newTasks.push(doc)
                });
                newTasks.sort((a,b)=>{return(
                    Date.parse(a.data().date)-Date.parse(b.data().date)
                )})
                setTasks(newTasks);
            })
            
        })


        const interval=setInterval(()=>{
            
            setDate(new Date())
            
        }, 60000)
        return ()=>clearInterval(interval);
},[])

 
    
        return(
            tasks.length!==0 &&<>
            
                <ul>
                    the list
                    {tasks.map((elem)=>(
                
                        <li key={elem.id}>
                            {editValue===elem.id ? 
                            
                            <form autoComplete="off">
                            <TextField type={dateInput} disabled={false} value={taskDate} onChange={(event)=>(setTaskDate(event.target.value))}/>
                            <TextField type="text" value={title} onChange={(event)=>(setTitle(event.target.value))}/>
                            <TextField type="text" value={description} onChange={(event)=>(setDescription(event.target.value))}/> 
                            
                            <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                onClick={()=>{editTask(elem.id)}}
                            >
                                {editButton}
                            </Button>
                            </form>   
                            
                             : 
                             <>
                             <div>Due date: {elem.data().date}</div>
                             <div>Title: {elem.data().title}</div>
                             <div>description: {elem.data().description}</div>
                             <div>time left: {Math.floor((new Date(Date.parse(elem.data().date))-date)/86400000)+1}</div><Button
                                variant="contained"
                                endIcon={<RemoveCircleIcon />}
                                onClick={()=>{removeTask(elem.id)}}
                            >
                                remove
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                onClick={()=>{editTask(elem.id)}}
                            >
                                Edit
                            </Button>
                             </>
                                }
                            
                            
                            
                            
                        </li>
                    ))}
                </ul>
            </>
            
        )


}
 
export default withAuth(TaskList)
