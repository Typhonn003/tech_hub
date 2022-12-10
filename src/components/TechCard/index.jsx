import { StyledTechCard } from "./style";

export function TechCard({ title, status, onClick }) {

  return (
    <StyledTechCard onClick={onClick}>
      <h2 className="title2">{title}</h2>
      <p>{status}</p>
    </StyledTechCard>
  );
}
