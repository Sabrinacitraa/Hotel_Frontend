import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import "./Booking.css";

function Booking({ rooms, onSelect }) {
  const [type, setType] = useState([]);
  const currentDate = format(new Date(), "MMMM d, yyyy");
  const formattedDateTomorrow = format(
    new Date(currentDate).getTime() + 24 * 60 * 60 * 1000,
    "MMMM d, yyyy"
  );

  const getType = async () => {
    try {
      const url = "http://localhost:7000/type/";
      const response = await axios.get(url);
      const data = await response.data.data;
      // console.log(data);
      if (response) {
        setType(data);
        console.log(type)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <div className="container-form">
      <div class="row-2">
        <div
          className="stayDate"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              marginleft: "350px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "150px" }}>
              <p style={{ fontWeight: "bold" }}>Stay Dates</p>
              <p style={{ marginTop: "-10px" }}>{currentDate}</p>
            </div>
            <p style={{ fontWeight: "bold" }}> - </p>
            <div style={{ width: "150px", textAlign: "right" }}>
              <p style={{ fontWeight: "bold" }}>Stay Dates</p>
              <p style={{ marginTop: "-10px" }}>{formattedDateTomorrow}</p>
            </div>
          </div>
          <div style={{ marginleft: "100px" }}>
            <button
              style={{
                backgroundColor: "#003366",
                color: "white",
                alignContent: "center",
                margin: "80px 200px",
                padding: "5px 20px 5px 20px",
                borderRadius: "15px 15px",
              }}
            >
              Update Stay Details
            </button>
          </div>
        </div>
      </div>

      <div></div>
      <div className="room-option">
        <p style={{ fontWeight: "bold", fontSize: "24px" }}>
          {/* {room.nama_tipe_kamar} */}
        </p>
        <p style={{ fontWeight: "bold", justifyContent: "center" }}>
          Available
          {/*{room.available} */}
        </p>
        {type.map((item, index) => (
          <div
            key={index}
            className="details"
            style={{ display: "flex", width: "80%", marginBottom: "50px" }}
          >
            <img
              style={{
                borderRadius: "10%",
                marginRight: "30px",
                marginBottom: "60px",
                width : "50%"
              }}
              src={`http://localhost:7000/type/${item.foto}`} alt={item.nama_tipe_kamar}
            />
            <div className="text-detail" style={{ width: "70%" }}>
              <div className="title" style={{ marginBottom: "50px" }}>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  {item.nama_tipe_kamar}
                </p>
              </div>
              <div style={{ display: "flex", marginBottom: "50px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginRight: "200px",
                  }}
                >
                  {/* Flexi-rate */}
                </p>
                <div>
                  <p style={{}}>
                    IDR. 
                    {item.harga}
                    /night
                  </p>
                  <p style={{ fontStyle: "italic", fontSize: "12px" }}>
                    taxes and all fees included
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <button style={{ backgroundColor: "transparent" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "blue",
                      marginRight: "30px",
                    }}
                  >
                    Room Detail
                  </p>
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/form";
                  }}
                  style={{ backgroundColor: "transparent" }}
                >
                  <p style={{ fontSize: "14px", color: "blue" }}>Select Room</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
