import React,{useState} from 'react'

import {Link,useNavigate  } from 'react-router-dom'
const Signup=()=>{
  const navigate = useNavigate();
  const [formerrors,setFormerrors]=useState({})
  const [signupData,setsignupData]=useState({name:"",
email:"",phone:"",work:"",password:"",cpassword:""})
  const handleChange=(e)=>{
    setsignupData({...signupData,[e.target.name]:e.target.value})

  }
  const validate=(values)=>{
    const errors={}
    if (!values.name){
      errors.name="please enter name";
    }
    if (!values.email){
      errors.email="please enter email";
    }
    if (!values.phone){
      errors.email="please enter phone";
    }
    if (!values.work){
      errors.work="please enter work";
    }
    if (!values.password){
      errors.password="please enter password";
    }
    if (!values.cpassword){
      errors.cpassword="please enter confirm password";
    }
    return errors;
  }
  const handleSummitSignup= async (e)=>{
    e.preventDefault();
    setFormerrors(validate(signupData));
    if(Object.keys(formerrors).length===0){
    const {name,email,phone,work,password,cpassword}=signupData;
    const signupUrlData = await fetch('/api/auth/createuser',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name,email,phone,work,password,cpassword})
    });
    const data= await signupUrlData.json();


    if (data.status !==200){
    
      setFormerrors({servererror:data.error})
    }else{
      navigate('/login')
    }
    
  }

  }
 
    return (<>
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form method='POST'>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">SIGN UP</p>
              <p className='text-danger'>{formerrors && formerrors.servererror}</p>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="nameField">Name</label>
              <input type="text" id="nameField" name="name" className="form-control form-control-lg"
                placeholder="Enter your name" value={signupData.uname} onChange={handleChange}  />
               <p className="text-danger">{formerrors && formerrors.name}</p> 
            </div>
            

            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="emailField">Email address</label>

              <input type="email" id="emailField" name="email" className="form-control form-control-lg"
                placeholder="Enter a valid email address" value={signupData.email} onChange={handleChange} />
                 <p className="text-danger">{formerrors && formerrors.email}</p>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="phonenum">Phone</label>

              <input type="text" id="phonenum" name="phone" className="form-control form-control-lg"
                placeholder="Enter your phone" value={signupData.phone} onChange={handleChange} />
                <p className="text-danger">{formerrors && formerrors.phone}</p>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="userwork">Work</label>

              <input type="text" id="userwork" name="work" className="form-control form-control-lg"
                placeholder="Enter your work" value={signupData.work} onChange={handleChange} />
               <p className="text-danger">{formerrors && formerrors.work}</p> 
            </div>
         
            <div className="form-outline mb-3">
            <label className="form-label" htmlFor="passwordField">Password</label>

              <input type="password" id="passwordField" name="password" className="form-control form-control-lg"
                placeholder="Enter password" value={signupData.password} onChange={handleChange} />
                <p className="text-danger">{formerrors && formerrors.password}</p>
            </div>
            <div className="form-outline mb-3">
            <label className="form-label" htmlFor="cpasswordField">Confirm Password</label>

              <input type="password" id="cpasswordField" name="cpassword" className="form-control form-control-lg"
                placeholder="Enter password" value={signupData.cpassword} onChange={handleChange} />
                <p className="text-danger">{formerrors && formerrors.cpassword}</p>
            </div>
  
          
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg" onClick={(e)=>handleSummitSignup(e)}>Signup</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/login"
                  className="link-danger">Login </Link>
                  </p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  
  </section>
    </>)
}
export default Signup;