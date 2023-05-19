import React from "react";
import {
  InputGroup,
  useColorModeValue,
  InputRightAddon,
  Input,
  Button,
  CircularProgress,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import Inputs from "./Inputs";
import { formItems } from "../../public/formItems";
import supabase from "@/pages/api/client";
import {
  adjustUserStat,
  adjustAllUserStats,
  playerMatchFunc,
} from "../../public/stats-functions";

const MainForm = (props) => {
  const { setInputtedStats, inputtedStats, setLoading, setNbaComp } = props;

  const handleUserInput = async (e) => {
    e.preventDefault();
    setInputtedStats({
      ...inputtedStats,
      [e.target.id]: e.target.value,
      date: new Date().toLocaleDateString(),
    });
  };

  const inputs = formItems.map((ele, i) => {
    return (
      <Inputs
        ele={ele}
        key={ele + i}
        setInputtedStats={setInputtedStats}
        inputtedStats={inputtedStats}
        handleUserInput={handleUserInput}
      />
    );
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // adjust stats to be equivalent to NBA
    const {points, assists, rebounds, steals, blocks} = adjustAllUserStats(
      inputtedStats,
      inputtedStats.game_to
    );

    // fetch data from database
    const data = await fetch("api/nba-players");
    const nbaPlayerData = await data.json();
    // find a match between the inputted stats and nba player data
    const matchedNBAplayer = playerMatchFunc(inputtedStats, nbaPlayerData);
    setNbaComp(matchedNBAplayer);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // insert user data and matchedNBA player into database
    const { error } = await supabase.from("games").insert({
      user_id: user.id,
      a_ppg: points,
      a_apg: assists,
      a_rpg: rebounds,
      a_spg: steals,
      a_bpg: blocks,
      r_ppg: inputtedStats.points,
      r_apg: inputtedStats.assists,
      r_rpg: inputtedStats.rebounds,
      r_bpg: inputtedStats.blocks,
      r_spg: inputtedStats.steals,
      nba_player_id: matchedNBAplayer._id,
    });
    setLoading(true);
  };

  return (
    <Flex
      width="60vh"
      direction="column"
      justify="center"
      padding={4}
    >
      <FormControl>{inputs}</FormControl>
      <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
        Submit Stats
      </Button>
    </Flex>
  );
};

export default MainForm;
