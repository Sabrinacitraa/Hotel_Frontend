import React, { useEffect, useState } from "react";
import "./Register.css";
import image1 from "../../Assets/img_register.png";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerCustomer = async (event) => {
    event.preventDefault();

    try {
      let url = "http://localhost:7000/user/register";
      let input = {
        username: username,
        email: email,
        password: password,
        role : 'customer',
        foto: null
      };
      const response = await axios.post(url, input);
      const data = await response.data;
      console.log(data);
      if (data) {
        sessionStorage.setItem("Token", data.token);
        localStorage.setItem("Data user", JSON.stringify(data.data));
        alert("Register succsess");
        window.location.href = "/login";
      }
    } catch (error) {
      alert("Register failed");
    }
  };

  return (
    <>
      <div className="background-1"> </div>
      <div class="box-register">
        <form onSubmit={registerCustomer}>
          <div class="row">
            <div class="form-sidebar">
              <h1 style={{ fontsize: "100px" }}> Create Your </h1>
              <h1> Account </h1>
              <br />
              <label class="label-register" style={{}}>
                Full Name
              </label>
              <br />
              <input
                style={{
                  height: "60px",
                  width: "100%",
                  padding: "10px",
                  marginTop: "6px",
                  marginBottom: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                }}
                type="text"
                id="fullname"
                name="fullname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your full name"
              ></input>
              <label class="label-register" style={{}}>
                Email
              </label>
              <br />
              <input
                style={{
                  height: "60px",
                  width: "100%",
                  padding: "10px",
                  marginTop: "6px",
                  marginBottom: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                }}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label class="label-register" style={{}}>
                Password
              </label>
              <br />
              <input
                style={{
                  height: "60px",
                  width: "100%",
                  padding: "10px",
                  marginTop: "6px",
                  marginBottom: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                }}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button
                class="submit"
                style={{ borderRadius: "15px", padding: "12px 200px" }}
                type="submit"
              >
                Continue to sign up
              </button>
            </div>
            <div class="img-sidebar">
              <img src={image1} className="image"></img>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
