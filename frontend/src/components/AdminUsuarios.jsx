import { useState } from "react";
import api from "../services/api";
import "./AdminUsuarios.css";

export default function AdminUsuarios() {
    const [usuario, setUsuario] = useState("admin");
    const [senha, setSenha] = useState("");
    const [credenciais, setCredenciais] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function carregarUsuarios(login = credenciais) {
        if (!login) return;

        setCarregando(true);
        setErro("");

        try {
            const resposta = await api.get("/usuarios", {
                auth: {
                    username: login.usuario,
                    password: login.senha,
                },
            });

            setUsuarios(resposta.data);
        } catch (error) {
            setErro("Não foi possível carregar os usuários.");
        } finally {
            setCarregando(false);
        }
    }

    async function entrar(evento) {
        evento.preventDefault();
        setErro("");
        setCarregando(true);

        const login = { usuario, senha };

        try {
            const resposta = await api.get("/usuarios", {
                auth: {
                    username: login.usuario,
                    password: login.senha,
                },
            });

            setCredenciais(login);
            setUsuarios(resposta.data);
        } catch (error) {
            setCredenciais(null);
            setUsuarios([]);
            setErro(
                error.response?.status === 401
                    ? "Usuário ou senha incorretos."
                    : "Não foi possível acessar o painel. Verifique se a API está funcionando."
            );
        } finally {
            setCarregando(false);
        }
    }

    function sair() {
        setCredenciais(null);
        setSenha("");
        setUsuarios([]);
        setErro("");
    }

    if (!credenciais) {
        return (
            <main className="admin-container">
                <section className="admin-card">
                    <h1>Área administrativa</h1>
                    <p>Entre com as credenciais de administrador para continuar.</p>

                    <form onSubmit={entrar} className="admin-form">
                        <label htmlFor="admin-usuario">Usuário</label>
                        <input
                            id="admin-usuario"
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            autoComplete="username"
                            required
                        />

                        <label htmlFor="admin-senha">Senha</label>
                        <input
                            id="admin-senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            autoComplete="current-password"
                            required
                        />

                        {erro && <p className="admin-erro">{erro}</p>}

                        <button type="submit" disabled={carregando}>
                            {carregando ? "Verificando..." : "Entrar"}
                        </button>
                    </form>
                </section>
            </main>
        );
    }

    return (
        <main className="admin-container">
            <section className="admin-painel">
                <header className="admin-header">
                    <div>
                        <h1>Usuários cadastrados</h1>
                        <p>Área restrita do Includi</p>
                    </div>

                    <button type="button" onClick={sair}>
                        Sair
                    </button>
                </header>

                <div className="admin-acoes">
                    <span>Total de usuários: {usuarios.length}</span>
                    <button
                        type="button"
                        onClick={() => carregarUsuarios()}
                        disabled={carregando}
                    >
                        {carregando ? "Atualizando..." : "Atualizar lista"}
                    </button>
                </div>

                {erro && <p className="admin-erro">{erro}</p>}

                {usuarios.length === 0 ? (
                    <p>Nenhum usuário cadastrado.</p>
                ) : (
                    <div className="admin-tabela-container">
                        <table className="admin-tabela">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Tipo de usuário</th>
                                </tr>
                            </thead>

                            <tbody>
                                {usuarios.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.telefone || "Não informado"}</td>
                                        <td>{item.tipoUsuario}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </main>
    );
}
