import { useState } from "react";
import api from "../services/api";
//import axios from "axios";

function CadastroUsuario() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        telefone: "",
        tipoUsuario: "TRABALHADOR",
    });

    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);

    function atualizarCampo(evento) {
        const { name, value } = evento.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value,
        }));
    }

    async function cadastrarUsuario(evento) {
        evento.preventDefault();
        setCarregando(true);
        setMensagem("");
        setSucesso(false);

        try {
            const resposta = await api.post("/usuarios", formulario);

            setMensagem(
                `Cadastro realizado com sucesso! Número do usuário: ${resposta.data.id}`
            );
            setSucesso(true);

            setFormulario({
                nome: "",
                email: "",
                telefone: "",
                tipoUsuario: "TRABALHADOR",
            });

        } catch (erro) {
            console.error("Erro ao cadastrar usuário:", erro);

            if (erro.response) {
                console.error("Status HTTP:", erro.response.status);
                console.error("Resposta da API:", erro.response.data);

                setMensagem(
                    `Erro ${erro.response.status}: ${typeof erro.response.data === "string"
                        ? erro.response.data
                        : JSON.stringify(erro.response.data)
                    }`
                );
            } else {
                setMensagem(
                    "Não foi possível conectar à API. Verifique o endereço e a configuração de CORS."
                );
            }
        } finally {
            setCarregando(false);
        }

    }

    return (
        <section className="cadastro secao" id="cadastro">
            <div className="cadastro-conteudo">
                <span className="sobretitulo">Faça parte do Includi</span>

                <h2>Crie sua conta</h2>

                <p>
                    Cadastre-se para fazer parte de uma rede que valoriza
                    talentos, inclusão e oportunidades profissionais.
                </p>

                <form className="formulario" onSubmit={cadastrarUsuario}>
                    <label htmlFor="nome">Nome completo ou nome da empresa</label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formulario.nome}
                        onChange={atualizarCampo}
                        maxLength={100}
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formulario.email}
                        onChange={atualizarCampo}
                        maxLength={150}
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="telefone">Telefone</label>
                    <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formulario.telefone}
                        onChange={atualizarCampo}
                        maxLength={20}
                        autoComplete="tel"
                    />

                    <label htmlFor="tipoUsuario">Tipo de cadastro</label>
                    <select
                        id="tipoUsuario"
                        name="tipoUsuario"
                        value={formulario.tipoUsuario}
                        onChange={atualizarCampo}
                        required
                    >
                        <option value="TRABALHADOR">
                            Trabalhador
                        </option>
                        <option value="CONTRATANTE">
                            Empresa contratante
                        </option>
                    </select>

                    <button
                        className="botao botao-principal botao-cadastro"
                        type="submit"
                        disabled={carregando}
                    >
                        {carregando ? "Cadastrando..." : "Criar cadastro"}
                    </button>

                    {mensagem && (
                        <p
                            className={
                                sucesso
                                    ? "mensagem-formulario sucesso"
                                    : "mensagem-formulario erro"
                            }
                            role="status"
                        >
                            {mensagem}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default CadastroUsuario;
