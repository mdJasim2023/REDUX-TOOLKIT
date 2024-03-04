import React from "react";
import { useGetpart4dataQuery } from "../services/jsonApi";

function FourthPart(){
    let {data} = useGetpart4dataQuery()
    return(
        <div>
            {
                data?.map((fourth)=>{
                    return(
                        <div className="m-2">
                            <h4>ACADEMIC PROFILE :</h4>
                            <ul>
                                <li>{fourth.graduation}</li>
                                <li>{fourth.intermediate}</li>
                                <li>{fourth.ssc}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FourthPart