import React, { useState } from "react";
import "./Login.css";
import logo1 from "../../Assets/logo.jpg";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (event) => {
    event.preventDefault();

    const loginPromise = new Promise(async (resolve, reject) => {

      try {
        let url = "http://localhost:7000/auth";
        let input = {
          email: email,
          password: password,
        };
        const response = await axios.post(url, input);
        const data = await response.data;

        if (data) {
          sessionStorage.setItem("Token", data.token);
          localStorage.setItem("Data user", JSON.stringify(data.data));
          resolve();

          if ( data.data.role == "customer") {
            window.location.href = "/";
          } else {
            window.location.href = "/Admin";
          }
        } else {
          reject(new Error(""));
        }
      } catch (error) {
        reject(error);
      }
    });
    toast.promise(loginPromise, {
      loading: "Logging in...",
      success: "Login successful",
      error: "Login failed",
    });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="background-2"/>
      <a href="/">
        <TiArrowBack className="absolute ml-5 mt-5 w-10 h-10 fill-white" />
      </a>
      <div class="flex items-center justify-center min-h-screen ">
        <div class="w-auto">
          <form
            class="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
            onSubmit={handleAuth}
          >
            <div className="flex mb-5">
              <div>
                <h3 className="m-0 mr-20">Local concepts with a</h3>
                <h3 className="m-0 mr-20">Global reach</h3>
              </div>
              <img src={logo1} alt="logo" className="w-28 h-20" />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Insert Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p class="text-red-500 text-xs italic">
                Please enter a correct password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Login"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/register"
              >
                Don't have account yet?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
