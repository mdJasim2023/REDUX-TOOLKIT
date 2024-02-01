import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deleteTodo } from "./todoSlice";

function Todo(){
    let todos = useSelector((state)=>{return state.todolist.todos})
    let dispatch = useDispatch()
    let [newTodo,setNewTodo] = React.useState('')
    return(
        <div className="border border-inf0 p-3 m-3">
            <h1>Todolist :</h1>
            <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtask(newTodo))}}>AddTask</button>
            <ul>
                {
                    todos.map((t,i)=>{
                        return <li>
                                    {t}
                                    <button className="btn btn-danger" onClick={()=>{deleteTodo({index:i})}}>Delete</button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo