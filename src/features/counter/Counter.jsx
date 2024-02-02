import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter(){
    let value = useSelector((state)=>{return state.counter.count})
    let dispatch = useDispatch()
    return(
        <div>
            <h1>Counter : {value} </h1>
            <button onClick={()=>{dispatch(increment())}}>Dec</button>
            <button onClick={()=>{dispatch(decrement())}}>Inc</button>
        </div>
    )
}

export default Counter