import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deleteItem} from "./todolistSlice";

function Todolist(){
    let data = useSelector((state)=>{return state.t.todos})
    let [newtodo,setNewtodo] = React.useState('')
    let dispatch = useDispatch()
    return(
        <div className="border border-info p-3 m-2">
            <h1 className="border p-2">TodoList :</h1>
            <input type="text"  onChange={(e)=>{setNewtodo(e.target.value)}} className=""/>
            &nbsp;<button className="btn btn-success" onClick={()=>{dispatch(addtodo(newtodo))}}>Add</button>
            <ul className="">
            {
                data.map((todos,i)=>{
                    return <li className="list-group-item border border-warning p-2 m-1 w-25 d-flex justify-content-around align-items-center"><b className="text-success">{todos}</b>
                    <button className="btn btn-danger" onClick={()=>{dispatch(deleteItem({index:i}))}}>Delete</button>
                    </li>
                })
            }
            </ul>
        </div>
    )
}

export default Todolist