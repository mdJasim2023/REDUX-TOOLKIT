import React from "react";
import { useGetpart1dataQuery } from "../services/jsonApi";

function FirstPart(){
    let {data} = useGetpart1dataQuery()
    console.log(data);
    return(
        <div>
            {
                data?.map((first)=>{
                    return(
                        <div  className="text-center m-3">
                            <h2>{first.fn.toUpperCase() +' '+ first.ln.toUpperCase()}</h2>
                        <span>{first.address}</span> &nbsp;  <b>|</b> &nbsp; <span style={{color:'blue'}}><u>{first.mail}</u></span> &nbsp;  <b>|</b> &nbsp;  <span>{first.phone}</span><br />
                        <span style={{color:'blue'}}><u>{first.linkedIn}</u></span>
                        <br />
                        <hr className="text-dark"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FirstPart