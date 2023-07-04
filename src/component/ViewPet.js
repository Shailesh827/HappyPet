import { Link,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useState,useEffect } from "react";
import {useNavigate } from "react-router-dom";

export default function ViewPetComp()
{
    const[allpet,Setallpet]=useState([]);
   
   useEffect(()=>{
    fetch("http://localhost:8080/getAllPet")
    .then(resp=>resp.json())
    .then(ops=>Setallpet(ops))
    

   },[]);

   const navigate=useNavigate();
   function buynow(pet,sellerid)
   {
    localStorage.setItem("pet",JSON.stringify(pet));
    // localStorage.setItem("sellerid",sellerid)

    navigate("/order");
    
//     alert(sellerid)
//     fetch("http://localhost:8080/petOrder?petid="+petid+"&sellerid"+sellerid,{
//         mode: 'no-cors',
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then((result)=> result.json())
//     .then((resp)=>{console.log(resp)
//          Navigate("/order_pet")
//  })  
   }

//    const [disabled,setDisabled]=useState(false);
//    function disabledButton()
//    {
//         setDisabled(true);
//    }
  
   
   
   
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
        <h1 className="btn btn-sucess">View Pet list</h1>
        <table className="table table-striped table-hover ">
                <thead>
                    
                    <tr>
                        <th> Picture </th>
                         <th>Petname </th>
                         <th>Breed</th>
                         <th>Color:</th>
                         <th>Gender</th>
                         <th>Type</th>
                         <th>Age</th>
                         <th>Price</th>
                         <th>Sellerid</th>
                     </tr>

                 </thead>
                <tbody>
                    {
                        allpet.map(
                                    pet=>
                                <tr key = {pet.petid}>
                                    <td ><img src={`data:image/jpeg;base64,${ pet && pet.image}`} width="100" height="100" alt="my img"/></td>
                                    <td >{pet.petname}</td>
                                    <td >{pet.breed }</td>
                                    <td >{pet.color}</td>
                                    <td >{pet.gender}</td>
                                    <td >{pet.type}</td>
                                    <td >{pet.age}</td>
                                    <td >{pet.price}</td>
                                    {/* <td >{pet.sellerid.sellerid}</td> */}
                                    <td ><button type="button" className="btn btn-primary"  name="buy"  onClick={()=>{buynow(pet,pet.sellerid.sellerid);}} >Buy now</button></td>
                                    
                                   
                                      
                                   

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