import { Link,Outlet,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";

export default function ViewTrainerComp()
{
    const[allTrainer,SetallTrainer]=useState([]);
   
   useEffect(()=>{
    fetch("http://localhost:8080/getTrainerlist")
    .then(resp=>resp.json())
    .then(ops=>SetallTrainer(ops))


   },[]);

   
    return(<div>
        <nav className="navbar navbar-expand-sm  bg-light mb-3">
                  <div className='container-fluid' >
                    <div className="btn btn-sucess">
                    <ul className="navbar-nav">
                      <li className='nav-item'>
                        <Link to="/viewpet" className='nav-link px-3'>View List of pet</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/view_veterinary" className='nav-link px-3'>vetrianry information</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/view_trainer" className='nav-link px-3'>Trainer information</Link>
                      </li>
                     
                     
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                    </ul>
                    </div>
                    </div>

            
          </nav>
        <h1 className="btn btn-primary">Trainer List </h1>
        <table className = "table table-striped">
                <thead>
                    <tr>
                        
                        <th> firstname:</th>
                        <th> lastname:</th>
                        <th>1address:</th>
                        <th> Phone:</th>
                        <th>description</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        allTrainer.map(
                                    trainer=>
                                <tr key = {trainer.trainerid} >
                                    <td> {trainer.fname }</td>
                                    <td> {trainer.lname }</td>
                                    <td> {trainer.address}</td>
                                    <td> {trainer.phone}</td>
                                    <td>{trainer.description}</td>
                                   
                                      
                                   

                                </tr>

                        )
                    }

                </tbody>


            </table>
            
        <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
            </Routes>        
        </div>
    </div>)
}