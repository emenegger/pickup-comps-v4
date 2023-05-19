// import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/context/UserProvider";
import '../styles/TimeSeries.css'
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <NavBar />
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}
