import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";
function Products(){
    let {data, isLoading} = useGetAllProductsQuery()
    return(
        <div>
            <ul>
                {
                    isLoading && <h1>Loading......</h1>
                }
                {
                    data && data.map((a)=>{
                        console.log(data);
                        return (

                            <div>
                                <li>{a.title}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products