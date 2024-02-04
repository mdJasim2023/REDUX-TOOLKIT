import React from "react";
import { useGetAllCountriesQuery , useLazyGetAllCountryDetailsByNameQuery } from "../../services/countriesApi";

function Countries(){
    let {isLoading,data} = useGetAllCountriesQuery()
    let [det,setDet] = React.useState({})
    let [getDetails] = useLazyGetAllCountryDetailsByNameQuery()
    function getcountry(name){
        getDetails(name).then((res)=>{setDet({...res.data[0]})})
    }
    return(
        <div>
            <div className="d-flex flex-wrap justify-content-around m-3 p-3">
            <ul className="border border-dark p-3 w-50">
              <h1>Countries :</h1>
                 {
                 isLoading &&
                    <h1>Loading...</h1>
                }
            {data &&
                data.map((countries)=>{
                    return <li className="list-group-item p-1" onClick={()=>{getcountry(countries.name.common)}}>{countries.name.common
                    }</li>
                })
            }
            </ul>
            <div className="border border-success border-5 p-2 w-50">
                <h1>Selected Country :</h1>
            </div>
            </div>
        </div>
    )
}

export default Countries