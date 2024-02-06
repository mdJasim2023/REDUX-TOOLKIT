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