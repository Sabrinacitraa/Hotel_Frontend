import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import '../../App.css';

function CheckIn() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [formData, setFormData] = useState({
    invoice: '',
    name: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    deposit: '',
  });
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCheckIns();
  }, []);

  const fetchCheckIns = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/pemesanan');
      setCheckIns(response.data.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/pemesanan', {
        tgl_check_in: formData.checkInDate,
        tgl_check_out: formData.checkOutDate,
        nama_tamu: formData.name,
        jumlah_kamar: 1, 
        id_tipe_kamar: formData.roomType,
        status_pemesanan: 'baru',
        id_user: 1, 
      });
      fetchCheckIns();
    } catch (error) {
      setError('Error creating check-in');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/pemesanan/${id}`);
      fetchCheckIns();
    } catch (error) {
      setError('Error deleting check-in');
    }
  };

  const handleCancel = () => {
    setFormData({
      invoice: '',
      name: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
      deposit: '',
    });
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <div className="checkin-container">
        <form className="checkin-form" onSubmit={handleSubmit}>
          <h2>Check In</h2>
          <div className="form-group">
            <label>Invoice:</label>
            <input type="text" name="invoice" value={formData.invoice} onChange={handleInputChange} />
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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {checkIns.map((checkIn) => (
              <li key={checkIn.id_pemesanan}>
                {checkIn.nama_tamu} - {new Date(checkIn.tgl_check_in).toLocaleDateString()} - {new Date(checkIn.tgl_check_out).toLocaleDateString()} - {checkIn.id_tipe_kamar} - {checkIn.status_pemesanan}
                <button onClick={() => handleDelete(checkIn.id_pemesanan)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default CheckIn;
