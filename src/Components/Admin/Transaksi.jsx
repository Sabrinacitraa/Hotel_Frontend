import React, { useEffect, useState } from "react";
import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import "../../App.css";
import { AiOutlineSetting, AiOutlineDelete } from "react-icons/ai";

function Transaksi() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [pemesanans, setPemesanans] = useState([]);

  const getAllPemesanan= async () => {
    try {
      const token = sessionStorage.getItem("Token");
      // console.log(token)
      if (!token) {
        alert("Token not found");
      }

      const url = "http://localhost:7000/pemesanan"
      const response = await axios.get(url, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      // console.log(response)
      const data = response.data.data
      console.log(data)

      if(data){
        setPemesanans(data)
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
    setpemesanans(pemesanans.filter((pemesanan) => pemesanan.id !== id));
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
            <th>Room Type</th>
            <th>Room</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((item,index) => (
            <tr key={index.id}>
              <td>{item.id_kamar}</td>
              <td>{item.nama_tipe_kamar}</td>
              <td>{item.nomor_kamar}</td>
              <td>{item.status}</td>
              <td>{item.harga}</td>
              <td>
                <button onClick={() => handleDeleteRoom(item.id)}>
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaksi;
