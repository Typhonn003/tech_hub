import { useContext } from "react";
import { UserContext } from "../contexts";

export const useUser = () => {
  const userContext = useContext(UserContext);
  return userContext;
};
