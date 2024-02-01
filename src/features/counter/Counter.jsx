import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, res } from "./counterSlice";

function CounterA(){

    let value = useSelector((state)=>{return state.counter.count})
    let dispatch = useDispatch()
    return(
        <div className="border border-success p-4 m-2">
            <h1>Counter : {value} </h1>
            <button className="btn btn-success m-1" onClick={()=>{dispatch(inc())}}>Inc</button>
            <button className="btn btn-danger" onClick={()=>{dispatch(dec())}}>Dec</button>
            <button className="btn btn-warning m-1" onClick={()=>{dispatch(res())}}>Res</button>
        </div>
    )
}
export default CounterA