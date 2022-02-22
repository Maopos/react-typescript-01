import { Text, Box, Input, Flex, Stack } from "@chakra-ui/react";
import useForm from "../Hooks/useForm";

interface datosInterface {
  email: string;
  name: string;
  age: number;
}

const Formulario = () => {
  const { datos, handleChange } = useForm<datosInterface>({
    email: "",
    name: "",
    age: 35,
  });

  const { email, name, age } = datos;

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
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              type={"email"}
              variant="filled"
              color={"black"}
              placeholder="Write your email"
              size={"md"}
              value={email}
              onChange={handleChange}
            />
          </Stack>
          <Stack mt={"5"}>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              type={"text"}
              variant="filled"
              color={"black"}
              placeholder="Write your Name"
              size={"md"}
              value={name}
              onChange={handleChange}
            />
          </Stack>
          <Stack my={"5"}>
            <label htmlFor="age">Age</label>
            <Input
              name="age"
              type={"number"}
              variant="filled"
              color={"black"}
              placeholder="Write your Age"
              size={"md"}
              value={age}
              onChange={handleChange}
            />
          </Stack>
          <Text>{JSON.stringify(datos)}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Formulario;
