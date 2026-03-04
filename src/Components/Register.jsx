import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const error = {};
    if (!formData.userName.trim()) error.userName = "User Name is required";
    if (!formData.email.trim()) error.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      error.email = "Invalid email format";
    if (!formData.password.trim()) error.password = "Password is required";
    if (!formData.confirmPassword.trim())
      error.confirmPassword = "Confirm Password is required";
    console.log(error);
    if (!formData.role) error.role = "Role is Required";
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }

    let newData = [];
    const existingUser = JSON.parse(localStorage.getItem("user")) || [];
    newData = [...existingUser, formData];
    console.log(newData);
    localStorage.setItem("user", JSON.stringify(newData));
    navigate("/login");
    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-600 rounded-lg shadow-lg p-6 w-[90%] max-w-md relative flex flex-col justify-center items-center space-y-4 pt-10">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="userName"
            value={formData.userName}
            className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
            onChange={handleChange}
          />
          {errors.userName && (
            <p className="text-red-500 text-sm">{errors.userName}</p>
          )}
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}

          <select
            name="role"
            value={formData.role}
            className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          <button
            className="bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded shadow text-white cursor-pointer hover:from-cyan-600 hover:to-blue-700 w-full"
            onClick={handleSubmit}
          >
            Register
          </button>
          <NavLink
            className=" px-3 py-2  text-white cursor-pointer  absolute right-0 top-0"
            to="/login"
          >
            X
          </NavLink>
        </div>
        <p className="text-gray-700">
          Already have an account{" "}
          <span className="font-bold text-blue-400 cursor-pointer">
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
