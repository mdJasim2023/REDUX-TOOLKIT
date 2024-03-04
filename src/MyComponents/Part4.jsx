import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetpart4Mutation } from "../services/jsonApi";

function Part4(){
    let [data] = useGetpart4Mutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            graduation:'',
            intermediate:'',
            ssc:''
        },
        onSubmit:(values)=>{
            data(values).then((res)=>{
                console.log(res)
            })
            nav('/part5')
        }
    })
    return(
        <div className="p-5">
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-warning">PART - 4</h1><br />
                <label><b className="text-success">ACADEMIC PROFILE </b></label><br />
                <label><b>Graduation :</b></label><br />
                <textarea name="graduation" className="rounded" onChange={formik.handleChange} cols="50" rows="2" placeholder="Enter your degree or btech college name & passedOut Year......"></textarea>
                <label><b>Intermediate :</b></label><br />
                <textarea name="intermediate" className="rounded" cols="50" rows="2" onChange={formik.handleChange} placeholder="Enter your Intermediate college name & passedOut Year......"></textarea>
                <label><b>SSC :</b></label><br />
                <textarea name="ssc" className="rounded" cols="50" rows="2" onChange={formik.handleChange} placeholder="Enter your SSC School college name & passedOut Year......"></textarea>
                <div className="d-flex justify-content-between container">
                    <Link to='/part3'><button className="btn btn-warning">Previous</button></Link>
                    <button className="btn btn-success">Next</button>
                </div>
            </form>
    </div>
    )
}

export default Part4