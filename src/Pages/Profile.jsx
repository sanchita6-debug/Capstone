import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: ""
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Guest User",
      email: "guest@gmail.com",
      city: "Not Set"
    };

    setUser(savedUser);
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function saveProfile() {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile Updated Successfully 🎉");
  }

  return (
    <div>
      <Navbar />

      <h2 className="page-title">My Profile</h2>

      <div className="profile-container">

        {/* LEFT CARD */}
        <div className="profile-card">

          <div className="avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.city}</p>

        </div>

        {/* RIGHT FORM */}
        <div className="profile-form">

          <h3>Edit Profile</h3>

          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            name="city"
            value={user.city}
            onChange={handleChange}
            placeholder="City"
          />

          <button onClick={saveProfile}>
            Save Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;