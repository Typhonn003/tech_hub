import { CommonButton } from "../../components/Button/Medium";
import { StyledDiv, StyledHeader, StyledList, StyledSection } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import { TechCard } from "../../components/TechCard";
import { AddTechModal } from "../../components/Modal/AddTech";

export function DashboardPage() {

  const { techModal, openModal, logout } = useContext(UserContext)
  const { user: { name, course_module, techs } } = useContext(AuthContext)

  return (
    <StyledDiv>
      <nav>
        <div className="container">
          <h1 className="title1">Kenzie Hub</h1>
          <CommonButton onClick={() => logout()}>Sair</CommonButton>
        </div>
      </nav>
      <StyledHeader>
        <div className="container">
          <h2 className="title1">Olá, {name}</h2>
          <p className="headline_bold">{course_module}</p>
        </div>
      </StyledHeader>

      <main>
        <StyledSection>
          <div className="container">
            <div>
              <h2 className="title1">Tecnologias</h2>
              <CommonButton onClick={openModal}>Adicionar</CommonButton>
            </div>

            <StyledList>
              {techs.map(({id, title, status}) => <TechCard key={id} title={title} status={status}/>)}
            </StyledList>
          </div>
        </StyledSection>
      </main>
      {techModal ? <AddTechModal /> : null}
    </StyledDiv>
  )
}
