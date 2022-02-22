import { useState, ChangeEvent } from "react";

const useForm = <T extends Object>(initState: T) => {
  const [datos, setDatos] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };
  return { datos, handleChange, ...datos };
};

export default useForm;
