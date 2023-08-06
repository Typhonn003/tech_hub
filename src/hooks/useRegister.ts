import { useContext } from "react";
import { RegisterContext } from "../contexts";

export const useRegister = () => {
  const authContext = useContext(RegisterContext);
  return authContext;
};
