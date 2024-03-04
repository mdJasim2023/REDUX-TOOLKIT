import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetpart2Mutation } from "../services/jsonApi";

function Part2(){
    let [data] = useGetpart2Mutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            obj:'',
            ps:'',
            intern:'',
        },
        onSubmit:(values)=>{
            data(values).then((res)=>{
                console.log(res);
            })
            nav('/part3')
        }
    })
    return(
        <div>
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
            <h1 className="text-center text-warning">PART - 2</h1><br />
            <div>
            <label>&nbsp;<b>OBJECTIVE :</b></label>
                <textarea name="obj" cols="60" className="rounded" rows="3" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="*Enter Your Objective....."></textarea>
                <label>&nbsp;<b>PROFILE SUMMARY :</b></label>
                <textarea name="ps" cols="60" className="rounded" rows="3" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="*Enter Your Profile Summary....."></textarea>
                <label>&nbsp;<b>INTERNSHIPS :</b></label>
                <textarea name="intern" cols="60" className="rounded" rows="3" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="*Enter Your Intership whatever Done...."></textarea>
                <div className="d-flex justify-content-between">
                    <Link to='/part1'><button className="btn btn-warning">Previous</button></Link>
                    <button className="btn btn-success">Next</button>
                </div>
            </div>
        </form>
</div>
    )
}

export default Part2