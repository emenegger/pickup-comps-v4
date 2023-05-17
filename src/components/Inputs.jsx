import React from "react";
import { InputGroup, InputRightAddon, Input } from "@chakra-ui/react";


const Inputs = ({ele, handleUserInput}) => {
  // const { ele, setInputtedStats, inputtedStats, handleUserInput } = props;
  // console.log(props)
  
  return (
    <InputGroup>
      <Input
        variant="outline"
        placeholder={ele[0]}
        id={ele[0]}
        // background={inputBackground}
        onChange={handleUserInput}
      />
      <InputRightAddon children={ele[0]} width="22%" />
    </InputGroup>
  );
};

export default Inputs;
