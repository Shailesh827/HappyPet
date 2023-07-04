import { Link,Outlet,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";

export default function ViewVeterinaryComp()
{
    const[allVeterinary,SetallVeterinary]=useState([]);
   
   useEffect(()=>{
    fetch("http://localhost:8080/getVeterinaryList")
    .then(resp=>resp.json())
    .then(ops=>SetallVeterinary(ops))


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
                        <Link to="/view_veterinary" className='nav-link px-3'>vetrianry imformation</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/view_trainer" className='nav-link px-3'>Trainer imformation</Link>
                      </li>
                      
                     
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                    </ul>
                    </div>
                    </div>

            
          </nav>
        <h1 className="btn btn-primary">Veterinary Doctor</h1>
        <table className = "table table-striped">
                <thead>
                    <tr>
                    
                        <th> vetname:</th>
                        <th> regno:</th>
                        <th>hospitalname:</th>
                        <th>qualification:</th>
                        <th> phone</th>
                        <th>address</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        allVeterinary.map(
                                    veterniary=>
                                <tr key = {veterniary. vetid} >
                                    <td> {veterniary.vetname }</td>
                                    <td> {veterniary.regno }</td>
                                    <td> {veterniary.hospitalname}</td>
                                    <td> {veterniary.qualificationid.qualification}</td>
                                    <td>{veterniary.phone}</td>
                                    <td>{veterniary.address}</td>
                                   
                                      
                                   

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