import React from "react";
import { useGetProductDetailsByIdQuery } from "../../services/productsApi";

function Details(props){
    let {isLoading,data} = useGetProductDetailsByIdQuery(props.id)
    return(
        <div>
            <h1>Details : </h1>
            <h6> {props.id} </h6>
            {
                isLoading && <h1>Wait a Sec...</h1>
            }
            {
                !isLoading && 
                
                <h1>{data.price}</h1>
            }
        </div>
    )
}
export default Details