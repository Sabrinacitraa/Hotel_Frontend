import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../App.css'; 

function CheckIn() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    deposit: '',

  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    console.log('Check-in cancelled');
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <div className="checkin-container">
        <form className="checkin-form" onSubmit={handleSubmit}>
          <h2>Check Out</h2>
          <div className="form-group">
            <label>Invoice:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Check-in Date:</label>
            <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Check-out Date:</label>
            <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Room Type:</label>
            <input type="text" name="roomType" value={formData.roomType} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Deposit:</label>
            <input type="number" name="deposit" value={formData.deposit} onChange={handleInputChange} />
          </div>

          <div className="button-container">
            <button type="submit" className="checkin-button">Check In</button>
            <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        </form>

        </div>
    </div>
  );
}

export default CheckIn;
