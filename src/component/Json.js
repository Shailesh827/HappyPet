import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Json()
{
    const init={
        name:""
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
    }
    return(
        <div>
        <form className="card-body cardbody-color p-lg-5">
       
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="name" value={info.name}
                onChange={(e)=>{dispatch({type:'update',fld:'name',val:e.target.value})}}/>
                <div id="namehelp" className="form-text">valid name</div>
            </div>
            <button type="submit" className="btn btn-primary md-3" name="login" onClick={(e)=>{sendData(e)}} >submit</button>
            </form>
            
  <p> {JSON.stringify(info)}</p>
  </div>
    )
}