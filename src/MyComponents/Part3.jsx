import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetpart3Mutation } from "../services/jsonApi";


function Part3(){
    let [data] = useGetpart3Mutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            skills:'',
            projects:''
        },

        onSubmit:(values)=>{
            data(values).then((res)=>{
                console.log(res);
            })
            nav('/part4')
        }
    })
    return(
        <div className="p-5">
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-warning">PART - 3</h1><br />
                <label><b>SKILLS :</b></label>
                <input type="text" name="skills" onChange={formik.handleChange} className="form-control" placeholder="*Enter Your Skills"/>
                <label><b>PROJECTS :</b></label>
                <textarea name="projects" onChange={formik.handleChange} cols="52" rows="6" placeholder="Enter Your Projects" className="rounded"></textarea>
                <div className="d-flex justify-content-between"> 
                    <Link to='/part2'><button className="btn btn-warning">Previous</button></Link>
                    <button className="btn btn-success">Next</button>
                </div>
            </form>
        </div>
    )
}

export default Part3