import {
  Td,
  Tr
} from '@chakra-ui/react'

import React from 'react'

const StatRow = (props) => {
  const {category, user, adjusted, nba} = props;

  return (
    <Tr>
      <Td fontSize='sm'>{category}</Td>
      <Td fontSize='sm'>{user}</Td>
      <Td fontSize='sm'>{adjusted}</Td>
      <Td fontSize='sm'>{nba}</Td>
    </Tr>
  )
}

export default StatRow