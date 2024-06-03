"use client";

import { createContext, useRef, useState } from "react";

export const NavColourContext = createContext();

const NavColourProvider = ({ children }) => {
  const [navColour, setNavColour] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const navRef = useRef([]);
  const heroContext = useRef();

  return (
    <NavColourContext.Provider
      value={{
        navColour,
        setNavColour,
        navRef,
        heroContext,
        setIsLoadingComplete,
        isLoadingComplete,
      }}
    >
      {children}
    </NavColourContext.Provider>
  );
};

export default NavColourProvider;
