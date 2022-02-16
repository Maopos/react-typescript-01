import { Text, Box, Button, Stack, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
  // Estado
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <Box
      color={"white"}
      bg={"darkcyan"}
      width={[
        '90%', // 0-30em
        null, // 30em-48em
        '90%', // 48em-62em
        'container.md', // 62em+
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
          Counter
        </Text>
        <Text fontSize={"xl"} textAlign="center" fontWeight={"thin"}>
          Valor: {counter}
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
            onClick={() => incrementar()}
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
            onClick={() => incrementar(2)}
          >
            + 2
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
            onClick={() => setCounter(0)}
          >
            Reset
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Counter;
