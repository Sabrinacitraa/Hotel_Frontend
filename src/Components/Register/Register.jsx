import React, { useEffect, useState } from "react";
import "./Register.css";
import image1 from "../../Assets/img_register.png";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { TiArrowBack } from "react-icons/ti";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerCustomer = async (event) => {
    event.preventDefault();
    const loginPromise = new Promise(async (resolve, reject) => {
      if (password != confirmPassword) {
        toast.error("Password doesn't match");
      }

      try {
        let url = "http://localhost:7000/user/register";
        let input = {
          username: username,
          email: email,
          password: password,
          role: "customer",
          foto: null,
        };
        const response = await axios.post(url, input);
        const data = await response.data;
        console.log(data);
        if (data) {
          sessionStorage.setItem("Token", data.token);
          localStorage.setItem("Data user", JSON.stringify(data.data));
          resolve();
          window.location.href = "/login";
        }
      } catch (error) {
        reject();
      }
    });
    toast.promise(loginPromise, {
      loading: "Sign Up...",
      success: "Register successful",
      error: "Register failed",
    });
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="background-1" />
      <a href="/">
        <TiArrowBack className="absolute ml-5 mt-5 w-10 h-10 fill-white" />
      </a>
      <div class="flex items-center justify-center min-h-screen ">
        <div class="w-auto">
          <form
            class="flex bg-white shadow-md rounded-3xl pl-8"
            onSubmit={registerCustomer}
          >
            <div className="my-6 mr-20 w-96">
              <div className="">
                <h3 className="flex m-0 p-0 font-bold">Create Your</h3>
                <h3 className="flex m-0 p-0 mb-3 font-bold">Account</h3>
              </div>
              <div className="mb-4">
                <label
                  class="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  class="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  class="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="password"
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
              </div>
              <div className="mb-4">
                <label
                  class="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Insert Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/login"
              >
                Already have account?
              </a>
              </div>
            </div>
            <div className="w-auto m-0 p-0">
              <img className="h-full " src={image1} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;