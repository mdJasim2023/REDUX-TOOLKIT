import axios from "axios";
import React from "react";
import { useEffect } from "react";

function P(){
    let [dat,setDat] = React.useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/comments').then((res)=>{
            setDat(res.data)
        })
    })
    return(
        <div>
            <h1>Data : </h1>
            {
                dat.map((a)=>{
                    return <li>{a.comments}</li>
                })
            }
        </div>
    )
}

export default P