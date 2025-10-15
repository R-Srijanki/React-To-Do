import { useState } from "react";
import ToDoList from "./ToDoList";
import './style.css'

export default function Header(){
    const [taskname,settask]=useState("");
    const [editind,seteditind]=useState(null);
    const [items,setitem]=useState([]);
    function handlechange(e){
        settask(e.target.value);
    
    }
    function handleclick(){
        if(taskname=="")
            return;
        if(editind!=null){
            let updated=[...items];
            updated[editind]=taskname;
            setitem(updated);
            settask("");
            seteditind(null);
        }
        else{
            setitem([...items,taskname]);
            settask("");
        }
    }
    function handleedit(index){
        settask(items[index]);
        seteditind(index);
    }
    function handledel(index){
        let updated=items.filter((_,i)=>i!=index);
        setitem(updated);
    }
    return(
        <div className="body">
            <h1>To-Do List</h1>
            <div className="todo">
                <input type="text" value={taskname} onChange={(e)=>handlechange(e)} placeholder="Task To Do" className="input"></input>
                <button onClick={handleclick} className="addbut">{editind==null ? "Add" : "Update"}</button>
            </div>
            <ToDoList list={items} onEdit={handleedit} onDel={handledel}/>
        </div>
    )
}
