import React from "react";
import { useGetAllCountriesQuerry } from "../../services/countriesApi";
function Countries(){
    let c = useGetAllCountriesQuerry()
    console.log(c);
   
    return (
        <div>
            <h1>Countries:</h1>
        </div>
    )
}

export default Countries