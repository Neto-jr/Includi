
import { useEffect, useState } from "react";
import api from "../services/api";

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarUsuarios() {
            try {
                const resposta = await api.get("/usuarios");
                setUsuarios(resposta.data);
            } catch (erro) {
                console.error("Erro ao carregar usuários:", erro);
                setErro("Não foi possível carregar os usuários cadastrados.");
            } finally {
                setCarregando(false);
            }
        }

        carregarUsuarios();
    }, []);

    return (
        <section className="lista-usuarios secao" id="usuarios">
            <div className="lista-usuarios-conteudo">
                <span className="sobretitulo">Comunidade Includi</span>
                <h2>Usuários cadastrados</h2>
                <p>
                    Conheça os trabalhadores e as empresas que fazem parte da nossa rede.
                </p>

                {carregando ? (
                    <p className="mensagem">Carregando usuários...</p>
                ) : erro ? (
                    <p className="mensagem-formulario erro">{erro}</p>
                ) : usuarios.length === 0 ? (
                    <p className="mensagem">
                        Ainda não existem usuários cadastrados.
                    </p>
                ) : (
                    <>
                        <p className="total-usuarios">
                            Total de cadastros: <strong>{usuarios.length}</strong>
                        </p>

                        <div className="tabela-usuarios">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Telefone</th>
                                        <th>Tipo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {usuarios.map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.telefone || "Não informado"}</td>
                                            <td>
                                                <span
                                                    className={
                                                        usuario.tipoUsuario === "TRABALHADOR"
                                                            ? "tipo-usuario trabalhador"
                                                            : "tipo-usuario contratante"
                                                    }
                                                >
                                                    {usuario.tipoUsuario === "TRABALHADOR"
                                                        ? "Trabalhador"
                                                        : "Empresa contratante"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default ListaUsuarios;
