import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function ProductPage(){

    const[product,setProduct]=useState([])
    useEffect(()=>
    {
fetch("https://fakestoreapi.com/products")
.then(data=>data.json())
.then(putProduct=>setProduct(putProduct))

    })
    return(
    <>
            <h2>Product Page</h2>
            <div className="row">
                        {
                            product.map((value,index)=>(
                              <>
                              <div className="card col-lg-4">
                                        <img src={value.image}className="card-img-top"/>
                                        <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.price}</p>
                                        <Link to={`/Details/${value.id}`}><button className="btn btn-primary">View</button></Link> 

                               </div>
                              </div>
                              </>

                                
                            )
                            
                            )
                        }
            </div>
    </>
    
);
}