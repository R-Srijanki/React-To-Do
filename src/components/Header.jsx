import { useState } from "react";
import ToDoList from "./ToDoList";
import './style.css'

export default function Header(){
    const [taskname,settask]=useState(""); //state for task input 
    const [editind,seteditind]=useState(null); //state for edit index
    const [items,setitem]=useState([]);// state for list of tasks
    //on input we add value to taskname 
    function handlechange(e){
        settask(e.target.value);
    
    }
    //on click we want it to be added to items state variable 
    function handleclick(){
        if(taskname.trim()=="") //if empty task name then don't add 
           {
            alert("Please enter task");return;
           }
            if (items.some((item)=>item.toLowerCase()===taskname.trim().toLowerCase())) { //if duplicate exists
  alert("This task already exists!");
  return;
}
        if(editind!=null){ // task exists in items and it needs to be edited
            let updated=[...items];
            updated[editind]=taskname;
            setitem(updated);
            settask(""); //remove from input 
            seteditind(null); //after edit make it null
        }
        else{ //new task to be added to list
            setitem([...items,taskname]);
            settask("");
        }
    }
    //to add edit index variable and copy task name of it in input
    function handleedit(index){
        settask(items[index]);
        seteditind(index);
    }
    //to delete whole task from items using filter
    function handledel(index){
        if(confirm("Delete this task?"))
        setitem(items.filter((_,i)=>i!=index));
    }
    return(
        <div className="body">
            <h1>To-Do List</h1>
            <div className="todo">
                {/* input field with attributes type, value,placeholder */} 
                <input type="text" value={taskname} onChange={(e)=>handlechange(e)} placeholder="Task To Do" className="input"></input>
                {/*button to add task into items */}
                <button onClick={handleclick} className="addbut">{editind==null ? "Add" : "Update"}</button>
            </div>
            {/*to call component and send props to it*/}
            <ToDoList list={items} onEdit={handleedit} onDel={handledel}/>
        </div>
    )
}
