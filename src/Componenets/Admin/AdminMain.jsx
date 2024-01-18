import React, { useContext } from "react";
import "./Adminmain.css";
import { Link } from "react-router-dom";
import { newContext } from "../../Rout";



function AdminMain(){
    const {adminlogin} = useContext (newContext);

    return(
        <div style={{marginTop:"70px",backgroundColor :"#198754",paddingBottom:"20px",height:"100vh"}} className='admin-main'>
      {adminlogin?
      <div className='container ad-main-div'>
        <div className='row ad-main-row'>
          <div className='col-6 ad-col-main'>
            <Link to={"/users"}><div className='ad-user-div'></div></Link><br/>
            <p><strong>Users</strong></p>
          </div>
          <div className='col-6 ad-col-main'>
            <Link to={"/Product"}><div className='ad-items-div'></div></Link><br/>
            <p><strong>Products</strong></p>
          </div>
        </div>
      </div>:<h1 style={{color:"white",textAlign:"center"}}>Access Denied !</h1>}
    </div>
    )
}

export default AdminMain