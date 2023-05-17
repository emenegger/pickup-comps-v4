import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Progress,
  CardHeader,
  Flex,
} from "@chakra-ui/react";
import TableDetails from "./TableDetails";
import TableStats from "./TableStats";
import { BiLike, BiChat, BiShare, BiDotsVerticalRounded } from "react-icons/bi";


const Comparison = ({ inputtedStats, nbaComp } ) => {
  const { date } = inputtedStats;
  const { imgSrc, first_name, last_name, simalarityTotal} = nbaComp;

  return (
    <Card maxW='md'>
        <CardHeader>
          <Flex>
            <Text size="xs" as="i">
              Pick Up Game on <b>{date}</b>
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Image src={imgSrc} alt="player name" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center">
              {first_name} {last_name}
            </Heading>
          </Stack>
          <TableDetails playerDetails={nbaComp} />
          <Divider />
          <Stack spacing={5} m={4}>
            <Heading size="sm" textAlign="center">
              Match Percentage
            </Heading>
            <Progress
              colorScheme="green"
              height="32px"
              value={100 - simalarityTotal * 2}
              display="true"
            />
            {/* <Text>{100 - nbaComp.simalarityTotal * 2}%</Text> */}
          </Stack>
        </CardBody>
        <Divider />
        <TableStats nbaComp={nbaComp} inputtedStats={inputtedStats}/>
        {/* <BarChartContainer /> */}
        <CardFooter>
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
  );
};

export default Comparison;
