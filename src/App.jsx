import { useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Footer from "./Components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Register from "./Components/Register";
import Unautherised from "./Components/Unautherised";
import Admindashboard from "./Pages/Admindashboard";
import { AuthContext } from "./Context/AuthContext";
function App() {
  let [userName, setUserName] = useState("Pavithra");
  console.log(userName);
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unautherised" element={<Unautherised />} />

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admindashboard" element={<Layout />}>
          <Route index element={<Admindashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
