import ToDoItem from "./ToDoItem";
import './style.css'

export default function ToDoList({list,onEdit,onDel}){
   
    return(
        //to map each task in list and send it to ToDoItem component as props .
        <div className="container">
            {
                list.map((item,index)=><ToDoItem key={index} task={item} onEdit={onEdit} index={index} onDel={onDel}/>)
            }
        </div>
    )
}