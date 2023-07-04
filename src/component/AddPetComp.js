import {Link, Navigate, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import SellerComp from "./SellerComp";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AddPetComp()

{

    
//     const login_id=JSON.parse(localStorage.getItem("logginedUser")).loginid;
//     useEffect(()=>{
//         alert("in pet");
//         console.log("loginid ="+login_id);
//         fetch("http://localhost:8080/getSeller?loginid="+login_id)
//         .then(resp=>{
             
//             if(resp.ok)
//                 return resp.json();
//             else
//                 throw new Error("server Error");
            
//     })
//     .then(obj=>{
//         console.log(obj);
//         console.log("Sellerid ="+obj.sellerid);
//         localStorage.setItem("loggedSeller",JSON.stringify(obj));
//         setSellerid(JSON.parse(localStorage.getItem("loggedSeller")).sellerid);
        
//      })
     
// })
    
    const [Sellerid,setSellerid]=useState();
    const navigate=useNavigate();
    const init={
        
        petname:"",
        breed:"",
        color:"",
        gender:"Male",
        age:0,
        price:0,
        type:"",
        sellerid:JSON.parse(localStorage.getItem("loggedSeller")).sellerid
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
    var sendData=(e)=>{
        e.preventDefault();
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)

        }
        fetch('http://localhost:8080/regPet',reqOption)
        .then(resp=>{if(resp.ok)
                        return resp.json();
                    else
                        throw new Error("server Error");
        })
        // .then(objj=>{
        //       console.log("petid="+objj.petid);})
        .then(objj=>{
            console.log("petid="+objj.petid);
            const fd=new FormData();
            fd.append("file",file);
            const reqOption={
		        mode:'no-cors',
                method:'POST',
                body:fd
            }
            fetch("http://localhost:8080/uploadImage/"+objj.petid,reqOption)
            .then(resp=>{
                // resp.json())
            // .then(obj2=>{
                        if(resp.ok)
                        {
                            alert("Pet registered succesfully .Try login");
                            navigate("/login");

                        }
                        else
                        {
                            alert("Pet registered succesfully .Try login");
                            navigate("/seller_home");
                        }
                       

            })
        })
        .catch((error)=>{alert("server error. Try again"); })
        
    }

    // const [allPet,SetAllPet]=useState([])
    // const [allBreed,SetAllBreed]=useState([])
    // const [allColour,SetAllColour]=useState([])
    
    // useEffect(()=>{
    //     fetch("http://localhost:8080/getAllPet")
    //     .then(resp=>resp.json())
    //     .then(ope=>SetAllBreed(ope));

        

    //     fetch("http://localhost:8080/getColour")
    //     .then(resp=>resp.json())
    //     .then(oce=>SetAllBreed(oce));

    //    },[]);
    
    // getAllBreed=()=>{
    //     fetch("http://localhost:8080/getAllBreed")
    //     .then(resp=>resp.json())
    //     .then(obe=>SetAllBreed(obe));
    // }
    

    const [info,dispatch]=useReducer(reducer,init);
    const [file,setFile]=useState();

    return(
        <div>
        <nav className="navbar navbar-expand-sm  bg-light mb-3">
                  <div className='container-fluid'>
                    <ul className="navbar-nav">
                      <li className='nav-item'>
                        <Link to="/viewpetsell" className='nav-link px-3'>View Pet</Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/logout" className='nav-link px-3'>Logout</Link>
                      </li>
                    </ul>
                </div>
            </nav>
        
        <div class="row">
        <div class="col-md-6 offset-md-3 ">
        <div class="card my-4 bg-info ">
        <div className="mb-3">
        <h2 class="text-center text-dark mt-5">Enter Pet Details</h2>      
                </div>
        <form className="card-body cardbody-colour p-lg-5">
        <div className="mb-3">
                <label htmlFor="petname" className="form-label">Enter petname:</label>
                <input type="text" className="form-control" id="petname" name="petname" value={info.petname}
                onChange={(e)=>{dispatch({type:'update',fld:'petname',val:e.target.value})}}/>
                <div id="petnamehelp" className="form-text">valid petname</div>
            </div>
            
            <div className="mb-3">
                <label htmlFor="type" className="form-label">Select Pet type:</label>
                <input type="text" className="form-control" id="type" name="type" value={info.type}
                onChange={(e)=>{dispatch({type:'update',fld:'type',val:e.target.value})}}/>
                <div id="typehelp" className="form-text">...</div>
                {/* <select className="form-control" id="type" name="type"  onChange={(e)=>{dispatch({type:'update' , fld:'type', val:e.target.value})}}>
                    {
                    allPet.map(p=> {
                        return <option value={p.typeid}> {p.type}</option>
                    })
                    }
                </select> */}
            </div>
            
            <div className="mb-3">
                <label htmlFor="breed" className="form-label">Enter breed:</label>
                <input type="text" className="form-control" id="breed" name="breed"value={info.breed}
                onChange={(e)=>{dispatch({type:'update',fld:'breed',val:e.target.value})}} />
                <div id="breedhelp" className="form-text">....</div>
            </div>

            

            <div className="mb-3">
                <label htmlFor="color" className="form-label">Enter color:</label>
                <input type="text" className="form-control" id="color" name="color" value={info.color}
                onChange={(e)=>{dispatch({type:'update',fld:'color',val:e.target.value})}} />
                <div id="colorhelp" className="form-text">....</div>
            </div>

                            
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                Enter gender:
                <label className="btn btn-secondary active">
                    <input type="radio" name="gender" id="Male" checked
                    onChange={(e)=>{dispatch({type:'update',fld:'gender',val:e.target.value})}}/> Male
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="gender" id="Female" 
                    onChange={(e)=>{dispatch({type:'update',fld:'gender',val:e.target.value})}} /> Female
                </label>
                
            </div>
            
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Enter price:</label>
                <input type="text" className="form-control" id="price" min='0' max='5000' name="price"value={info.price}
                onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}} />
                <div id="pricehelp" className="form-text">....</div>
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Enter age:</label>
                <input type="text" className="form-control" id="age" name="age"value={info.age}
                onChange={(e)=>{dispatch({type:'update',fld:'age',val:e.target.value})}} />
                <div id="agehelp" className="form-text">....</div>
            </div>


            
            <div className="mb-3">
                <label htmlFor="type" className="form-label">Upload File:</label>
                <input type="file" className="form-control" id="image" name="image" 
                onChange={(e)=>{setFile(e.target.files[0])}}/>
            </div>
           
           
        
            <button type="submit" className="btn btn-primary md-3" name="login" onClick={(e)=>{sendData(e)}} >submit</button>
            <button type="reset" className="btn btn-primary ms-3" name="login" onClick={()=>dispatch({type:'reset'})}>reset</button>
            
        </form>
        <p>{JSON.stringify(info)}</p>
        <p>{file && file.name}</p>
        
       </div>
        </div>
        </div>
        </div>
    )
}
