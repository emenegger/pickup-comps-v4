// import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/context/UserProvider";
import '../styles/TimeSeries.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}
