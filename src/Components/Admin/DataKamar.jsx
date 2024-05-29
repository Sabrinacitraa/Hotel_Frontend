import React, { useEffect, useState } from "react";
import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import "../../App.css";
import { AiOutlineDelete } from "react-icons/ai";

function DataKamar() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [rooms, setRooms] = useState([]);

  const getAllKamar = async () => {
    try {
      const token = sessionStorage.getItem("Token");
      // console.log(token)

      const url = "http://localhost:7000/room/";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response)
      const data = response.data.datas;
      console.log(data);

      if (data) {
        setRooms(data);
      }
    } catch (error) {
      alert(error);
    }
  };

  const [newRoom, setNewRoom] = useState({
    tipe_kamar: "",
    nomor_kamar: "",
    harga: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddRoom = async (event) => {
    event.preventDefault();
    try {
      const token = sessionStorage.getItem("Token");
      const url = "http://localhost:7000/room/";
      const response = await axios.post(url, newRoom, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        setRooms([...rooms, response.data]);
        setNewRoom({ tipe_kamar: "", nomor_kamar: "", harga: "" });
      }
    } catch (error) {
      alert(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  const handleDeleteRoom = (id) => {
    console.log(`Room with ID ${id} deleted`);
    setRooms(rooms.filter((room) => room.id !== id));
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
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    
        <div className="data-kamar-options">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={openModal} className="add-room-button">
            Add Room
          </button>
        </div>
    
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Add New Room</h2>
              <form onSubmit={handleAddRoom}>
                <label>
                  Room Type:
                  <input
                    type="text"
                    name="tipe_kamar"
                    value={newRoom.tipe_kamar}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Room Number:
                  <input
                    type="text"
                    name="nomor_kamar"
                    value={newRoom.nomor_kamar}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Price:
                  <input
                    type="number"
                    name="harga"
                    value={newRoom.harga}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit">Add Room</button>
              </form>
            </div>
          </div>
        )}
    
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
            {rooms.map((item, index) => (
              <tr key={index} className="table-row">
                <td>{item.id}</td>
                <td>{item.tipe_kamar.nama_tipe_kamar}</td>
                <td>{item.nomor_kamar}</td>
                <td>{item.status}</td>
                <td>{item.tipe_kamar.harga}</td>
                <td className="table-cell">
                  <button className="button" onClick={() => handleDeleteRoom(item.id)}>
                    <AiOutlineDelete />
                  </button>
                  <button className="button" onClick={() => handleCheckIn(item.id)}>
                    Check In
                  </button>
                  <button className="button" onClick={() => handleCheckOut(item.id)}>
                    Check Out
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
