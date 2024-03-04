import React from "react";
import { useGetpart2dataQuery } from "../services/jsonApi";

function SecondPart(){
    let {data} = useGetpart2dataQuery()
    return(
        <div>
            {
                data?.map((second)=>{
                    return(
                        <div className="m-2">
                            <h4>CARRER OBJECTIVE :</h4>
                            <p style={{textAlign:'justify'}}>{second.obj}</p><br />
                            <h4>PROFILE SUMMARY :</h4>
                            <p style={{textAlign:'justify'}}>{second.ps}</p><br />
                            <h4>INTERNSHIP :</h4>
                            <p style={{textAlign:'justify'}}>{second.intern}</p><br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SecondPart