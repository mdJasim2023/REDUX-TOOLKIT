import React from "react";
import { increment , decrement , reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
function CounterA(){
    let value = useSelector((state)=>{return state.counter.count})
    let dispatch = useDispatch()
    return(
        <div className="border border-danger p-3 m-2">
            <h1>Counter A : {value} </h1>
            <button className="btn btn-success m-1" onClick={()=>{dispatch(increment())}}> Increment </button>
            <button className="btn btn-danger" onClick={()=>{dispatch(decrement())}}> Decrement </button>
            <button className="btn btn-warning m-1" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default CounterA