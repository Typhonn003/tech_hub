import { StyledTechCard } from "./style";

export function TechCard({ title, status }) {

  return (
    <StyledTechCard>
      <h2 className="title2">{title}</h2>
      <p>{status}</p>
    </StyledTechCard>
  );
}
