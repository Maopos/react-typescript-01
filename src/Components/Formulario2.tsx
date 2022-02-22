import { Text, Box, Input, Flex, Stack } from "@chakra-ui/react";
import useForm from "../Hooks/useForm";

interface datosInterface {
  enterprice: string;
  position: string;
}

const Formulario2 = () => {
  // useForm
  const { datos, enterprice, position, handleChange } = useForm<datosInterface>(
    {
      enterprice: "",
      position: "",
    }
  );

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
      <Flex direction="column" alignItems="center" justify="center">
        <Text fontSize={"xl"} textAlign="center" fontWeight={"normal"}>
          Custom Hooks
        </Text>
        <Flex direction={"column"} w={"80%"}>
          <Stack>
            <label htmlFor="enterprice">Enterprice</label>
            <Input
              name="enterprice"
              type={"text"}
              variant="filled"
              color={"black"}
              placeholder="Write your enterprice"
              size={"md"}
              value={enterprice}
              onChange={handleChange}
            />
          </Stack>
          <Stack my={"5"}>
            <label htmlFor="position">Position</label>
            <Input
              name="position"
              type={"text"}
              variant="filled"
              color={"black"}
              placeholder="Write your position"
              size={"md"}
              value={position}
              onChange={handleChange}
            />
          </Stack>
          <Text>{JSON.stringify(datos)}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Formulario2;
