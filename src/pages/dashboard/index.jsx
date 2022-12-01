import { useNavigate } from "react-router-dom";
import { CommonButton } from "../../components/Button/Medium";
import { StyledDiv, StyledHeader, StyledSection } from "./style";
export function DashboardPage() {

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

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
          <h2 className="title1">Olá, {""}</h2>
          <p className="headline_bold">{""}</p>
        </div>
      </StyledHeader>

      <main>
        <StyledSection>
          <div className="container">
            <h2 className="title1">Que pena! Estamos em desenvolvimento <span>:(</span></h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </div>
        </StyledSection>
      </main>
    </StyledDiv>
  );
}
