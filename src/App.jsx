import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  let [userName, setUserName] = useState("Pavithra");
  console.log(userName);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar userName={userName} />
      <Home userName={userName} />

      <button
        className="bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded shadow text-white cursor-pointer hover:from-cyan-600 hover:to-blue-700 absolute right-5 top-20"
        onClick={() => {
          setOpen(true);
        }}
      >
        Login
      </button>
      {open && (
        <div className=" fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-gray-600 rounded-lg shadow-lg p-6 w-[90%] max-w-md relative flex flex-col justify-center items-center space-y-4 pt-10">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="mx-auto px-3 py-2 rounded shadow bg-white outline-none w-full"
              onChange={(e) => {
                userName = e.target.value;
              }}
            />
            <button
              className="bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-2 rounded shadow text-white cursor-pointer hover:from-cyan-600 hover:to-blue-700 w-full"
              onClick={() => {
                setOpen(false);
                setUserName(userName);
              }}
            >
              Login
            </button>
            <button
              className=" px-3 py-2  text-white cursor-pointer  absolute right-0 top-0"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
