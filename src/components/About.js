import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const About=()=>{
    const navigate= useNavigate()
    const [userDetails,setuserDetails]=useState();
    const userDetailsAuth=async ()=>{
        try {
            const urlData= await fetch("/api/auth/about",{
                method:'GET',
                headers:{
                    'Content-type':'application/json'
                }
            })
            const data= await urlData.json();
           if(!data){
                navigate("/")
           }
           setuserDetails(data)

            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( ()=>{
         userDetailsAuth()
    },[])
    return (<>
    <div className="row ">
		<div className="col-md-3">
			<div className="profile-sidebar">
			
				<div className="profile-userpic">
					<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""/>
				</div>
		
				<div className="profile-usertitle">
				    <img src="http://www.joblo.com/newsimages1/logan-x-24-hugh-jackman-villain-thumb.jpg" className="img-circle" />
			
					<div className="profile-usertitle-name">
					{userDetails&&userDetails.name}
					</div>
					<div className="profile-usertitle-job">
						{userDetails && userDetails.work}
					</div>
				</div>
			
		
				<div className="profile-usermenu">
					<ul className="nav">
						<li className="active">
							<a href="#">
							<i className="glyphicon glyphicon-home"></i>
							Home </a>
						</li>
						<li>
							<a href="#">
							<i className="glyphicon glyphicon-user"></i>
							My Account  </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i className="glyphicon glyphicon-edit"></i>
							Account Setting </a>
						</li>
						<li>
							<a href="#">
							<i className="glyphicon glyphicon-ok"></i>
							Menu</a>
						</li>
							<li>
							<a href="#">
							<i className="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>

			</div>
		</div>
		<div className="col-md-9 profile">
		   <div className="col-sm-9">
                 <div className="profile-content">
		
			        {userDetails && userDetails._id}
			    </div>
            </div>
            <div className="col-sm-9">
                 <div className="profile-content">
		
				 {userDetails && userDetails.email}
			    </div>
            </div>
            <div className="col-sm-9">
                 <div className="profile-content">
		
				 {userDetails && userDetails.phone}
			    </div>
            </div>
           
		</div>
	</div>

</>)
}
export default About;