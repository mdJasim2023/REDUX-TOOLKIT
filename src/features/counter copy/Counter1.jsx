import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment1,decrement1, reset1 } from "./counterSlice1";

function Counter1(){
    let data = useSelector((state)=>{return state.c1.count1})
    let dispatch = useDispatch()
    return (
        <div className="border border-warning p-3 m-2">
            <h1>Counter : {data}</h1>
            <button className="btn btn-danger" onClick={()=>{dispatch(decrement1())}}>Decrement</button>
            <button className="btn btn-success m-1" onClick={()=>{dispatch(increment1())}}>Increment</button>
            <button className="btn btn-warning m-1" onClick={()=>{dispatch(reset1())}}>Reset</button>
        </div>
    )
}

export default Counter1