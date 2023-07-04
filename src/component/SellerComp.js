import { useEffect } from "react";
import { Link,Outlet,Route,Routes } from "react-router-dom";
import AddPetComp from "./AddPetComp";
import LoginComp from "./LoginComp";


export default function SellerComp()
{


    const username=JSON.parse(localStorage.getItem("logginedUser")).username;
    const login_id=JSON.parse(localStorage.getItem("logginedUser")).loginid;
    useEffect(()=>{
        
        console.log("loginid ="+login_id);
        fetch("http://localhost:8080/getSeller?loginid="+login_id)
        .then(resp=>{
             
            if(resp.ok)
                return resp.json();
            else
                throw new Error("server Error");
            
    })
    .then(obj=>{
        console.log(obj);
        console.log("Sellerid ="+obj.sellerid);
        localStorage.setItem("loggedSeller",JSON.stringify(obj));
        
        
     })
     
})
    return(<div >
        <nav className="navbar navbar-expand-sm  bg-light mb-3 " >
                  <div className='container-fluid' >
                    <ul className="navbar-nav">
                      <li className='nav-item'>
                        <Link to="/addpet" className='nav-link px-3'>Add Pet</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/viewpetsell" className='nav-link px-3'>view Pet</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/view_veterinary" className='nav-link px-3'>vetrianry information</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/view_trainer" className='nav-link px-3'>Trainer imformation</Link>
                      </li>
                      
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                       
                    </ul>
                    </div>
                  

                    <h4>Welcome {username}</h4>
          </nav>
       
      

        <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}/> 
            {/* <Route path="/addpet" element={<AddPetComp/>}/> */}
            {/* <Route Path="/viewpet" element={<ViewPetComp/>}/> */}
            </Routes>        
        </div>
    </div>)
}