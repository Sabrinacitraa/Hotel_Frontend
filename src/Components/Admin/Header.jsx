import React from "react";
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import '../../App.css';  

function Header() {
  const logged = localStorage.getItem("Data user");

  const handleLogout = () => {
    sessionStorage.removeItem("Token");
    localStorage.removeItem("Data user");
    window.location.href = "/Login";
  };

  return (
    <header className="header">  
        <div className="logout-container"> 
          <IoLogOutOutline className="icon" />
          <a className="logout-icon" onClick={handleLogout}>
            Log out
          </a>
        </div>
    </header>
  );
}

export default Header;
