import { useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Flex,
  VStack,
  Heading
} from "@chakra-ui/react";
import supabase from "../pages/api/client";
import { UserContext } from "@/context/UserProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currUser, currSession, setCurrUser, setCurrSession } =  useContext(UserContext);
  const router = useRouter()
  const toast = useToast();

  const handleSignIn = async () => {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({
        title: "Sign Up Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      console.log("user", user);
      console.log("session", session);
      // set the session and the user
      setCurrSession(session);
      setCurrUser(user);
      router.push("/");
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
          <Heading>Sign Into Pickup Comps</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button onClick={handleSignIn}>Sign In</Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SignIn;
