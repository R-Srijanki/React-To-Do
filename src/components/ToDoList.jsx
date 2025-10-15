import ToDoItem from "./ToDoItem";
import './style.css'

export default function ToDoList({list,onEdit,onDel}){
   
    return(
        <div className="container">
            {
                list.map((item,index)=><ToDoItem key={index} task={item} onEdit={onEdit} index={index} onDel={onDel}/>)
            }
        </div>
    )
}