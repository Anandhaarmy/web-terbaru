import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // gunakan useNavigate
import axios from "axios";
import logo from "../assets/logo.png";
import '../App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // inisialisasi useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://23.26.138.128:3000/api/auth/register/user",
        formData
      );
      alert("User registered successfully");
      navigate("/login"); // redirect ke halaman login
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Failed to register user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="KostCozy Logo"
            className="h-32 w-32 mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-orange-500">
            Register at KostCozy
          </h2>
          <p className="text-gray-600">
            Please fill out the form below to create an account.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-orange-500"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
