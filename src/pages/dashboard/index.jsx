import { CommonButton } from "../../components/Button/Medium";
import { StyledDiv, StyledHeader, StyledSection } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { AuthContext } from "../../contexts/AuthContext";

export function DashboardPage() {

  const { logout } = useContext(UserContext)
  const { user } = useContext(AuthContext)

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
          <h2 className="title1">Olá, {`${user.name}`}</h2>
          <p className="headline_bold">{user.course_module}</p>
        </div>
      </StyledHeader>

      <main>
        <StyledSection>
          <div className="container">
            <h2 className="title1">
              Que pena! Estamos em desenvolvimento <span>:(</span>
            </h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </StyledSection>
      </main>
    </StyledDiv>
  )
}
