"use client";

import { createContext, useRef, useState } from "react";

export const NavColourContext = createContext();

const NavColourProvider = ({ children }) => {
  const [navColour, setNavColour] = useState(true);
  const heroRef = useRef([]);
  const nameContainerRef = useRef();

  return (
    <NavColourContext.Provider
      value={{ navColour, setNavColour, heroRef, nameContainerRef }}
    >
      {children}
    </NavColourContext.Provider>
  );
};

export default NavColourProvider;
