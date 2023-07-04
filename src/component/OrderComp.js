import { useEffect, useState } from "react";
import {Route,Routes,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginComp from "./LoginComp";
import ViewPetComp from "./ViewPet";


export default function OderComp(){

    const image=JSON.parse(localStorage.getItem("pet")).image;
    const petname=JSON.parse(localStorage.getItem("pet")).petname;
    const price=JSON.parse(localStorage.getItem("pet")).price;
    const breed=JSON.parse(localStorage.getItem("pet")).breed;
    const sellerid=JSON.parse(localStorage.getItem("pet")).sellerid.sellerid;
    const buyerid=JSON.parse(localStorage.getItem("loggedbuyer")).buyerid;
    
    const [seller,setSeller]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getSellerWithId?sellerid="+sellerid)
        .then(resp=>{
            console.log("sellerid="+sellerid);
           
            if(resp.ok)
                return resp.json();
            else
                throw new Error("server Error");
        })
        .then(obj=>{
            localStorage.setItem("Seller",JSON.stringify(obj));
            setSeller(obj);
         })

    },[])

    const init={
        orderdate:new Date(),
        petid:JSON.parse(localStorage.getItem("pet")).petid,
        sellerid:sellerid,
        paymenttype:"Only cash on delivery",
        amount:price,
        transactionid:sellerid+1000,
        buyerid:buyerid
    }
    const[info,SetInfo]=useState(init);
    const navigate=useNavigate();
    var sendData=()=>{
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        }

        fetch('http://localhost:8080/orderPet',reqOption)
            .then(resp=>{
                if(resp.ok)
                {
                return resp.json();
                }
                else
                {
                throw new Error("server Error");
                }
            })
            .then(obj=>{
                
                console.log(JSON.stringify(obj));
                if(obj)
                {
                    alert("Your ordered confirmed");
                    navigate(-1);
                }
                else
                {
                    navigate(-1);
                    alert("Order failed..please try after some time")
                }
               
            })

        

    }

    
    return (
        <div >
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
                        <Link to="/view_shelter" className='nav-link px-3'>Shelter information</Link>
                      </li>
                     
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                    </ul>
                    </div>
                    </div>

                   
          </nav>

        <div className="container " >
        <div className="row">
        <div className="col-md-6 offset-md-3 ">
        <h2 className="text-center text-dark mt-5"></h2>
        <div className="card my-5 bg-info">
        <form className="card-body cardbody-color p-lg-5">
        <div className="mb-3">
                 <h4> Your Order Confirmed </h4>        
            </div>
        <div className="text-center">
              <img src={`data:image/jpeg;base64,${image}`} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
            <div className="mb-3">
                Petname : {petname}              
            </div>
            <div className="mb-3">
                Breed   : {breed}            
            </div>
            <div className="mb-3">
                Amount   : {price}    
            </div>
            
          

         <button type="submit" className="btn btn-primary md-3" name="login" onClick={()=>{sendData()}} >confirm</button>
              
             
        </form>
        
       </div>
        </div>
        </div>
        </div>
        <Routes>
        <Route path="/login" element={<LoginComp/>
        }/> 
        
        </Routes>
        </div>
    )
}