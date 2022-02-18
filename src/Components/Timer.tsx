import { Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

type TimerArgs = {
  milisec: number;
};

const Timer = ({ milisec }: TimerArgs) => {
  // Estados
  const [segundos, setSegundos] = useState(0);

  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(
      () => setSegundos((segundos) => segundos + 1),
      milisec
    );
  }, [milisec]);

  return <Text color={"white"}>Timer: {segundos}</Text>;
};

export default Timer;
