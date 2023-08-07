import { useContext } from "react";
import { TechContext } from "../contexts";

export const useTech = () => {
  const techContext = useContext(TechContext);
  return techContext;
};
