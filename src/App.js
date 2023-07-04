import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './component/LoginComp';
import AdminHome from './component/AdminHome';
import SellerComp from './component/SellerComp';
import BuyerComp from './component/BuyerComp';
import VeterinaryComp from './component/VeterinaryComp';
import TrainerComp from './component/TrainerComp';
import Logout from './component/Logout';
import { useSelector } from 'react-redux';
import SellerReg from './component/SellerRegistration';
import AddPetComp from './component/AddPetComp';
import BuyerReg from './component/BuyerReg';
import ViewPetComp from './component/ViewPet';
import ShelterComp from './component/ShelterComp';
import ViewTrainerComp from './component/ViewTrainer';
import ApprovalTrainer from './component/ApproveRequest';
import NewComp from './component/new';
import OrderComp from './component/OrderComp';
import VeterinaryApproval from './component/VeterinaryApproval';
import VeterinaryReg from './component/VeterinaryReg';
import TrainerReg from './component/TrainerReg';
import HomeComp from './component/Home';
import ViewVeterinaryComp from './component/ViewVeterinary';
import ViewPetSellComp from './component/ViewPetSell';
import Json from './component/Json';


function App() {
  const mystate=useSelector((state)=>state.logged);
  return (
    <div className="App">
      
      <div style={{display:mystate.loggedIn ? "none":"block"}}>
     
          <nav className="navbar navbar-expand-sm  bg-light mb-3 ">
                  <div className='container-fluid'>
                    <ul className="navbar-nav">
                      <li className='nav-item'>
                        <Link to="/" className='nav-link px-3'>Home</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="login" className='nav-link px-3'>Login</Link>
                      </li>
                        <li className='nav-item'>
                          <Link to="seller_register" className='nav-link px-3'>Seller register</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to="/buyer_register" className='nav-link px-3'>Buyer register</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to="veterinary_register" className='nav-link px-3'>Veterinary register</Link>
                        </li>
                        <li className='nav-item'>
                          <Link to="trainer_register" className='nav-link px-3'>Trainer register</Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/view_shelter" className='nav-link px-3'>Shelter information</Link>
                      </li>
                      
                        <li className='nav-item'>
                        <Link to="/json" className='nav-link px-3'>json</Link>
                      </li>
                      </ul>
                   

            </div>
          </nav>     
      </div>


     <Routes>
      <Route path='/login' element={<LoginComp/>}></Route>
      <Route path='/seller_register' element={<SellerReg/>}></Route>
      <Route path='/buyer_register' element={<BuyerReg/>}></Route>
      <Route path='/veterinary_register' element={<VeterinaryReg/>}></Route>
      <Route path='/trainer_register' element={<TrainerReg/>}></Route>
      <Route path='/admin_home' element={<AdminHome/>}>
        <Route path='approval' element={<ApprovalTrainer/>  }></Route>
        <Route path='approvalvet' element={<VeterinaryApproval/> }></Route>
      </Route>
      <Route path='/seller_home' element={<SellerComp/>}></Route>
      <Route path='/buyer_home' element={<BuyerComp/>}></Route>
       <Route path='/veterinary_home' element={<VeterinaryComp/>}></Route>
      <Route path='/trainer_home' element={<TrainerComp/>}></Route> 
      <Route path='/addpet' element={<AddPetComp/>}/>
      <Route path='/viewpet' element={<ViewPetComp/>}/>
      <Route path='/order' element={<OrderComp/>}/>
      <Route path='/view_Reg' element={<VeterinaryReg/>}/>
      <Route path='/view_veterinary' element={<ViewVeterinaryComp/>}/>
      <Route path='/view_trainer' element={<ViewTrainerComp/>}/>
      <Route path='/view_shelter' element={<ShelterComp/>  }/>
      <Route path='/viewpetsell' element={<ViewPetSellComp/>}/>
      <Route path='/' element={<HomeComp/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route> 
           
     </Routes>
    </div>
  );
}

export default App;
