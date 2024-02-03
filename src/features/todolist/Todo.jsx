import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addtask ,deltask} from "./todoSlice";

function Todo(){
    let value = useSelector((state)=>{return state.todo.todos})
    let [newI,setNewI] = React.useState('')
    let dispatch = useDispatch()
    return(
        <div className="border border-info p-3 m-2">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewI(e.target.value)}}/>
            <button className="btn btn-success" onClick={()=>{dispatch(addtask(newI))}}>AddTask</button>
            <ul>
                {
                    value.map((t,i)=>{
                        return <li>{t}
                        <button className="btn btn-danger" onClick={()=>{dispatch(deltask({index:i}))}}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todo