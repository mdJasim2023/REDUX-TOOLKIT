import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFinalMutation } from "../services/jsonApi";

function Final(){
    let [data] = useFinalMutation()
    let nav = useNavigate()
    let formik = useFormik({
        initialValues:{
            declaration:'',
            city:'',
            sign:''
        },
        onSubmit:(values)=>{
            data(values).then((res)=>{
                console.log(res);
            })
            nav('/main')
        }
    })
    return(
        <div className="p-2">
            <form className="p-5 rounded HeaderFrom" onSubmit={formik.handleSubmit}>
                <h1 className="text-center text-warning">FINAL</h1><br />
                 <label><b>Declaration :</b></label><br />
                <textarea name="declaration" id="" cols="52" onChange={formik.handleChange} rows="3" className="rounded"></textarea>
                <div className="d-flex">
                    <div>
                        <label><b>&nbsp;Place :</b></label>
                        <input type="text" name="city" onChange={formik.handleChange} placeholder="Enter Your City" className="form-control"/>
                    </div>
                    <div>
                        <label><b>&nbsp;Signature :</b></label>
                        <input type="text" name="sign"  onChange={formik.handleChange} placeholder="Siguature" className="form-control"/>
                    </div>
                </div><br />
                <button className="btn btn-warning form-control">Save & Show</button>
            </form>
        </div>
    )
}

export default Final