"use client";

import { createContext, useState } from "react";

export const NavColourContext = createContext();

const NavColourProvider = ({ children }) => {
  const [navColour, setNavColour] = useState(true);

  return (
    <NavColourContext.Provider value={{ navColour, setNavColour }}>
      {children}
    </NavColourContext.Provider>
  );
};

export default NavColourProvider;
