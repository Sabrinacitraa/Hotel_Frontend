import React, { useEffect, useState } from "react";
import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import { AiOutlineSetting, AiOutlineDelete } from "react-icons/ai";

function Transaksi() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [pemesanans, setPemesanans] = useState([]);

  const getAllPemesanan = async () => {
    try {
      const token = sessionStorage.getItem("Token");
      // console.log(token)
      if (!token) {
        alert("Token not found");
      }

      const url = "http://localhost:7000/booking/getOrder";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response)
      const data = response.data.data;
      console.log(data);

      if (data) {
        setPemesanans(data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllPemesanan();
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleDeleteRoom = (id) => {
    console.log(`PEMESANAN with ID ${id} deleted`);
    setPemesanans(pemesanans.filter((pemesanan) => pemesanan.id !== id));
  };

  const handleCheckIn = (id) => {
    console.log(`Room with ID ${id} checked in`);
  };

  const handleCheckOut = (id) => {
    console.log(`Room with ID ${id} checked out`);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      {/* <div className="data-kamar-options">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleAddRoom} className="add-room-button">
          Add Room
        </button>
      </div> */}

      <table className="room-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Invoice</th>
            <th>Total Room</th>
            <th>Status</th>
            <th>Guest</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pemesanans.length > 0 ? (
            pemesanans.slice(0, 1).map((item, index) => (
              <tr key={index.id}>
                <td>{item.id}</td>
                <td>{item.nomor_pemesanan}</td>
                <td>{item.jumlah_kamar}</td>
                <td>{item.status_pemesanan}</td>
                <td>{item.nama_tamu}</td>
                <td className="table-cell">
                  <button
                    className="button"
                    onClick={() => handleDeleteRoom(item.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                  <Link to={`/admin/checkin`} className="button-link">
                    Check In
                  </Link>
                  <Link to={`/admin/checkout`} className="button-link">
                    Check Out
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transaksi;
