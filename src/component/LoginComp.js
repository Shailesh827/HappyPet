import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";


export default function LoginComp() {

    const init={
        username:"",
        password:""
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");
    const navigate=useNavigate();
    const reduxAction=useDispatch();


     var sendData=(e)=>{
        e.preventDefault();
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        }

        fetch('http://localhost:8080/checkLogin',reqOption)
            .then(resp=>resp.text())
            .then(text =>text.length ? JSON.parse(text) : {})
            .then(obj=>{
                    
                    if(Object.keys(obj).length===0)
                    {
                        setMsg("Wrong Username/password")
                    }
                    else
                    {
                        reduxAction(login());
                        localStorage.setItem("logginedUser",JSON.stringify(obj));
                        
                        if(obj.status===false)
                        {
                            alert("Request has not been approved");
                            navigate("/")
                        }
                        else
                        {
                            console.log(obj.usertypeid.usertypeid);
                            if(obj.usertypeid.usertypeid==5)
                            {
                                navigate("/admin_home");
                            }
                            else if(obj.usertypeid.usertypeid==2)
                            {
                                navigate("/seller_home");
                            }
                            else if(obj.usertypeid.usertypeid==1)
                            {
                                navigate("/buyer_home");
                            }
                            else if(obj.usertypeid.usertypeid==4)
                            {
                                navigate("/veterinary_home");
                            }
                            else if(obj.usertypeid.usertypeid==3)
                            {
                                navigate("/trainer_home");
                            }
                        }
                    }
            })
            .catch((error)=>alert("server error. try after some time"+error));
        
    }
    



    return (
        <div className="container">
        <div class="row">
       <div class="col-md-6 offset-md-3 ">
       <div class="card my-5 bg-info ">
       <div className="mb-3">
       <h2 class="text-center text-dark mt-5">Login Form</h2>      
            </div>
        <form className="px-4 py-3">
        
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Enter Username:</label>
                <input type="text" className="form-control" id="username" name="username" value={info.username}
                onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}} placeholder="Enter username"/>
                <div id="usernamehelp" className="form-text">valid username</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter password:</label>
                <input type="password" className="form-control" id="password" name="password"value={info.password}
                onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}} placeholder="Enter password"/>
                <div id="usernamehelp" className="form-text">....</div>
            </div>
            <button type="submit" className="btn btn-primary md-3" name="login" onClick={(e)=>{sendData(e)}} >submit</button>
            <button type="reset" className="btn btn-primary ms-4" name="login" onClick={()=>dispatch({type:'reset'})}>reset</button>
            
        </form>
    
        {/* <p>{JSON.stringify(info)}</p> */}
        <p>{msg}</p>
        </div>
        </div>
        </div>
        </div>)
        
        
}
