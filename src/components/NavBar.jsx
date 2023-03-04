import { Center } from "@chakra-ui/react";
import React from "react";

const NavBar = ({ children }) => {
  return (
    <>
      <h1>NavBar</h1>
      <Center>{children}</Center>
    </>
  );
};

export default NavBar;
