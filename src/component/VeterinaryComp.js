import { Link,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";


export default function VeterinaryComp()
{
    const[allVeterinary,setAllVeterinary]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:8080/getVeterinaryList")
        .then(resp=>resp.json())
        .then(ops=>
            {setAllVeterinary(ops);
                
            }
        )

    },[]);

  

    return(<div>
          <h1 >Veterinary List </h1>
        <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Veterinary name:</th>
                        <th>RegNo:</th>
                        <th>Hospitalname:</th>
                        <th>Qualification:</th>
                        <th>phone</th>
                        <th>Address</th>
                    
                    </tr>

                </thead>
                <tbody>
                    {
                        allVeterinary.map(
                            veterinary=>
                                    <tr key = {veterinary.vetid} >
                                    <td>{veterinary.vetname}</td>
                                    <td>{veterinary.regno}</td>
                                    <td>{veterinary.hospitalname}</td>
                                    <td>{veterinary.qualificationid.qualificationid}</td>
                                    <td>{veterinary.phone}</td>
                                    <td>{veterinary.address}</td>
                                   
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