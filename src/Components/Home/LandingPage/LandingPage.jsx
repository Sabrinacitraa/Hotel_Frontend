import React, { useEffect, useState, createContext } from "react";
import "./LandingPage.css";
import header from "../../../Assets/header.jpg";
import Carousel from "../../Carousel/Carousel";
import img from "../../../Assets/content2.jpg";
import axios from "axios";

const SelectedRoom = createContext();

const LandingPage = () => {
  const [checkIn, setCheckin] = useState();
  const [checkOut, setCheckOut] = useState();
  const [avalaibleRooms, setAvalaibleRooms] = useState([]);
  const [roomCount, setRoomCount] = useState(0);

  const getTypeKamar = async () => {
    try {
      const url = "http://localhost:7000/booking/filterKamar";
      const request = {
        checkIn,
        checkOut,
        roomCount,
      };
      console.log(request);
      if(request){
        localStorage.setItem("date and room", JSON.stringify(request))
      }
      const response = await axios.get(url, request);
      const data = response.data;
      if (data) {
        setAvalaibleRooms(data);
        localStorage.setItem("avalaibleRooms", JSON.stringify(data))
      }
    } catch (error) {
      console.log("Error fetching room types", error);
    }
  };

  useEffect(() => {
    getTypeKamar();
  }, []);

  const handleIncrement = () => {
    setRoomCount(roomCount + 1);
  };

  const handleDecrement = () => {
    setRoomCount(roomCount > 0 ? roomCount - 1 : 0); // Ensure the count doesn't go below 0
  };

  const handleChange = (e) => {
    setRoomCount(Number(e.target.value));
  };

  // const handleRoomTypeChange = (event) => {
  //   setSelectedRoomType(event.target.value);
  // };

  return (
    <div className="home">
      <div className="img">
        <img src={header} alt="" />
      </div>
      <section className="grid" onSubmit={getTypeKamar}>
        <div className="horizontal-grid d-flex flex-row">
          <div className="checkIn ">
            <label htmlFor="checkIn">Check In</label>
            <input
              type="date"
              id="checkIn"
              onChange={(e) => {
                setCheckin(e.target.value);
              }}
              value={checkIn}
            />
          </div>

          <div className="checkOut">
            <label htmlFor="checkOut">Check Out</label>
            <input
              type="date"
              id="checkOut"
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              value={checkOut}
            />
          </div>

          <div className="addTamu">
            <label htmlFor="addTamu">Total rooms</label>
            <div className="counterContainer">
              <div className="counterButtons">
                <button type="button" onClick={handleDecrement}>
                  -
                </button>
                <input
                  type="number"
                  id="addTamu"
                  value={roomCount}
                  onChange={handleChange}
                  style={{ textAlign: "center", width: "60px" }}
                />
                <button type="button" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
          <button className="btn">
            <a
              onClick={() => {
                console.log("ok");
                getTypeKamar();
                window.location.href='/booking'
              }}
            >
              Find a Four Points
            </a>
          </button>
        </div>
      </section>
      <div className="textContent">
        <h1>Four Points</h1>
        <h6>by Sheraton Munich Arabellapark</h6>
        <p>
          Discover our new hotel that combines Bavarian charm and a timeless
          design with local elements. Located a few subway stops from the city
          center and only a short walk from the English Garden, Munich’s famous
          city park, you will experience the special mixture of exciting city
          life and Bavarian coziness that makes Munich so unique. Inside, find
          convenient workspaces with fast, free Wi-Fi, Munich’s highest spa with
          pool, sauna, and treatments, and local beer with Best Brews™ on tap.
          Spacious guest rooms with views up to the alps round out your stay.
        </p>
      </div>

      <Carousel />

      <div className="content3">
        <div className="img">
          <img src={img} alt="" />
        </div>

        <div className="text-last">
          <h1>
            In the realm of 30 extraordinary Marriott Bonvoy hotel brands, Four
            Points is a standout.
          </h1>
          <p>
            Step into a world of exclusive member advantages with Marriott
            Bonvoy™, featuring complimentary Wi-Fi, member-only rates, and
            points that unlock travel experiences. Start your adventure at
            Marriott.com. Where will our journey together lead?
          </p>
          <div className="link">
            <a href="/Register">Sign in</a>
            <a href="/Register">Join Now </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
