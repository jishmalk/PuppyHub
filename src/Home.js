import React, { useContext, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { newContext } from "./Rout";
// import Carousel from 'react-bootstrap/Carousel';
// import { Image } from "react-bootstrap";


function Home() {

  const {setDisplaybool} = useContext(newContext)
      useEffect(()=>{
        // setDisplaybool(True)
      },[])


  return (
   
    <div id="main-div-main">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Dog"}>
            <div className="img-div" id="one"></div>
            </Link>
            <small className="list__names">Dog</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Cat"}>
            <div className="img-div" id="two"></div>
            </Link>
            <small className="list__names">Foods</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Toy"}>
            <div className="img-div" id="three"></div>
            </Link>
            <small className="list__names">Toy</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Groom"}>
            <div className="img-div" id="four"></div>
            </Link>
            <small className="list__names">Grooming</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Birds"}>
            <div className="img-div" id="five"></div>
            </Link>
            <small className="list__names">Birds</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Medicine"}>
            <div className="img-div" id="six"></div>
            </Link>
            <small className="list__names">Medicine</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Dress"}>
            <div className="img-div" id="seven"></div>
            </Link>
            <small className="list__names">Dress</small>
          </div>
          <div className="col-3 col-md-3 divisions">
            <Link to={"/Fish"}>
            <div className="img-div" id="eight"></div>
            </Link>
            <small className="list__names">Fish</small>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Home;