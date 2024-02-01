import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "./counterSlice";

function Counter(){
    let data = useSelector((state)=>{return state.c.count})
    let dispatch = useDispatch()
    return (
        <div className="border border-warning p-3 m-2">
            <h1>Counter : {data}</h1>
            <button className="btn btn-danger" onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button className="btn btn-success m-1" onClick={()=>{dispatch(increment())}}>Increment</button>
            <button className="btn btn-warning m-1" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default Counter