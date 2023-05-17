import {
  Button,
  Center,
  HStack,
  Heading,
  Avatar,
  Flex,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserProvider";
import supabase from "@/pages/api/client";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

const NavBar = ({ children }) => {
  const { currUser, currSession, setCurrUser, setCurrSession } =
    useContext(UserContext);
  const router = useRouter();
  console.log("navbar", currUser, currSession);

  const handleSignOut = async () => {
    let { error } = await supabase.auth.signOut();
    console.log("error", error);
    setCurrUser(null);
    setCurrSession(null);
  };

  // const handleSignInClick = () => router.push("/signin");

  return (
    <>
      <HStack
        justify="space-between"
        p={2}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        // pb={4}
      >
        <Heading as="h2" size="lg">
          Pickup Comps
        </Heading>
        <Flex
          alignItems="center"
          justify="space-between"
          direction="row-reverse"
          width="17vw"
        >
          {!currSession ? (
            
            <Button onClick={() => router.push("/signin")}>Sign In</Button>
          ) :
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={currUser && <Avatar name={currUser.email} size="md" />}
            />
            <MenuList>
              <MenuItem >Your Profile</MenuItem>
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </MenuList>
          </Menu> }
        </Flex>
      </HStack>
      <Center p={2}>{children}</Center>
    </>
  );
};

export default NavBar;
