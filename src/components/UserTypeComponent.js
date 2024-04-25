import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Loader from './Loader';
import OurService from './OurService';

function UserTypeComponent() {
  return (
    <>
    <Loader></Loader>
    {/*<OurService to={" To"} text={"Jarvis Systems"}></OurService>*/}
  
 <div className='d-lg-flex align-items-lg-center'>
      
    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/doctor.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
            
            <form className="form-horizontal">
                <Link to="/doctorhome" className="btn btn-default">
                Doctor Dashboard 
                </Link>

            </form>
            </div>
      </div>

       

    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
           
                <form className="form-horizontal">
                <Link to="/patienthome" className="btn btn-default">
                        Patient Dashboard 
                </Link>
                </form> 
        </div>
      </div>


    <div className="form-bg">
        <div className="form-container "> 
            <img
            src={process.env.PUBLIC_URL + "/medical.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
                />
            
            <form className="form-horizontal">
            <Link to="/medicalhome" className="btn btn-default">
                        Medical Dashboard 
            </Link>

            </form>
        </div>
    </div>

    <div className="form-bg">
        <div className="form-container ">

            <img
            src={process.env.PUBLIC_URL + "/pharma.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
         
            <form className="form-horizontal">
            <Link to="/pharmahome" className="btn btn-default">
                        Pharma Dashboard 
            </Link>

            </form>
        </div>
    </div>

    </div>

    </>
  );
}

export default UserTypeComponent