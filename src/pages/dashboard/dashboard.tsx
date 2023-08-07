import {
  StyledDiv,
  StyledEmptyList,
  StyledHeader,
  StyledList,
  StyledSection,
} from "./style";
import { useAuth, useTech, useUser } from "../../hooks";
import {
  AddTechModal,
  CommonButton,
  EditTechModal,
  TechCard,
} from "../../components";

export const DashboardPage = () => {
  const { addTechModal, openAddModal, editTechModal, openEditModal, logout } =
    useUser();
  const { user, userTechs } = useAuth();
  const { setItem } = useTech();

  return (
    <StyledDiv>
      <nav>
        <div className="container">
          <h1 className="title1">Tech Hub</h1>
          <CommonButton type="button" onClick={logout}>
            Sair
          </CommonButton>
        </div>
      </nav>
      <StyledHeader>
        <div className="container">
          <h2 className="title1">Olá, {user!.name}</h2>
          <p className="headline_bold">{user!.course_module}</p>
        </div>
      </StyledHeader>

      <main>
        <StyledSection>
          <div className="container">
            <div>
              <h2 className="title1">Tecnologias</h2>
              <CommonButton type="button" onClick={openAddModal}>
                Adicionar
              </CommonButton>
            </div>
            {userTechs.length > 0 ? (
              <StyledList>
                {userTechs.map((tech) => (
                  <TechCard
                    key={tech.id}
                    title={tech.title}
                    status={tech.status}
                    onClick={() => {
                      openEditModal();
                      setItem(tech);
                    }}
                  />
                ))}
              </StyledList>
            ) : (
              <StyledEmptyList>
                <h2 className="title2">
                  Você ainda não adicionou nenhuma tecnologia! <span>=(</span>
                </h2>
              </StyledEmptyList>
            )}
          </div>
        </StyledSection>
      </main>
      {addTechModal ? <AddTechModal /> : null}
      {editTechModal ? <EditTechModal /> : null}
    </StyledDiv>
  );
};
