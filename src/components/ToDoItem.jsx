import { useState } from "react";
import './style.css'

export default function ToDoItem({task,onEdit,index,onDel}){
    const [complete,setcomplete]=useState(false); //state for complete of task
    function handleedit(){ //to handle edit of task
        onEdit(index);
    }
    function handledelete(){ //to handle delete of task
        onDel(index);
    }
    function handlecomplete(){ //to change state of complete on click of it
        setcomplete(!complete);
    }
    return(
        <div className="taskstyle">
            <p className="taskname">{task}</p> 
            <div className="buttons"> {/* buttons for edit, delete, complete for each task*/}
            <button onClick={handleedit} className="editbut">Edit</button>
            <button onClick={handledelete} className="delbut">Delete</button>
            <button onClick={handlecomplete} className="combut" style={complete?{backgroundColor:"green"}:{backgroundColor:"gray"}}>{complete?"Completed":"NotComplete"}</button>
            </div>
        </div>
    )
}