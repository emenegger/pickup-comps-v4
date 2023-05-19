import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainForm from "@/components/MainForm";
import React, { useEffect, useState, useContext } from "react";
import NavBar from "@/components/NavBar";
import Comparison from "@/components/Comparison";
import { UserContext } from "@/context/UserProvider";
// import { supabase } from "./api/client";
import supabase from "./api/client";
import { Heading, VStack, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputtedStats, setInputtedStats] = useState("");
  const [loading, setLoading] = useState();
  const [nbaComp, setNbaComp] = useState();
  const [dbData, setDbData] = useState();
  const { currUser, currSession } = useContext(UserContext);

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    const { data, error } = await supabase.from("games").select("*");
    try {
      setDbData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Pick Up Comps</title>
        <meta name="description" content="View Your NBA Equivalent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <VStack>
          <Heading size='md'>Find your NBA Doppleganger</Heading>
          <Text>Enter your most recent pick up stats below to find out.</Text>
          {loading ? (
            <Comparison inputtedStats={inputtedStats} nbaComp={nbaComp} />
          ) : (
            <MainForm
              setInputtedStats={setInputtedStats}
              inputtedStats={inputtedStats}
              setLoading={setLoading}
              setNbaComp={setNbaComp}
            />
          )}
        </VStack>
        {/* {dbData?.map((ele, i)=> {
          return (
            <li key={ele+1}>Data: {ele}</li>
          )
        })} */}
    </>
  );
}
