import { StyledTechCard } from "./style";

interface TechCardProps {
  title: string;
  status: string;
  onClick: () => void;
}

export const TechCard = ({ title, status, onClick }: TechCardProps) => {
  return (
    <StyledTechCard onClick={onClick}>
      <h2 className="title2">{title}</h2>
      <p>{status}</p>
    </StyledTechCard>
  );
};
