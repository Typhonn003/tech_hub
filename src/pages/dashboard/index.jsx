import { useNavigate } from "react-router-dom";
import { CommonButton } from "../../components/Button/Medium";
import { StyledDiv, StyledHeader, StyledSection } from "./style";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

export function DashboardPage() {

  const [actualUserInfo, setactualUserInfo] = useState("")

  const navigate = useNavigate();

  function logout() {

    localStorage.clear();
    navigate("/login");
  }

  const token = localStorage.getItem("user_token")

  useEffect(() => {
    
    async function userInfo() {

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {

        const response = await api.get("profile", config);
        setactualUserInfo(response.data);
      } catch (error) {

        console.log(error);
        toast.error("Não foi possível carregar os dados")
      }
    }

    userInfo();
  }, [token]);

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
          <h2 className="title1">{actualUserInfo ? `Olá, ${actualUserInfo.name}` : "Olá, usuário misterioso"}</h2>
          {actualUserInfo ? <p className="headline_bold">{actualUserInfo.course_module}</p> : null}
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
