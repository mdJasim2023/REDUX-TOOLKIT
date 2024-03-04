import React from "react";
import { useGetfinaldataQuery } from "../services/jsonApi";

function Final(){
    let {data} = useGetfinaldataQuery()
    return(
        <div className="m-2">
            {
                data?.map((final)=>{
                    return(
                        <div>
                            <h4>DECLARATION :</h4>
                            <p className="container">{final.declaration}</p>
                            <div className="d-flex justify-content-between m-3">
                                <b>{final.city}</b>
                                <b>{final.sign}</b>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Final