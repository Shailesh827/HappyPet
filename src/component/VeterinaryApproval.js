import { Link,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VeterinaryApproval()
{

    const[allVeterinary,setAllVeterinary]=useState([]);
    const[id,setId]=useState(0);
    const[status,setStatus]=useState(0);
    const navigate=useNavigate();
    
    

    useEffect(()=>{
        fetch("http://localhost:8080/getVeterinaryWithStatus0") 
        .then(resp=>resp.json())
        .then(ops=>setAllVeterinary(ops))
    
    
       },[]);
 

       function sendData1(loginid)                   
       {
           alert(loginid)
           fetch("http://localhost:8080/approve?loginid="+loginid,{
               mode: 'no-cors',
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then((result)=> result.json())
           .then((resp)=>{console.log(resp)
              
        })      
       }

       function sendData2(loginid)                   
       {
           alert(loginid)
           fetch("http://localhost:8080/reject?loginid="+loginid,{
               mode: 'no-cors',
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then((result)=> result.json())
           .then((resp)=>{console.log(resp)
                navigate(-1);
        })      
       }

       return( 
        <div>
          
          <h3>Veterinary List </h3>
          <table className = "table table-striped">
          <thead>
                    <tr>
                      
                       <th>Veterinary name:</th>
                        <th>RegNo:</th>
                        <th>Hospitalname:</th>
                        <th>Qualification:</th>
                        <th>phone</th>
                        <th>Address</th>
                        <th>Loginid</th>
                        <th>Approve</th>

                       
                    </tr>
         </thead>
         <tbody>
            {
                allVeterinary.map(
                    
                    veterniary=>
                     <tr key = {veterniary.vetid} >
                        <td>{veterniary.vetname}</td>
                        <td>{veterniary.regno}</td>
                        <td>{veterniary.hospitalname}</td>
                        <td>{veterniary.qualification}</td>
                        <td>{veterniary. phone}</td>
                        <td>{veterniary. address}</td>
                        <td>{veterniary.loginid.loginid}</td>
                        <td><button type="button" className="btn btn-primary"  name="Arove" onClick={()=>{setId(veterniary.loginid.loginid);setStatus(1);sendData1(veterniary.loginid.loginid)}} >Approve</button></td>
                        <td><button type="button" className="btn btn-primary"  name="reject" onClick={()=>{setId(veterniary.loginid.loginid);setStatus(2);sendData2(veterniary.loginid.loginid)}} >Remove</button></td>
                     </tr>
                )
            }
         </tbody>
         {/* <p>vetid {id}</p>
         <p>status {status}</p> */}
         </table>



         <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
            </Routes>        
        </div>
        </div>
          
       )
}