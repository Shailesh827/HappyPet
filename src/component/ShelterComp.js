
import { useReducer, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "./slice";
import Admin from "./AdminHome";
import { Link, Route ,Routes} from 'react-router-dom';
export default function ShelterComp()
{
   const navigate=useNavigate();
   const reduxAction = useDispatch();
    
   const[allshelter,SetAllshelter]=useState([]);
   
   useEffect(()=>{
    fetch("http://localhost:8080/getShelter")
    .then(resp=>resp.json())
    .then(ops=>SetAllshelter(ops))


   },[]);

 return(
    <div>
       
       <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Shelter Id:</th>
                        <th> Shelter name:</th>
                        <th> Address:</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        allshelter.map(
                                    shelter=>
                                <tr key = {shelter.shelterid}>
                                    <td> {shelter.sheltername }</td>
                                    <td> {shelter.address}</td>
                                    <td> {shelter.phone}</td>    
                                   

                                </tr>

                        )
                    }

                </tbody>


            </table>
   


    </div>

   )
  
}