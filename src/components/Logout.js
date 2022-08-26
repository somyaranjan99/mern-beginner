import React, { useEffect ,useContext} from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const {state,dispatch}= useContext(userContext)
  const navigate =useNavigate()
  const logoutfunc = async () => {
    try {
      const logoutData = await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const jsonData = await logoutData.json();
      if(jsonData.msg==='Logout'){
        dispatch({type:'USER',payload:false})
        navigate("/login")
      }
    } catch (error) {
        console.log(error)
    }
  };
  useEffect(() => {
    logoutfunc();
  }, []);
  return <div>Logout</div>;
};
export default Logout;
