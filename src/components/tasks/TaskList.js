import React, {Component, useEffect, useState} from 'react';
import {withAuth} from "../../components/userAuth";


const TaskList=(props)=>{
    const [date, setDate]=useState(new Date().getDate()) 
    const [tasks, setTasks]=useState(null);
    const [orderedTasks, setorderedTasks] = useState(null);
    
    
    
    
    const onRemove=(date, title, description)=>{

        const updatedTasks = tasks.filter((elem)=>{
            return !(elem.date === date && elem.title===title && elem.description===description)
        })
        setTasks(updatedTasks);
        
       
    }
    const compare= (a,b) => {
        if(a.date < b.date){
            return -1;
        }
        if(a.date>b.date){
            return 1;
        }
        return 0
    }

    
    
    useEffect(()=>{
        
        tasks && props.firebase.db.collection("users").doc(props.firebase.auth.currentUser.uid).update({
            tasks: tasks
        })
        
        tasks && setorderedTasks([...tasks].sort(compare))
        
        
    },[tasks])

    

    useEffect(()=>{
        
        props.firebase.auth.onAuthStateChanged((user)=>{
            
            props.firebase.db.collection("users").doc(user.uid).onSnapshot((doc)=>{
                setTasks(doc.data().tasks)
                
            })
            
        })


        const interval=setInterval(()=>{
            
            setDate(new Date().getDate())
        }, 60000)
        return ()=>clearInterval(interval);
},[])
 
    
        return(
            
            <ul>
                {
                    
                orderedTasks && Object.entries(orderedTasks).map(([key, value])=>{
                    return(
                        <li key={key}>
                            <div>{value.date}</div>
                            <div>{value.title}</div>
                            <div>{value.description}</div>
                            <button onClick={()=>onRemove(value.date, value.title, value.description)}>Remove</button>
                            <div>Days left: {new Date(value.date).getDate()-date}</div>
                        </li>
                    )
                })
                }
            </ul>
        )


}
 
export default withAuth(TaskList)
