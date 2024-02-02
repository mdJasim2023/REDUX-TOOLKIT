import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, delTodo } from "./todoSlice";

function Todo(){
    let values = useSelector((state)=>{return state.todolist.todos})
    console.log(values);
    let [item,setItem] = React.useState('')
    let dispatch = useDispatch()
    return(
        <div>
            <h1>Todo-List</h1>
            <input type="text" onChange={(e)=>{setItem(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtask(item))}}>AddTask</button>
            <ul>
                {
                    values.map((t,i)=>{
                        return <li>
                            {t}
                            <button onClick={()=>{dispatch(delTodo(i))}}>Delete</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todo