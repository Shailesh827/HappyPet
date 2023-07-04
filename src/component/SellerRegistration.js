import { useReducer } from "react";
import { Navigate, Route,Routes } from "react-router-dom";
import LoginComp from "./LoginComp";
import { useNavigate } from "react-router-dom";
export default function SellerReg()
{
    const nav = useNavigate();
    const init={
        
        firstname:{ value: "", error: "", valid: false, touched: false },
        lastname:{ value: "", error: "", valid: false, touched: false },
        email:{ value: "", error: "", valid: false, touched: false },
        address:{ value: "", error: "", valid: false, touched: false },
        phoneno:{ value: "", error: "", valid: false, touched: false },
        adharno:{ value: "", error: "", valid: false, touched: false },
        username:{ value: "", error: "", valid: false, touched: false },
        password:{ value: "", error: "", valid: false, touched: false },
        
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return { ...state, [action.fld]: { ...state[action.fld], value: action.value, error: action.error, valid: action.valid, touched: action.touched } }
                case 'reset':
                return init;
        }
    }

    const validate = (nm, val) => {
        console.log(nm + " : " + val)
        let error = "";
        let valid = false;
        let touched = true;
        switch (nm) {
          case 'firstname':
            const exp1 = /^[A-Z][a-z]{2,12}/
            if (!exp1.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'lastname':
            const exp2 = /^[A-Z][a-z]{2,12}/
            if (!exp2.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'email':
            const exp3 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (!exp3.test(val)) {
              error = "Invalid pattern";
            }
            else {
              error = "";
              valid = true;
            }
            break;

            case 'address':
                const exp4 = /[A-Za-z]/
                if (!exp4.test(val)) {
                  error = "Invalid address";
                }
                else {
                  error = "";
                  valid = true;
                }
                break;
        


          case 'phoneno':
            const exp5 = /^[0-9]{10}$/
            if (!exp5.test(val)) {
              error = "Invalid Length";
            }
            else {
              error = "";
              valid = true;
            }
            break;

            case 'adharno':
            const exp6 = /^[0-9]{12}$/
            if (!exp6.test(val)) {
              error = "Invalid Length";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'username':
            const exp7 = /[A-Za-z0-9]{5,12}/
            if (!exp7.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter and 1 Number  Required ";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          case 'password':
            const exp8 = /[A-Za-z]{2,12}/
            if (!exp8.test(val)) {
              error = "Atleast 1 Capital Letter, 1 Small Letter, 1 Number and 1 Specail Character Required ";
            }
            else {
              error = "";
              valid = true;
            }
            break;
    
          
    
          
        }
        console.log(val + "," + error + "," + valid)
        dispatch({ type: 'update', fld: nm, value: val, error, valid, touched })
      }
    
      const [info, dispatch] = useReducer(reducer, init)
    
      const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            firstname: info.firstname.value,
            lastname: info.lastname.value,
            email: info.email.value,
            address:info.address.value,
            phoneno: info.phoneno.value,
            adharno:info.adharno.value,
            username: info.username.value,
            password: info.password.value,
            
          })
        }
        fetch("http://localhost:8080/regSeller", reqOptions)
          .then((resp => {
            if(resp.ok){
              alert('You are Succesfully Registered..!!')
              nav("/")
              return resp.json()
             
            }
            else
            {
              alert('Server Error!!...OR...Use Different Username!!')
              window.location.reload(false)
            }
    
          }))
          
      } 



    return(
        <div class="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div class="card-body bg-info">

        <form>
          <h3>Seller Registraion</h3>

          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="First_Name"
              name="First_Name"
              value={info.firstname.value}
              onChange={(e) => { validate("firstname", e.target.value) }}
            />
            <div
              id="firstnameHelp"
              className="form-text"
              style={{ display: (!info.firstname.valid && info.firstname.touched) ? "block" : "none" }}>
              {info.firstname.error}
            </div>

          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              id="Last_Name"
              name="Last_Name"
              value={info.lastname.value}
              onChange={(e) => { validate("lastname", e.target.value) }} />
            <div
              id="lastnameHelp"
              className="form-text"
              style={{ display: (!info.lastname.valid && info.lastname.touched) ? "block" : "none" }}>
              {info.lastname.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="Email"
              name="Email"
              value={info.email.value}
              onChange={(e) => { validate("email", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.email.valid && info.email.touched) ? "block" : "none" }}>
              {info.email.error}
            </div>
          </div>

          <div className="mb-3">
            <label>address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              id="address"
              name="address"
              value={info.address.value}
              onChange={(e) => { validate("address", e.target.value) }} />
            <div
              id="addressHelp"
              className="form-text"
              style={{ display: (!info.address.valid && info.address.touched) ? "block" : "none" }}>
              {info.address.error}
            </div>
          </div>

          <div className="mb-3">
            <label>phoneno</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter phoneno"
              id="phoneno"
              name="phoneno"
              value={info.phoneno.value}
              onChange={(e) => { validate("phoneno", e.target.value) }} />
            <div
              id="phonenoHelp"
              className="form-text"
              style={{ display: (!info.phoneno.valid && info.phoneno.touched) ? "block" : "none" }}>
              {info.phoneno.error}
            </div>
          </div>

          <div className="mb-3">
            <label>adharno</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter adharno"
              id="adharno"
              name="adharno"
              value={info.adharno.value}
              onChange={(e) => { validate("adharno", e.target.value) }} />
            <div
              id="adharnoHelp"
              className="form-text"
              style={{ display: (!info.adharno.valid && info.adharno.touched) ? "block" : "none" }}>
              {info.adharno.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="Username"
              name="Username"
              value={info.username.value}
              onChange={(e) => { validate("username", e.target.value) }} />
            <div
              id="usernameHelp"
              className="form-text"
              style={{ display: (!info.username.valid && info.username.touched) ? "block" : "none" }}>
              {info.username.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="Password"
              name="Password"
              value={info.password.value}
              onChange={(e) => { validate("password", e.target.value) }}
            />
            <div
              id="passwordHelp"
              className="form-text"
              style={{ display: (!info.password.valid && info.password.touched) ? "block" : "none" }}>
              {info.password.error}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.firstname.valid && info.lastname.valid && info.password.valid && info.email.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
    
}