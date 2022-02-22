import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { type } from "os";
import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "reset" }
  | { type: "custom", payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "reset":
      return {
        ...state,
        contador: (state.contador = 0),
      };

    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

const ContadorReducer = () => {
  // useReducer
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <Box
      color={"white"}
      bg={"darkcyan"}
      width={[
        "90%", // 0-30em
        null, // 30em-48em
        null, // 48em-62em
        "container.md", // 62em+
      ]}
      p={"5"}
      mt={2}
      mx={"5"}
      borderRadius={10}
      boxShadow={"2xl"}
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="full"
        p={["0 4%", null, "0 20%"]}
      >
        <Text fontSize={"xl"} textAlign="center" fontWeight={"normal"}>
          Counter useReducer
        </Text>
        <Text fontSize={"xl"} textAlign="center" fontWeight={"thin"}>
          Valor: {contadorState.contador}
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mt="20px"
          w={["100%", null, "auto"]}
        >
          <Button
            variant="outline"
            size={"sm"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={10}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
            onClick={() => dispatch({ type: "incrementar" })}
          >
            + 1
          </Button>
          <Button
            variant="outline"
            size={"sm"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={10}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
            onClick={() => dispatch({ type: "decrementar" })}
          >
            - 1
          </Button>
          <Button
            variant="outline"
            size={"sm"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={10}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>
          <Button
            variant="outline"
            size={"sm"}
            textTransform={"uppercase"}
            fontWeight={"light"}
            color="white"
            borderRadius={10}
            letterSpacing={"1px"}
            _hover={{
              color: "black",
              bg: "white",
            }}
            onClick={() => dispatch({ type: "custom", payload: 100 })}
          >
            100
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ContadorReducer;
