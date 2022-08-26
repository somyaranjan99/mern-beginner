import React ,{useContext}from 'react'
import { userContext } from '../App';
import { Link } from 'react-router-dom';
const Navbar=()=>{
  const {state,dispatch}=useContext(userContext)
  const RenderMenu=()=>{
    if (state){
        return(<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
   
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>)
    }else{
      return(<nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
      
          </ul>
    
        </div>
      </div>
    </nav>)
    }
  }
    return (<>
              <RenderMenu />
        
        </>)
}
export default Navbar;