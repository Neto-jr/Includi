import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CadastroUsuario from "./components/CadastroUsuario";
import AdminUsuarios from "./components/AdminUsuarios";

const API_URL = "http://localhost:8080/api";

function App() {
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem("includi-tema") || "claro";
    } catch {
      return "claro";
    }
  });

  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  const [vagas, setVagas] = useState([]);
  const [carregandoVagas, setCarregandoVagas] = useState(true);
  const [erroVagas, setErroVagas] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;

    try {
      localStorage.setItem("includi-tema", tema);
    } catch {
      // O site continua funcionando se o armazenamento estiver indisponível.
    }
  }, [tema]);

  useEffect(() => {
    if (window.location.pathname === "/admin") {
      return;
    }

    axios
      .get(`${API_URL}/cursos`)
      .then((resposta) => {
        setCursos(Array.isArray(resposta.data) ? resposta.data : []);
      })
      .catch((error) => {
        console.error("Erro ao carregar cursos:", error);
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });

    axios
      .get(`${API_URL}/vagas`)
      .then((resposta) => {
        setVagas(Array.isArray(resposta.data) ? resposta.data : []);
      })
      .catch((error) => {
        console.error("Erro ao carregar vagas:", error);
        setErroVagas(true);
      })
      .finally(() => {
        setCarregandoVagas(false);
      });
  }, []);

  if (window.location.pathname === "/admin") {
    return <AdminUsuarios />;
  }

  const alternarTema = () => {
    setTema((atual) => (atual === "claro" ? "escuro" : "claro"));
  };

  return (
    <div className="includi">
      <header className="cabecalho">
        <a className="logo" href="#inicio" aria-label="Includi - início">
          Includi<span>.</span>
        </a>

        <nav className="menu" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#cursos">Cursos</a>
          <a href="#vagas">Vagas</a>
        </nav>

        <div className="cabecalho-acoes">
          <button
            className="botao-tema"
            type="button"
            onClick={alternarTema}
            aria-label={
              tema === "claro"
                ? "Ativar tema escuro"
                : "Ativar tema claro"
            }
            title={tema === "claro" ? "Ativar tema escuro" : "Ativar tema claro"}
          >
            <span aria-hidden="true">{tema === "claro" ? "🌙" : "☀️"}</span>
            <span className="texto-tema">
              {tema === "claro" ? "Modo escuro" : "Modo claro"}
            </span>
          </button>

          <a className="botao botao-menu" href="#vagas">
            Ver oportunidades
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-conteudo">
            <span className="etiqueta">
              <span aria-hidden="true">✦</span> Oportunidades para todos
            </span>

            <h1>
              Seu talento merece
              <span> novas oportunidades.</span>
            </h1>

            <p>
              Conectamos profissionais autônomos e adultos
              neurodivergentes a oportunidades de trabalho,
              capacitação e crescimento profissional.
            </p>

            <div className="hero-acoes">
              <a className="botao botao-principal" href="#vagas">
                Explorar oportunidades <span aria-hidden="true">↗</span>
              </a>

              <a className="botao botao-secundario" href="#cursos">
                Conhecer os cursos
              </a>
            </div>

            <div className="hero-nota">
              <span aria-hidden="true">✓</span>
              Inclusão, autonomia e trabalho digno.
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-imagem"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Profissionais colaborando em um ambiente de trabalho"
            />

            <div className="hero-card">
              <div className="icone-destaque" aria-hidden="true">
                ✦
              </div>
              <span className="hero-card-legenda">
                Seu próximo passo começa aqui
              </span>
              <h2>Talentos diferentes. Oportunidades reais.</h2>
              <p>
                Desenvolva suas habilidades, descubra caminhos
                profissionais e amplie suas possibilidades.
              </p>

              <div className="mini-etiquetas">
                <span>Capacitação</span>
                <span>Inclusão</span>
                <span>Autonomia</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sobre secao" id="sobre">
          <div className="secao-titulo">
            <span className="sobretitulo">Conheça o Includi</span>
            <h2>Uma ponte entre talentos e oportunidades</h2>
            <p>
              Queremos tornar o acesso ao trabalho mais inclusivo,
              valorizando competências, respeitando diferenças e
              incentivando o desenvolvimento profissional.
            </p>
          </div>

          <div className="beneficios">
            <article className="beneficio">
              <div className="beneficio-icone" aria-hidden="true">
                ↗
              </div>
              <h3>Trabalho e renda</h3>
              <p>
                Descubra oportunidades para desenvolver sua carreira
                e conquistar independência financeira.
              </p>
            </article>

            <article className="beneficio">
              <div className="beneficio-icone" aria-hidden="true">
                ▣
              </div>
              <h3>Aprendizado contínuo</h3>
              <p>
                Amplie seus conhecimentos e prepare-se para novos
                desafios profissionais.
              </p>
            </article>

            <article className="beneficio">
              <div className="beneficio-icone" aria-hidden="true">
                ♡
              </div>
              <h3>Inclusão de verdade</h3>
              <p>
                Incentivamos ambientes profissionais acessíveis,
                diversos e respeitosos.
              </p>
            </article>
          </div>
        </section>

        <section className="cursos secao" id="cursos">
          <div className="secao-cabecalho">
            <div>
              <span className="sobretitulo">Aprenda e evolua</span>
              <h2>Cursos de capacitação</h2>
              <p>
                Conhecimento para abrir novas portas profissionais.
              </p>
            </div>
          </div>

          {carregando ? (
            <p className="mensagem" role="status">
              Carregando cursos...
            </p>
          ) : erro ? (
            <div className="mensagem" role="alert">
              <p>Não foi possível carregar os cursos da API.</p>
              <p>Confira se o backend Java está rodando na porta 8080.</p>
            </div>
          ) : cursos.length === 0 ? (
            <div className="mensagem">
              Ainda não há cursos cadastrados. Cadastre um curso
              pela API para exibi-lo aqui.
            </div>
          ) : (
            <div className="grade-cursos">
              {cursos.map((curso) => (
                <article className="curso-card" key={curso.id}>
                  <div className="curso-icone" aria-hidden="true">
                    ▤
                  </div>

                  <span className="curso-categoria">Capacitação</span>
                  <h3>{curso.titulo}</h3>
                  <p>{curso.descricao}</p>

                  <div className="curso-rodape">
                    <span>
                      ◷ {curso.cargaHoraria} horas
                    </span>

                    {curso.urlConteudo ? (
                      <a
                        href={curso.urlConteudo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar curso ↗
                      </a>
                    ) : (
                      <span>Conteúdo em breve</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="vagas secao" id="vagas">
          <div className="vagas-conteudo">
            <span className="sobretitulo">Seu talento tem valor</span>
            <h2>Oportunidades profissionais</h2>
            <p>
              Confira as oportunidades cadastradas pelas empresas
              participantes do Includi.
            </p>
          </div>

          {carregandoVagas ? (
            <p className="mensagem" role="status">
              Carregando oportunidades...
            </p>
          ) : erroVagas ? (
            <p className="mensagem" role="alert">
              Não foi possível carregar as vagas.
              Verifique se o backend Java está funcionando.
            </p>
          ) : vagas.length === 0 ? (
            <p className="mensagem">
              Ainda não existem vagas cadastradas.
            </p>
          ) : (
            <div className="grade-cursos">
              {vagas.map((vaga) => (
                <article className="curso-card vaga-card" key={vaga.id}>
                  <div className="curso-icone" aria-hidden="true">
                    ↗
                  </div>

                  <span className="curso-categoria">
                    {vaga.status === "ABERTA"
                      ? "Oportunidade aberta"
                      : vaga.status}
                  </span>

                  <h3>{vaga.titulo}</h3>
                  <p>{vaga.descricao}</p>

                  <div className="vaga-empresa">
                    <strong>Empresa:</strong>{" "}
                    {vaga.contratante?.nome || "Não informada"}
                  </div>

                  <div className="vaga-remuneracao">
                    {vaga.remuneracao != null
                      ? Number(vaga.remuneracao).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                      : "Remuneração não informada"}
                  </div>

                  <span className="vaga-status">
                    Status: {vaga.status}
                  </span>
                </article>
              ))}
            </div>
          )}
        </section>

        <CadastroUsuario />
      </main>

      <footer className="rodape">
        <a className="logo logo-rodape" href="#inicio">
          Includi<span>.</span>
        </a>
        <p>
          Inclusão e oportunidades para um futuro profissional melhor.
        </p>
        <span>Projeto alinhado aos ODS 8 e 10 da ONU.</span>
      </footer>
    </div>
  );
}

export default App;