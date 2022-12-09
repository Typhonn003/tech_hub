import { CommonButton } from "../../components/Button/Medium";
import { StyledDiv, StyledEmptyList, StyledHeader, StyledList, StyledSection } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";
import { TechCard } from "../../components/TechCard";
import { AddTechModal } from "../../components/Modal/AddTech";

export function DashboardPage() {

  const { addTechModal, openAddModal, logout } = useContext(UserContext)
  const { user: { name, course_module }, userTechs } = useContext(AuthContext)

  return (
    <StyledDiv>
      <nav>
        <div className="container">
          <h1 className="title1">Kenzie Hub</h1>
          <CommonButton onClick={logout}>Sair</CommonButton>
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
              <CommonButton onClick={openAddModal}>Adicionar</CommonButton>
            </div>          
            {userTechs.length > 0 ? (
              <StyledList>
                {userTechs.map(({ id, title, status }) => (
                  <TechCard key={id} title={title} status={status} />
                ))}
              </StyledList>
            ) : (
              <StyledEmptyList>
                <h2 className="title2">
                  Você ainda não adicionou nenhuma tecnologia
                </h2>
              </StyledEmptyList>
            )}
          </div>
        </StyledSection>
      </main>
      {addTechModal ? <AddTechModal /> : null}
      {/* {editTechModal ? <EditTechModal /> : null} */}
    </StyledDiv>
  )
}
