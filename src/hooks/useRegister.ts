import { useContext } from "react";
import { RegisterContext } from "../contexts";

export const useRegister = () => {
  const registerContext = useContext(RegisterContext);
  return registerContext;
};
