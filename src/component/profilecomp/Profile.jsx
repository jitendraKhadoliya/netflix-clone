import React from "react";
import NavBar from "../header/NavBar";
import "./profile.css";
import netflix_avatar from "../../assets/Netflix-avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../config/Firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    // here I will going to use nev component
    <div className="profile">
      <NavBar />
      <div className="profile__body">
        <h3>Edit Profile</h3>
        <div className="profile__info">
          <img src={netflix_avatar} alt="netflix_avatar" />
          <div className="profile__details">
            <h4>{user.email}</h4>
            <div className="profile__plans">
              <h4>Plans</h4>
              <button
                className="profile__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
