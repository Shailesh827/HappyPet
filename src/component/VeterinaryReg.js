import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function VeterinaryReg()
{
    const init={
         
         vetname:"",
         regno:"",
         hospitalname:"",
         qualificationid:"",
         phone:"",
        address:""
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
    const navigate=useNavigate();
    var sendData=(e)=>{
        e.preventDefault();
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        }
        fetch('http://localhost:8080/regVerterinary',reqOption)
        .then(resp=>{console.log(resp.ok);
            if(resp.ok)
                        return resp.json();
                    else
                        throw new Error("server Error");
                    }
             )
             .then(obj=>{
                if(obj)
                {
                    navigate("/login");
                }
                else
                {
                    navigate("/veterinary_register");
                }
             })
        
    }
    const [allQualification,setAllQulification]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/getAllQualification")
        .then((resp)=>resp.json())
        .then((q)=>setAllQulification(q));


    },[])



    return(
        <div className="container">
       <div class="row">
       <div class="col-md-6 offset-md-3 ">
       
       <div class="card my-5 bg-info ">
       <div className="mb-3">
       <h2 class="text-center text-dark mt-5">Veterinary Registraion</h2>      
            </div>
        <form className="card-body cardbody-color p-lg-5">
       
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Enter Username:</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Username" value={info.username}
                onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}/>
                <div id="usernamehelp" className="form-text">valid username</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter password:</label>
                <input type="text" className="form-control" id="password" name="password" placeholder="Password" value={info.password}
                onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}} />
                <div id="passwordhelp" className="form-text">....</div>
            </div>

            

            <div className="mb-3">
                <label htmlFor="vetname" className="form-label">Enter name:</label>
                <input type="text" className="form-control" id="vetname" name="vetname"  placeholder="Name" value={info.vetname}
                onChange={(e)=>{dispatch({type:'update',fld:'vetname',val:e.target.value})}} />
                <div id="vetnamehelp" className="form-text">....</div>
            </div>

            <div className="mb-3">
                <label htmlFor="regno" className="form-label">Enter Registration:</label>
                <input type="text" className="form-control" id="regno" name="regno"  min='4' max='4' placeholder=" Registration" value={info.regno}
                onChange={(e)=>{dispatch({type:'update',fld:'regno',val:e.target.value})}}/>
                <div id="regnohelp" className="form-text">...</div>
            </div>

            <div className="mb-3">
                <label htmlFor="hospitalname" className="form-label">Enter hospital name:</label>
                <input type="text" className="form-control" id="hospitalname" name="hospitalname" placeholder="hospitalname"  value={info.hospitalname}
                onChange={(e)=>{dispatch({type:'update',fld:'hospitalname',val:e.target.value})}}/>
                <div id="hospitalnamehelp" className="form-text">...</div>
            </div>

            <div className="mb-3">
                {/* <label htmlFor="qualification" className="form-label">Enter qualification:</label>
                <input type="text" className="form-control" id="qualification" name="qualification" placeholder="qualification" value={info.qualification}
                onChange={(e)=>{dispatch({type:'update',fld:'qualification',val:e.target.value})}}/>
                <div id="qualificationhelp" className="form-text">...</div> */}
                <label htmlFor="qualification" className="form-label">Enter qualification:</label>
                <select className="form-control" id="qualification" name="qualification"  onChange={(e)=>{dispatch({type:'update' , fld:'qualification', val:e.target.value})}}>
                    {
                    allQualification.map(q => {
                        return <option value={q.qualificationid}> {q.qualification}</option>
                    })
                    }
                </select>


            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Enter phoneno:</label>
                <input type="text" className="form-control" id="phone" name="phone"  min='10' max='10' placeholder="Phone No" value={info.phone}
                onChange={(e)=>{dispatch({type:'update',fld:'phone',val:e.target.value})}} />
                <div id="phonehelp" className="form-text">....</div>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Enter address:</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Address" value={info.address}
                onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}} />
                <div id="addresshelp" className="form-text">....</div>
            </div>

            

            

            
            
            <button type="submit" className="btn btn-primary md-3" name="login" onClick={(e)=>{sendData(e)}} >submit</button>
            <button type="reset" className="btn btn-primary ms-4" name="login" onClick={()=>dispatch({type:'reset'})}>reset</button>
            
        </form>
        <p>{JSON.stringify(info)}</p>
        {/* <p>{msg}</p> */}
        
        
        
        </div>
        </div>
        </div>
       </div>
    )
    
    }