import { Link,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";

export default function TrainerComp()
{
    const[Trainer,SetTrainer]=useState();
    const login_id=JSON.parse(localStorage.getItem("logginedUser")).loginid;
    
   useEffect(()=>{
   
    fetch("http://localhost:8080/getTrainer?loginid="+login_id)
    .then(resp=>resp.json())
    .then(obj=>{SetTrainer();
    console.log(obj);
    })

   },[]);

   
    return(<div>
            <div className="container " >
            <div className="row">
            <div className="col-md-6 offset-md-3 ">
            <h2 className="text-center text-dark mt-5"></h2>
            <div className="card my-5 bg-info">
            <form className="card-body cardbody-color p-lg-5">
            <div className="mb-3">
                    <h4>Profile  </h4>        
                </div>
            
        
                <div className="mb-3">
                 Name {JSON.stringify(Trainer).fname }         
                </div>
                <div className="mb-3">
                 Address : {Trainer.address}      
                </div>
                <div className="mb-3">
                 Phone : {Trainer.phone}   
                </div>
                <div className="mb-3">
                 Description : {Trainer.description}   
                </div>
            
            </form>
                <Routes>
                <Route path="/login" element={<LoginComp/>}>
                </Route>
                </Routes>        
            </div>
            </div>
            </div>
            </div>
    </div>)
}

{/* <tr key = {trainer.trainerid} >
                                    <td> {trainer.fname }</td>
                                    <td> {trainer.lname }</td>
                                    <td> {trainer.address}</td>
                                    <td> {trainer.phone}</td>
                                    <td>{trainer.description}</td> */}