import React, {Component, useEffect, useState} from 'react';
import {withAuth} from "../../components/userAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import EditIcon from '@material-ui/icons/Edit';
import { Description } from '@material-ui/icons';
import { Grid, List, ListItem, Typography } from '@material-ui/core';


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
            tasks.length!==0 &&
                <Grid item container justify="center" alignItems="center" xs={12}>
                <List>
                    
                    {tasks.map((elem)=>(
                
                        <ListItem key={elem.id}>
                            {editValue===elem.id ? 
                            
                            <form autoComplete="off">
                            <TextField type={dateInput} disabled={false} value={taskDate} onChange={(event)=>(setTaskDate(event.target.value))}/>
                            <TextField type="text" value={title} onChange={(event)=>(setTitle(event.target.value))}/>
                            <TextField type="text" value={description} onChange={(event)=>(setDescription(event.target.value))}/> 
                            
                            <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                onClick={()=>{editTask(elem.id)}}
                                color="primary"
                            >
                                {editButton}
                            </Button>
                            </form>   
                            
                             : 
                             <Grid container spacing={5} justify="center" style={{marginTop: "2rem", width: "100vw", display: "flex"}}>
                                 <Grid item container xs={12} md={6} style={{padding: "2rem"}} justify="center">
                                    <Grid item container xs={12} md={6} justify="center">
                                        <Typography>
                                        Title: {elem.data().title}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center">
                                    <Typography>
                                        Due date: {elem.data().date}
                                    </Typography>
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center">
                                        <Typography > 
                                            <Typography align="center">Description: </Typography> 
                                            <Typography >{elem.data().description}</Typography>
                                        </Typography>
                                        
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center">
                                        Days left: {Math.floor((new Date(Date.parse(elem.data().date))-date)/86400000)+1}
                                    </Grid>
                                 </Grid>
                                
                                <Grid item container xs={12} md={4} spacing={2} justify="center" alignItems="center">
                                    <Grid item container justify="center" xs={12} md={3}>
                                        <Button
                                            variant="contained"
                                            endIcon={<RemoveCircleIcon />}
                                            onClick={()=>{removeTask(elem.id)}}
                                            color="primary"
                                            >
                                            remove
                                        </Button>
                                    </Grid>
                                    <Grid item container justify="center" xs={12} md={3}>
                                        <Button
                                            variant="contained"
                                            endIcon={<EditIcon />}
                                            onClick={()=>{editTask(elem.id)}}
                                            color="primary"
                                        >
                                        Edit
                                        </Button>
                                    </Grid>
                                </Grid>
                                
                            
                             </Grid>
                                }
                            
                            
                            
                            
                        </ListItem>
                    ))}
                </List>
                </Grid>
                
           
            
        )


}
 
export default withAuth(TaskList)
