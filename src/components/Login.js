import React,{useState,useContext} from 'react'
import {userContext} from '../App'
import {Link,useNavigate} from 'react-router-dom'
const Login=()=>{
  const {state,dispatch} =useContext(userContext)
  const navigate=useNavigate();
  const [useLogin,setuseLogin]=useState({
    email:"",password:""
  });
  const handleChange=(e)=>{
    setuseLogin({...useLogin,[e.target.name]:e.target.value})
  }
  const handleLoginSubmit=async (e)=>{
    e.preventDefault();
    const {email,password}=useLogin;
    const loginData= await fetch('/api/auth/login',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({email,password})
      
    });
    const loginUser= await loginData.json();
    if(!loginUser.success){
        console.log(loginUser.msg)
    }else{
      dispatch({type:'USER',payload:true})
      navigate('/')
    }

  }
    return (<><section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form method='POST'>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" name="email" onChange={handleChange}/>
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>
  
         
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" name='password' onChange={handleChange} />
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
   
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <Link to="/forgotpassword" className="text-body">Forgot password?</Link>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg" onClick={(e)=>handleLoginSubmit(e)}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                  className="link-danger">Register</Link></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  
  </section></>)
}
export default Login;