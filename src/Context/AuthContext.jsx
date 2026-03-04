import React, { useState, useEffect } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([]);

  // Load users when app starts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ users, setUsers, currentUser, setCurrentUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
