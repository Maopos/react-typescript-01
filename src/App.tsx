import "./App.css";
import { Box, Text, Flex } from "@chakra-ui/react";
import Counter from "./Components/Counter";
import Usuario from "./Components/Usuario";
import TimerPadre from "./Components/TimerPadre";
import ContadorReducer from "./Components/ContadorReducer";
import Formulario from "./Components/Formulario";
import Formulario2 from "./Components/Formulario2";

function App() {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Box
        color={"white"}
        bg={"darkcyan"}
        width={[
          "90%", // 0-30em
          null, // 30em-48em
          "90%", // 48em-62em
          "container.md", // 62em+
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
      <Counter />
      <Usuario />
      <TimerPadre />
      <ContadorReducer />
      <Formulario />
      <Formulario2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Flex>
  );
}

export default App;
