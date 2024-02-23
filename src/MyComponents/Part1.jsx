import { useFormik } from "formik";
import React from "react";
import { useGetHeaderMutation } from "../services/jsonApi";
import { Link, useNavigate } from "react-router-dom";

function Part1(){
    let [data] = useGetHeaderMutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            fn:'',
            ln:'',
            role:'',
            exp:'',
            mail:'',
            phone:'',
            address:'',
            date:new Date().getDay()
        },

        onSubmit:(values)=>{
            data(values).then((res)=>{
                console.log(res);
            })
        }

    })
    let show = false;
    return(
        <div className="p-5">
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-warning">PART - 1</h1><br />
                <div className="d-flex">
                    <input type="text" className="form-control w-50" name='fn' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter First Name"/>
                    &nbsp;&nbsp;
                    <input type="text" className="form-control w-50" name="ln" placeholder="Enter Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div><br />
                <div className="d-flex">
                    <input type="text" className="form-control w-50" name="role" placeholder="Enter your Role" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    &nbsp;&nbsp;
                    <input type="text" className="form-control w-50" name="exp" placeholder="Enter Experience" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
                </div><br />
                <div className="d-flex">
                    <input type="email" className="form-control w-50" name="mail" placeholder="Enter E-mail " onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    &nbsp;&nbsp;
                    <input type="number" className="form-control w-50" name="phone" placeholder="Enter Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div><br />
                <div className="d-flex">
                    <input type="text" className="form-control w-50" name="address" placeholder="Enter Address " onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    &nbsp;&nbsp;
                    <input type="date" className="form-control w-50" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div><br />
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning"> Back</button>
                   <Link to='/part2'><button className="btn btn-success" type="submit">Next </button></Link>
                </div>
            </form>
        </div>
    )
}

export default Part1