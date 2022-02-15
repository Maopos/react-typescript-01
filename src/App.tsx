import "./App.css";
import { Box, Text, Flex } from "@chakra-ui/react";
import Counter from "./Components/Counter";

function App() {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Box
        color={"white"}
        bg={"darkcyan"}
        w={"container.md"}
        p={"1"}
        mt={5}
        borderRadius={10}
        boxShadow={"2xl"}
      >
        <Text fontSize={"3xl"} textAlign="center">
          Typescript
        </Text>
      </Box>
      <Counter></Counter>
    </Flex>
  );
}

export default App;
