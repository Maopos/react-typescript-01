import "./App.css";
import { Box, Text, Flex } from "@chakra-ui/react";
import Counter from "./Components/Counter";
import Usuario from "./Components/Usuario";

function App() {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Box
        color={"white"}
        bg={"darkcyan"}
        width={[
          '90%', // 0-30em
          null, // 30em-48em
          '90%', // 48em-62em
          'container.md', // 62em+
        ]}
        p={"1"}
        mt={5}
        borderRadius={10}
        boxShadow={"2xl"}
      >
        <Text fontSize={"3xl"} textAlign="center">
          Typescript
        </Text>
      </Box>
      <Counter/>
      <Usuario/>
    </Flex>
  );
}

export default App;
