import React, { useState } from "react";
import supabase from "../pages/api/client";
import { useRouter } from "next/router";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Flex,
  VStack,
  Center,
  Container,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  const toast = useToast();

  const router = useRouter();

  const handleClick = (state, setState) => setState(!state);

  const handleChange = (e, state, setState) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "password:",
      password,
      "confirmed password:",
      confirmedPassword
    );
    // send the email and password to supabase
    if (password === confirmedPassword) {
      //* auth is reading undefined
      // const { data, error } = await supabase.auth.signUp({
      //   email,
      //   password,
      // });
      // const { user, session, error } = await supabase.auth.signUp({
      //   email: 'example@email.com',
      //   password: 'example-password',
      // })
      console.log(user, session);
      if (error) {
        console.log("error:", error, error.message);
        setErrorMessage(error.message);
        // toast({
        //   title: 'Sign Up Error',
        //   description: {errorMessage},
        //   status: 'error',
        //   duration: 9000,
        //   isClosable: true,
        // })
      } else {
        // redirect back to index
        router.push("/");
      }
    } else {
      // setErrorMessage("Passwords must match");
      toast({
        title: 'Sign Up Error',
        description: "Passwords must match",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <Container>
      <Flex direction="column" justify="center" align="center" h="70vh">
        <VStack
          spacing="1rem"
          css={{
            borderRadius: 5,
            padding: 35,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Heading>Sign Up For Pickup Comps</Heading>
          <InputGroup size="xl">
            <Input pr="4.5rem" type="email" placeholder="Enter email" value={email}
              onChange={(e) => handleChange(e, email, setEmail)} />
          </InputGroup>
          <InputGroup size="xl">
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => handleChange(e, password, setPassword)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => handleClick(showPassword, setShowPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="xl">
            <Input
              pr="4.5rem"
              type={showConfirmed ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmedPassword}
              onChange={(e) => handleChange(e, confirmedPassword, setConfirmedPassword)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => handleClick(showConfirmed, setShowConfirmed)}
              >
                {showConfirmed ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="teal" w="100%" onClick={handleSubmit}>
            {" "}
            Sign Up
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SignUp;
