import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";

const Admindashboard = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[90%] max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome {currentUser.userName}! You have full access.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Manage Users
          </button>

          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            View Reports
          </button>

          <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Delete Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
