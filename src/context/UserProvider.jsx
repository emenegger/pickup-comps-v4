import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [currSession, setCurrSession] = useState(null);

  // // Function to update user and session data
  // const updateUserAndSession = (userData, sessionData) => {
  //   setUser(userData);
  //   setSession(sessionData);
  // };

  // // Function to clear user and session data
  // const clearUserAndSession = () => {
  //   setUser(null);
  //   setSession(null);
  // };

  // Context value
  const contextValue = {
    currUser,
    currSession,
    setCurrUser,
    setCurrSession,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
