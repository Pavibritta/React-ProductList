import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { users, setCurrentUser } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const validateForm = () => {
    const error = {};
    if (!formData.userName.trim()) error.userName = "User Name is required";

    if (!formData.password.trim()) error.password = "Password is required";

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
    console.log(users);
    console.log(formData);
    const foundUser = users.find(
      (user) =>
        user.userName.toLowerCase() === formData.userName.toLowerCase() &&
        user.password === formData.password,
    );
    console.log(foundUser);

    if (foundUser) {
      console.log("Login Success");
      if (foundUser.role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/home");
      }

      setCurrentUser(foundUser);
      setFormData({
        userName: "",
        password: "",
      });
    } else {
      navigate("/unautherised");
    }
    console.log(foundUser);
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
          <button
            className="bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded shadow text-white cursor-pointer hover:from-cyan-600 hover:to-blue-700 w-full"
            onClick={handleSubmit}
          >
            Logout
          </button>
        </div>
        <p className="text-gray-700">
          Don't have an account{" "}
          <span className="font-bold text-blue-400 cursor-pointer">
            <NavLink to="/register">Register</NavLink>
          </span>
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
