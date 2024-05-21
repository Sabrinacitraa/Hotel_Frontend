import React, { useEffect, useState } from "react";
import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import "../../App.css";
import { AiOutlineSetting, AiOutlineDelete } from "react-icons/ai";

function DataKamar() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [rooms, setRooms] = useState([]);

  const getAllKamar = async () => {
    try {
      const token = sessionStorage.getItem("Token");
      // console.log(token)
      if (!token) {
        alert("Token not found");
      }

      const url = "http://localhost:7000/pemesanan/kamar"
      const response = await axios.get(url, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      // console.log(response)
      const data = response.data.data
      console.log(data)

      if(data){
        setRooms(data)
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllKamar();
  }, []);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRoom = () => {
    console.log("Add Room button clicked");
  };

  const handleDeleteRoom = (id) => {
    console.log(`Room with ID ${id} deleted`);
    setRooms(rooms.filter((room) => room.id !== id));
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

export default DataKamar;
