import axios from "axios";
import React from "react";
import { useEffect } from "react";

function P(){
    let [dat,setDat] = React.useState([])
    let [isFlag,setIsFlag] = React.useState(false)
    let [newitem,setNewitem] = React.useState({title:'',author:''})
    let [selectedPost,setSelectedPost] = React.useState(null)
    useEffect(()=>{
        axios.get('http://localhost:4000/posts').then((res)=>{
            setDat(res.data)
        })
    })
    function addBook(){
        axios.post('http://localhost:4000/posts',newitem).then((res)=>{console.log(res.data)})
    }
    
    function delPost(id){
        axios.delete('http://localhost:4000/posts/'+ id).then(()=>{alert('are you Delete...?')})
    }
    function updatepost(posts){
        console.log(posts);
        setSelectedPost({...posts})
        setIsFlag(true) 
    }
    function editpost(){
        axios.put('http://localhost:4000/posts/' + selectedPost.id , selectedPost).then((res)=>{alert('update post')})
        setIsFlag(false)
    }
    
    return(
        <div>
            {!isFlag && <div className="shadow rounded p-5  w-25" style={{margin:'100px auto'}}>
                <h1 className="text-center text-info">Add New Post</h1>
                <input type="text"  placeholder="Enter Title name " className="m-2 p-2 form-control" onChange={(e)=>{setNewitem({...newitem,title:e.target.value})}}/>
                <input type="text" placeholder="Enter Author name" className="m-2 p-2 form-control" onChange={(e)=>{setNewitem({...newitem,author:e.target.value})}}/>
                <button className="btn btn-success m-2 form-control" onClick={()=>{addBook()}}>AddPost</button>
            </div>}
            {isFlag && <div className="shadow rounded p-5  w-25" style={{margin:'100px auto'}}>
                <h1 className="text-center text-info">Edit Post</h1>
                <input type="text" placeholder="Edit Title name " className="m-2 p-2 form-control" value={selectedPost.title} onChange={(e)=>{setSelectedPost({...selectedPost,title:e.target.value})}}/>
                <input type="text" placeholder="Edit Author name" className="m-2 p-2 form-control" value={selectedPost.author} onChange={(e)=>{setSelectedPost({...selectedPost,author:e.target.value})}}/>
                <button className="btn btn-success m-2 form-control" onClick={()=>{editpost()}}>Update</button>
            </div>}
            <div className="d-flex flex-wrap justify-content-around">
            {
                dat.map((a)=>{
                    return (
                        <div className="border border w-25 p-5 m-3 shadow rounded">
                            <h6><b>Title :</b> {a.title}</h6>
                            <h6><b>Id :</b> {a.id}</h6>
                            <h6><b>Author :</b> {a.author}</h6>
                            <button className="btn btn-danger" onClick={()=>{delPost(a.id)}}>Delete</button>
                            <button className="btn btn-warning m-1" onClick={()=>{updatepost(a)}}>Edit</button>
                        </div>
                    )
                })
            }
            
            </div>
        </div>
    )
}

export default P