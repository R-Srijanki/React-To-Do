import ToDoItem from "./ToDoItem";
import './style.css'

export default function ToDoList({list,onEdit,onDel}){
   
    return(
        //to map each task in list and send it to ToDoItem component as props .
        //use Date.now() to set unique key for every task as item.id
        <div className="container">
            {
                list.map((item)=><ToDoItem key={item.id} task={item.name} onEdit={onEdit} index={item.id} onDel={onDel}/>)
            }
        </div>
    )
}