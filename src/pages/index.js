import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainForm from "@/components/MainForm";
import React, { useEffect, useState, useContext } from "react";
import NavBar from "@/components/NavBar";
import Comparison from "@/components/Comparison";
import { UserContext } from "@/context/UserProvider";
// import { supabase } from "./api/client";
import supabase from "./api/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputtedStats, setInputtedStats] = useState("");
  const [loading, setLoading] = useState();
  const [nbaComp, setNbaComp] = useState();
  const [dbData, setDbData] = useState();
  const { currUser, currSession } = useContext(UserContext);

  console.log('curr user', currUser)
  
  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    const { data, error } = await supabase.from("games").select("*");
    try {
      setDbData(data);
    } catch (error) {
      console.log('error', error)
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
      <NavBar>
        {loading ? (
          <Comparison inputtedStats={inputtedStats} nbaComp={nbaComp}/>
        ) : (
          <MainForm
            setInputtedStats={setInputtedStats}
            inputtedStats={inputtedStats}
            setLoading={setLoading}
            setNbaComp={setNbaComp}
          />
        )}
        {/* {dbData?.map((ele, i)=> {
          return (
            <li key={ele+1}>Data: {ele}</li>
          )
        })} */}
      </NavBar>
    </>
  );
}
