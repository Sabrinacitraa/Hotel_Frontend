import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [dataAdmin, setdataAdmin] = useState([])

  useEffect(() => {
    const admin = localStorage.getItem("Data user");
    if(admin){
      const parseAdmin = JSON.parse(admin)
      setdataAdmin(parseAdmin)
    }
  }, [])
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-card">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <CgProfile className="profil" /> <h5>{dataAdmin.username}</h5>
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link to="/admin">
              <button className="sidebar-button">Dashboard</button>
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/admin/datakamar">
              <button className="sidebar-button">Data Kamar</button>
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/admin/transaksi">
              <button className="sidebar-button">Transaksi</button>
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/admin/checkin">
              <button className="sidebar-button">Check In</button>
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/admin/checkout">
              <button className="sidebar-button">Check Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
