import { Link,Outlet,Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
export default function AdminHome()
{
    return(<div>
           <nav className="navbar navbar-expand-sm  bg-light mb-3">
                  <div className='container-fluid'>
                    <ul className="navbar-nav">
                      <li className='nav-item'>
                        <Link to="approval" className='nav-link px-3'>Approval of Trainer</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="approvalvet" className='nav-link px-3'>Approval of Veterinary</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                    </ul>

            </div>
            
          </nav>
          <h2>Admin Home</h2>
        <Outlet/>

        <div>
            <Routes>
            <Route path="/login" element={<LoginComp/>}>
            </Route>
            </Routes>        
            </div>
    </div>)
}