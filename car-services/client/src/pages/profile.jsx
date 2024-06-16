import React from "react";
import "../styles/profile.css";
import Navbar from "../components/navbar";

function Profile() {
  var imgSrc = "../assets/images/sample.jpg";
  return (
    <>
      <div className="p-3 my-2 vh-100 bg-dark text-white">
        <div className="avatar d-flex justify-content-center ">
          <img src={{ imgSrc }} className="bg-black" />
        </div>
        <h4 className="handler text-center py-3">Tupac Shakur</h4>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mx-3">Edit Profile</button>
          <button className="btn btn-primary mx-3">Share Profile</button>
        </div>
        <section className="activity my-5">
          <p className="text-white text-center display-6">
            Activity will be shown here, if any!
          </p>
        </section>
        <Navbar />
      </div>
    </>
  );
}

export default Profile;
