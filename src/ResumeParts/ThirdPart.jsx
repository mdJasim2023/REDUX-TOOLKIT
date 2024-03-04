import React from "react";
import { useGetpart3dataQuery } from "../services/jsonApi";

function ThirdPart(){
    let {data} = useGetpart3dataQuery()
    return(
        <div>
            {
                data?.map((third)=>{
                    return(
                        <div className="m-2">
                            <h4>TECHNICAL SKILLS :</h4>
                           <ul>
                           {
                                third.skills.map((s)=>{
                                    return <h6 className="m-2">{s}</h6>
                                })
                            }
                           </ul>
                            <br />
                            <h4>PROJECTS :</h4>
                            <p style={{textAlign:'justify'}}>{third.projects}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ThirdPart