import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layouts/User";
import Home from "./Components/Home/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gallery from "./Components/Gallery/Gallery";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Booking from "./Components/Booking/Booking";
import AdminLayout from "./Components/Layouts/Admin";
import HomeAdmin from "./Components/Admin/HomeAdmin";
import DataKamar from "./Components/Admin/DataKamar";
import Transaksi from "./Components/Admin/Transaksi";
import CheckIn from "./Components/Admin/CheckIn";
import CheckOut from "./Components/Admin/CheckOut";
import Register from "./Components/Register/Register";
import ProtectRoutes from "./Components/utils/ProtectRoutes";
import "./App.css";
import Admin from "./Components/Admin/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

        <Route path="/" element={<UserLayout />}>
          <Route
            path="/Booking"
            element={
              <ProtectRoutes>
                <Booking />
              </ProtectRoutes>
            }
          />
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>

        <Route path="/Admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <ProtectRoutes>
                <Admin />
              </ProtectRoutes>
            }
          />
          <Route
            path="DataKamar"
            element={
              <ProtectRoutes>
                <DataKamar />
              </ProtectRoutes>
            }
          />
          <Route
            path="Transaksi"
            element={
              <ProtectRoutes>
                <Transaksi />
              </ProtectRoutes>
            }
          />
          <Route
            path="CheckIn"
            element={
              <ProtectRoutes>
                <CheckIn />
              </ProtectRoutes>
            }
          />
          <Route
            path="CheckOut"
            element={
              <ProtectRoutes>
                <CheckOut />
              </ProtectRoutes>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
