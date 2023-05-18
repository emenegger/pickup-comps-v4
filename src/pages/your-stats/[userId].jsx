import React from "react";
import supabase from "../api/client";
import { useRouter } from "next/router";
import {
  Container,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  VStack,
  Heading,
  Box,
  Center,
  Divider,
} from "@chakra-ui/react";
import {
  generateReadableTitle,
  generateOneWordTitle,
} from "../../../utils/helpers";
import Head from "next/head";
// access user's stats based on their

const YourStats = ({ games }) => {
  console.log("games", games);
  const router = useRouter();
  const { userId } = router.query;

  // create average for each stat
  const average = (category) => {
    const total = games.reduce((acc, game) => acc + game[category], 0);
    const totalNonNullGames = games.filter(
      (game) => game[category] !== null
    ).length;
    const average = total / totalNonNullGames;
    return average;
  };

  const filterKeys = (str) => {
    return Object.keys(games[0]).filter((key) => key.slice(0, 2) === str);
  };

  const adjustedKeys = filterKeys("a_");
  const rawKeys = filterKeys("r_");

  // function filterObjectsByKeys(games, adjustedKeys) {
  //   return games.map(game => {
  //     const filteredObject = {};

  //     adjustedKeys.forEach(key => {
  //       if (game.hasOwnProperty(key)) {
  //         filteredObject[key] = game[key];
  //       }
  //     });

  //     return filteredObject;
  //   });
  // }

  // console.log(filterObjectsByKeys(games, adjustedKeys));

  // const statDisplay = adjustedKeys.map((key) => {
  //   return (
  //     <Stat>
  //       <StatLabel>{generateOneWordTitle(key)}</StatLabel>
  //       <StatNumber>{Number(average(key)).toFixed(1)}</StatNumber>
  //     </Stat>
  //   );
  // });

  const statDisplay = (arr) => {
    return arr.map((key) => {
      return (
        <Stat>
          <StatLabel>{generateOneWordTitle(key)}</StatLabel>
          <StatNumber>{Number(average(key)).toFixed(1)}</StatNumber>
        </Stat>
      );
    });
  };

  return (
    <Flex justify="center" align="center" direction="column" p={5}>
      <Heading size="lg" p={5}>Your Raw Averages</Heading>
      <StatGroup width={700}>{statDisplay(rawKeys)}</StatGroup>
      <Divider m={10}/>
      <Heading size="lg" p={5}>Your Adjusted Averages</Heading>
      <StatGroup width={700}>{statDisplay(adjustedKeys)}</StatGroup>
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { userId } = params;
  console.log(params, userId);

  const { data, error } = await supabase
    .from("games")
    .select()
    .eq("user_id", userId);

  if (error || !data) {
    console.log(error);
  }

  return {
    props: {
      games: data,
    },
  };
}

export default YourStats;