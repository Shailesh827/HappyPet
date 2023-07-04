import { Link,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ApprovalTrainer()
{
    
    const[allTrainer,SetallTrainer]=useState([]);
   const[id,setId]=useState(0);
   const[status,setStatus]=useState(0);
   useEffect(()=>{
    fetch("http://localhost:8080/getTrainerWithStatus0") //whose status is zero
    .then(resp=>resp.json())
    .then(ops=>SetallTrainer(ops))


   },[]);
   
   const navigate=useNavigate();
       function sendData1(loginid)                   
       {
        
           
           fetch("http://localhost:8080/approve?loginid="+loginid,{
               mode: 'no-cors',
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then((result)=> result.json())
           .then((resp)=>{console.log(resp)
                alert("refresh page");
                navigate(-1);
        })  
        // alert("please refresh page");    
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
            alert("refresh page");
                navigate(-1);

        })      
       }
 
    


   

 
    return(<div>
        <h1></h1>
        <table className = "table table-striped">
                <thead>
                    <tr>
                        
                        <th>Firstname:</th>
                        <th>Lastname:</th>
                        <th>RegNo:</th>
                        <th>Address:</th>
                        <th>Phone:</th>
                        <th>Description</th>
                        <th>loginid</th>
                        <th>Approve</th>
                        <th>Reject</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        allTrainer.map(
                                    trainer=>
                                <tr key = {trainer.trainerid} >
                                    <td> {trainer.fname }</td>
                                    <td> {trainer.lname }</td>
                                    <td> {trainer.regno}</td>
                                    <td> {trainer.address}</td>
                                    <td> {trainer.phone}</td>
                                    <td>{trainer.description}</td>
                                    <td>{trainer.loginid.loginid}</td>
                                    <td><button type="button" className="btn btn-primary"  name="Approve" onClick={()=>{setId(trainer.loginid.loginid);setStatus(1);sendData1(trainer.loginid.loginid)}} >Approve</button></td>
                                    <td><button type="button" className="btn btn-primary"  name="reject" onClick={()=>{setId(trainer.loginid.loginid);setStatus(2);sendData2(trainer.loginid.loginid)}} >Remove</button></td>
                                    
                                   

                                </tr>

                        )
                    }

                </tbody>
                    {/* <p>trainerid {id}</p>
                    <p>status {status}</p> */}

            </table>
        <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
            </Routes>        
        </div>
    </div>)
}