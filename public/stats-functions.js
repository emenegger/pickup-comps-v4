export const adjustUserStat = (stat, gameTo) => {
  const leagueAverageTeamPoints = 110.6;
  const factor = (leagueAverageTeamPoints / Number(gameTo)) * (30 / 48);
  return Math.floor(Number(stat) * factor);
};

export const adjustAllUserStats = (inputStats) => {
  const output = {};
  for (const key in inputStats) {
    output[key] = adjustUserStat(inputStats[key], inputStats.game_to);
  }
  return output;
};

export const playerMatchFunc = (inputtedStats, apiData) => {
  const bestMatch = {
    simalarityTotal: Infinity,
    _id: null,
    pts: null,
    ast: null,
    reb: null,
    stl: null,
    blk: null,
    first_name: null,
    last_name: null,
  };

  for (const playerObj of apiData) {
    if (playerObj) {
      const diff = (a, b) => Math.abs(a - b);
      // refactor this!!!
      const simalarityTotal =
        diff(adjustUserStat(inputtedStats.points, inputtedStats.game_to), playerObj.pts) +
        diff(adjustUserStat(inputtedStats.assists, inputtedStats.game_to), playerObj.ast) +
        diff(adjustUserStat(inputtedStats.rebounds, inputtedStats.game_to), playerObj.reb);
      // console.log(playerObj.player_id, simalarityTotal);
      if (simalarityTotal < bestMatch.simalarityTotal) {
        bestMatch.simalarityTotal = simalarityTotal;
        Object.assign(bestMatch, playerObj);
      }
    }
  }
  return bestMatch;
};
