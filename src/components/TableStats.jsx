import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import StatRow from "./StatRow";
import { adjustUserStat } from "../../public/stats-functions";

const TableStats = (props) => {
  const { nbaComp, inputtedStats } = props;

  // *** map the table dynamically instead of hard coding it
  return (
    <TableContainer p={5} m={1}>
      <Table size="xs">
        <Thead>
          <Tr>
            <Th fontSize='xs'>Category</Th>
            <Th fontSize='xs'>Your Stats</Th>
            <Th fontSize='xs'>Adjusted Stats</Th>
            <Th fontSize='xs'>{nbaComp.last_name}'s Stats</Th>
          </Tr>
        </Thead>
        <Tbody>
          <StatRow
            category="PPG"
            user={inputtedStats.points}
            adjusted={adjustUserStat(
              inputtedStats.points,
              inputtedStats.game_to
            )}
            nba={nbaComp.pts}
          />
          <StatRow
            category="APG"
            user={inputtedStats.assists}
            adjusted={adjustUserStat(
              inputtedStats.assists,
              inputtedStats.game_to
            )}
            nba={nbaComp.ast}
          />
          <StatRow
            category="RPG"
            user={inputtedStats.rebounds}
            adjusted={adjustUserStat(
              inputtedStats.rebounds,
              inputtedStats.game_to
            )}
            nba={nbaComp.reb}
          />
          <StatRow
            category="SPG"
            user={inputtedStats.steals}
            adjusted={inputtedStats.steals}
            nba={nbaComp.stl}
          />
          <StatRow
            category="BPG"
            user={inputtedStats.blocks}
            adjusted={inputtedStats.blocks}
            nba={nbaComp.blk}
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableStats;
