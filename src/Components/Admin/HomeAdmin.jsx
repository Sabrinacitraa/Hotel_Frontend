import React, { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import axios from "axios";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

const HomeAdmin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [checkInData, setCheckinData] = useState(0);
  const [checkOutData, setCheckoutData] = useState(0);
  const [countTransaksi, setCountTransaksi] = useState(0);
  const [roomUsed, setroomUsed] = useState([]);
  const [roomChekOut, setRoomCheckOut] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const getRoomUsed = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const url = "http://localhost:7000/booking/getcheckin";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;

      if (data) {
        setroomUsed(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomUsed();
  }, []);

  const getChekOut = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const url = "http://localhost:7000/booking/getcheckout";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.data;

      if (data) {
        setRoomCheckOut(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChekOut();
  }, []);

  const fetchdataCheckin = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const response = await axios.get(
        "http://localhost:7000/booking/checkin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCheckinData(data.datas[0].check_in);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdataCheckin();
  }, []);

  const fetchdataCheckOut = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const response = await axios.get(
        "http://localhost:7000/booking/checkout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCheckoutData(data.datas[0].check_out);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdataCheckOut();
  }, []);

  const countDataTransaksi = async () => {
    try {
      const token = sessionStorage.getItem("Token");

      if (!token) {
        throw new Error("No token found in sessionStorage");
      }

      const response = await axios.get(
        "http://localhost:7000/booking/SumTransaksi",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setCountTransaksi(data.datas[0].total_transaksi);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    countDataTransaksi();
  }, []);

  return (
    <>
      <main className="main-container">
        {/* <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        /> */}
        

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Kamar Tersedia</h3>
              <IoBedOutline className="card_icon" />
            </div>
            <h1>15</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Check-in</h3>
              <IoBedOutline className="card_icon" />
            </div>
            {checkInData > 0 ? <h1>{checkInData}</h1> : <p>Loading</p>}
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Check-out</h3>
              <IoBedOutline className="card_icon" />
            </div>
            {checkOutData > 0 ? <h1>{checkOutData}</h1> : <p>Loading</p>}
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Transaksi</h3>
              <IoBedOutline className="card_icon" />
            </div>
            {countDataTransaksi > 0 ? (
              <h1>{countTransaksi}</h1>
            ) : (
              <p>Loading</p>
            )}
          </div>

          <div className="card">
            <div className="card-bot1">
              <h4>Currently Staying</h4>
              <hr />
              <div className="title">
                <th>Name</th>
                <th>Room</th>
                <th>Check-In</th>
              </div>
              <div className="subtitle">
                {roomUsed.length > 0 ? (
                  roomUsed.slice(0, 1).map((item, index) => (
                    <>
                      <tb>{item.nama_tamu}</tb>
                      <tb>{}</tb>
                      <tb>{item.tgl_check_in}</tb>
                    </>
                  ))
                ) : (
                  <>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-bot1">
              <h4>Currently Check-out</h4>
              <hr />
              <div className="title">
                <h4 className>Name</h4>
                <h4>Room</h4>
                <h4>Check-out</h4>
              </div>
              <div className="subtitle">
                {roomChekOut.length > 0 ? (
                  roomChekOut.slice(0, 1).map((item, index) => (
                    <>
                      <p>{item.nama_tamu}</p>
                      <p>{}</p>
                      <p>{item.tgl_check_out}</p>
                    </>
                  ))
                ) : (
                  <>
                    <p>Loading...</p>
                    <p>Loading...</p>
                    <p>Loading...</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeAdmin;
