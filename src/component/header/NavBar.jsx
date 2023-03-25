import React, { useEffect, useState } from "react";
import "./navBar.css";
import netFlix_logo from "../../assets/Netflix-logo.png";
import netFlix_avatar from "../../assets/Netflix-avatar.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const[handleShow,setHandleShow] = useState(false);
    // for navigation purpose i am going to use navigation hook from react router dom
    const navigate = useNavigate();

    
    const transitionNavBar = ()=>{
        if(window.scrollY > 100) {
            setHandleShow(true);
        }else{
            setHandleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
    <div className={`nav ${handleShow && 'nav__black' } `}>
      <div className="nav__contents">
        <img onClick={()=>navigate("/")} src={netFlix_logo} alt="netFlix_logo" className="nav__logo" />
        <img
          onClick={()=> navigate("/profile")}
          src={netFlix_avatar}
          alt="netFlix_avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
