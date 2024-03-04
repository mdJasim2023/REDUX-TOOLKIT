import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <div className="p-3 titlehead">
                <h1><span id="d1">R</span><span id="d2">E</span><span id="d3">S</span><span id="d4">U</span><span id="d5">M</span><span id="d6">E</span> <span id="d6">C</span><span id="d5">R</span><span id="d4">E</span><span id="d3">A</span><span id="d2">T</span><span id="d1">O</span><span id="d2">R</span></h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
               <Link to='/part1'> <button className="btn btn-warning homebtn p-5 w-100">+ Create Resume</button></Link>
            </div>
        </div>
    )
}

export default Home