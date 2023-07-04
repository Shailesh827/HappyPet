import { Link,Outlet,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useEffect } from "react";
import ViewTrainerComp from "./ViewTrainer";

export default function BuyerComp()
{

  const username=JSON.parse(localStorage.getItem("logginedUser")).username;
    useEffect(()=>{
      const login_id=JSON.parse(localStorage.getItem("logginedUser")).loginid;
      fetch("http://localhost:8080/getBuyer?loginid="+login_id)
      .then(resp=>{
          console.log("loginid ="+login_id);
         
          if(resp.ok)
              return resp.json();
          else
              throw new Error("server Error");
          
  })
  .then(obj=>{
      console.log("Sellerid ="+obj.buyerid);
      localStorage.setItem("loggedbuyer",JSON.stringify(obj));
      
   })
   
})
    return(<div >
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

                    <h4>Welcome {username}</h4>
          </nav>
          {/* <h1 className="btn btn-primary">Welcome </h1> */}
          
        <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
           
            </Routes>        
        </div>
    </div>)
}