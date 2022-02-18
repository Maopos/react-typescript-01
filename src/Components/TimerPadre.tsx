import { Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import Timer from "./Timer";
import { useState } from "react";

const TimerPadre = () => {
  const [milisec, setMilisec] = useState(1000);

  return (
    <Box
      bg={"darkcyan"}
      mt={2}
      w={["90%", null, null, "container.md"]}
      borderRadius={"10"}
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="full"
        p={["0 4%", null, "0 20%"]}
      >
        <Text color={"white"} fontSize={"xl"} textAlign={"center"} p={2}>
          useEffect - useRef
        </Text>
        <Text color="white">Milisegundos: {milisec}</Text>

        <Stack direction={{ base: "column" }} spacing={4} my="10px" p={1}>
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
            onClick={() => setMilisec(1000)}
          >
            1000
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
            onClick={() => setMilisec(2000)}
          >
            2000
          </Button>
          <Timer milisec={milisec}/>
        </Stack>
      </Flex>
    </Box>
  );
};

export default TimerPadre;
