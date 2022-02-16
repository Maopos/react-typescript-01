import { Text, Box, Button, Stack, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "abc123",
      name: "Mauricio Posada",
    });
  };

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
          Usuario
        </Text>
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
            onClick={login}
          >
            Enviar
          </Button>
          <Text color={"white"}>
            {user ? JSON.stringify(user) : "No hay un usuario aún..."}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Usuario;
