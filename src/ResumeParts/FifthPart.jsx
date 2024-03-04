import React from "react";
import { useGetpart5dataQuery } from "../services/jsonApi";

function FifthPart(){
    let {data} = useGetpart5dataQuery()
    return(
        <div className="m-2">
            {
                data?.map((fifth)=>{
                    return(
                        <div className="">
                            <h4>PERSNOL PROFILE :</h4>
                            <ul>
                                 <span><b>Full Name : </b>{fifth.name}</span><br />
                                 <span><b>DOB :</b> {fifth.dob}</span><br />
                                 <span><b>Gender : </b>{fifth.gender}</span><br />
                                 <span><b>Languages Known : </b>{fifth.languages}</span><br />
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FifthPart