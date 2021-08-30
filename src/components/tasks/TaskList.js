import React, {useEffect, useState} from 'react';
import {withAuth} from "../../components/userAuth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import EditIcon from '@material-ui/icons/Edit';

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
                            <Grid item container justify="center" spacing={2}
                            
                            >
                            <form autoComplete="off" >
                            <Grid item container justify="center" alignItems="center" direction="column" xs={12} spacing={2}>
                            <Grid item container xs={12} 
                            
                            >
                            <TextField 
                            label="due date"
                            type="text" 
                            name="date" 
                            color="primary"
                            onFocus={(e)=>{e.target.type="date"}}
                            onBlur={(e)=>{e.target.type="text"}}
                            value={taskDate} 
                            onChange={(event)=>(setTaskDate(event.target.value))}
                            variant="outlined"
                            />
                            </Grid>
                            <Grid item container xs={12}>
                            <TextField 
                            label="task title" 
                            type="text" 
                            multiline
                            rows={8}
                            name="title" 
                            value={title} 
                            onChange={(event)=>(setTitle(event.target.value))}
                            variant="outlined"
                            style={{width: "100%"}}
                            />
                            </Grid>
                            <Grid item container xs={12}>
                            <TextField 
                            label="description" 
                            type="text" 
                            multiline
                            rows={8}
                            name="description" 
                            value={description} 
                            onChange={(event)=>(setDescription(event.target.value))}
                            variant="outlined"
                            style={{width: "100%"}}
                            /> 
                            </Grid>
                            
                            <Grid item container xs={12} justify="center">
                            <Button
                                variant="contained"
                                endIcon={<EditIcon />}
                                onClick={()=>{editTask(elem.id)}}
                                color="primary"
                            >
                                {editButton}
                            </Button>
                            </Grid>
                            </Grid>
                            </form> 
                            </Grid>  
                            
                             : 
                             <Grid container spacing={5} justify="center" style={{marginTop: "2rem", width: "100vw", display: "flex"}}>
                                 <Grid item container xs={12} md={6} style={{padding: "2rem"}} justify="center">
                                    <Grid item container xs={12} md={6} justify="center" style={{ display: "flex", overflow: "auto", wordWrap: "break-word"}}>
                                        <Typography
                                        component="span"
                                        color="primary"
                                        gutterBottom
                                        variant="h4"
                                        style={{whiteSpace: "pre-wrap", textAlign: "center"}}
                                        >
                                        {elem.data().title}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center">
                                    
                                       {Math.floor((new Date(Date.parse(elem.data().date))-date)/86400000)+1 >= 0 ? <Typography
                                    color="secondary"
                                    component="span"
                                    >
                                        Days left: {Math.floor((new Date(Date.parse(elem.data().date))-date)/86400000)+1}
                                    </Typography> 
                                    : 
                                    <Typography
                                    color="secondary"
                                    component="span"
                                    >
                                        Past due date: {Math.abs(Math.floor((new Date(Date.parse(elem.data().date))-date)/86400000)+1)} days
                                    </Typography>}
                                    
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center">
                                    <Typography
                                        component="span"
                                    >
                                        Due date: {elem.data().date}
                                    </Typography>
                                    </Grid>
                                    <Grid item container xs={12} md={6} justify="center" style={{ display: "flex", overflow: "auto", wordWrap: "break-word" }}>
                                        <Typography > 
                                           
                                            <Typography 
                                            color="primary" 
                                            style={{whiteSpace: "pre-wrap"}} 
                                            component="span"                                       
                                            >{elem.data().description}</Typography>
                                        </Typography>
                                        
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
                                    <Grid item container justify="center" xs={12} md={3} >
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
