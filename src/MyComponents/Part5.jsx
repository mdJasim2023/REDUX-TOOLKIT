import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetpart5Mutation } from "../services/jsonApi";

function Part5(){
    let [data] = useGetpart5Mutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            name:'',
            dob:'',
            gender:'',
            languages:''
        },
        onSubmit:(values)=>{
            data(values).then((res)=>{console.log(res)})
            nav('/final')
        }
    })
    return(
        <div className="p-2">
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-warning">PART - 5</h1><br />
                <label><b>&nbsp;PERSNOL PROFILE :</b></label><br />
                <input type="text" name="name" placeholder="Enter Your Full Name " onChange={formik.handleChange} className="form-control w-75" /><br />
                <input type="text" name="dob" placeholder="Enter Your DOB (Day-Month-Year)" onChange={formik.handleChange} className="form-control w-75" /><br />
                <label><b>&nbsp;Gender :</b></label><br />
                <input type="radio" name="gender" onChange={formik.handleChange} value='male'/> Male &nbsp;&nbsp;
                <input type="radio" name="gender" onChange={formik.handleChange} value='female'/> Female&nbsp;&nbsp;
                <input type="radio" name="gender" onChange={formik.handleChange} value='others'/> Others&nbsp;&nbsp;<br /><br />
                <label><b>&nbsp;Languages Known :</b></label>
                <input type="text" name="languages" onChange={formik.handleChange} placeholder="Enter Languages Known (eg:English,Hindi,Telugu)" className="form-control w-75"/>
                <div className="d-flex justify-content-between m-2">
                    <Link to='/part4'><button className="btn btn-warning">Previous</button></Link>
                    <button className="btn btn-success">next</button>
                </div>
            </form>
    </div>
    )
}

export default Part5