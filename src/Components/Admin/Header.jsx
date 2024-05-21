import React from "react";
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import img from "../../Assets/logo.jpg";

function Header() {
  const logged = localStorage.getItem("Data user");

  const handleLogout = () => {
    sessionStorage.removeItem("Token");
    localStorage.removeItem("Data user");
    window.location.href = "/Login";
  };

  return (
    <header className="header">
      <div className="header-right">
        <IoNotifications className="icon" />
        <a
          IoLogOutOutline
          className="icon"
          onClick={() => {
            handleLogout()
          }}
        >
          Log out
        </a>
      </div>
    </header>
  );
}

export default Header;
