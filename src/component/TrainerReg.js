import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
export default function TrainerReg()
{
    const init={
        username:"",
        password:"",
        fname:"",
        lname:"",
        regno:"",
        address:"",
        phone:"",
        description:""
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
        fetch('http://localhost:8080/regTrainer',reqOption)
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
                    navigate("/trainer_register");
                }
             })
        
    }



    return(
        <div className="container">
       <div class="row">
       <div class="col-md-6 offset-md-3 ">
       
       <div class="card my-5 bg-info ">
       <div className="mb-3">
       <h2 class="text-center text-dark mt-5">Trainer Registraion</h2>      
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
                <div id="usernamehelp" className="form-text">....</div>
            </div>

            

            <div className="mb-3">
                <label htmlFor="fname" className="form-label">Enter firstname:</label>
                <input type="text" className="form-control" id="fname" name="fname"  placeholder=" First Name" value={info.fname}
                onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}} />
                <div id="usernamehelp" className="form-text">....</div>
            </div>

            <div className="mb-3">
                <label htmlFor="lname" className="form-label">Enter lastname:</label>
                <input type="text" className="form-control" id="lname" name="lname"  placeholder=" Last Name" value={info.lname}
                onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}}/>
                <div id="usernamehelp" className="form-text">...</div>
            </div>

            <div className="mb-3">
                <label htmlFor="regno" className="form-label">Enter Registraion no.:</label>
                <input type="text" className="form-control" id="regno" name="regno" placeholder="Registor No"  value={info.regno}
                onChange={(e)=>{dispatch({type:'update',fld:'regno',val:e.target.value})}}/>
                <div id="regnohelp" className="form-text">valid regno</div>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Enter address:</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Address" value={info.address}
                onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}} />
                <div id="addresshelp" className="form-text">....</div>
            </div>

            

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Enter phoneno:</label>
                <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone No" value={info.phone}
                onChange={(e)=>{dispatch({type:'update',fld:'phone',val:e.target.value})}} />
                <div id="phonehelp" className="form-text">....</div>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Enter description:</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Description" value={info.description}
                onChange={(e)=>{dispatch({type:'update',fld:'description',val:e.target.value})}}/>
                <div id="descriptionhelp" className="form-text">...</div>
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