import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "", // or 'admin'
    // other user info
  });

  const loginUser = (role) => {
    setUser((prevUser) => ({ ...prevUser, role }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
