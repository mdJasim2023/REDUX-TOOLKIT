import React from "react";
import { useGetAllProductsQuery, useGetProductDetailsByIdQuery } from "../../services/productsApi";
import Details from "./details";

function Products(){
    let {data,isLoading} = useGetAllProductsQuery();
    let [id , setId] = React.useState(null)
    return(
        <div className="border border-warning p-3 m-3 d-flex">
            <div className="border border w-50 p-2 m-1">
            <h1>Products</h1>
            {
                isLoading &&<h1>Loading....</h1>
            }
            <ul>
                {
                    data?.map((a)=>{
                        return <li onClick={()=>{setId(a.id)}}>{a.title}</li>
                    })
                }
            </ul>
            </div>
                 {id && <div className="border border w-50 p-2 m-1">
                     <Details id={id}></Details>
                  </div>}
        </div>
    )
}

export default Products