import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const TableDetails = (props) => {

  const {playerDetails} = props;
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Position</Th>
            <Th>Team</Th>
            <Th>Height</Th>
            <Th>Weight</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{playerDetails.position}</Td>
            <Td>{playerDetails.team.full_name}</Td>
            <Td>{playerDetails.height_feet}' {playerDetails.height_inches}"</Td>
            <Td>{playerDetails.weight_pounds}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableDetails;
