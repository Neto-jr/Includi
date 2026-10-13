# Includi

Plataforma que busca conectar trabalhadores autônomos de baixa renda e pessoas neurodivergentes 
maiores de 18 anos a oportunidades profissionais, além de oferecer acesso à capacitação.

## Objetivo

Promover inclusão profissional, trabalho digno e redução das desigualdades, em alinhamento aos 
Objetivos de Desenvolvimento Sustentável (ODS) 8 — Trabalho Decente e Crescimento Econômico — e 
10 — Redução das Desigualdades.

## Tecnologias utilizadas

- **Frontend:** React, JavaScript, Vite, CSS e Axios.
- **Backend/API:** Java com Spring Boot.
- **Banco de dados:** MySQL.
- **Ambiente de desenvolvimento:** Visual Studio Code e XAMPP (MySQL).
- **Integração:** API REST para comunicação entre frontend e backend.

As tecnologias centrais exigidas pelo trabalho são 
**ReactJS, Java para o backend/API e MySQL ou PostgreSQL**. Este projeto utiliza MySQL.

## Funcionalidades implementadas

- Página inicial com apresentação do projeto.
- Exibição de cursos de capacitação cadastrados na API.
- Exibição de vagas e oportunidades profissionais.
- Cadastro de usuários.
- Área administrativa com autenticação para consultar usuários cadastrados.
- Integração entre frontend, backend e banco de dados.

## Como executar localmente

### 1. Banco de dados

Inicie o MySQL pelo XAMPP e confirme que o banco `includi_db` existe. Confira as credenciais 
e a URL de conexão em `backend/src/main/resources/application.properties`.

### 2. Backend

No terminal do VS Code, execute:

```powershell
cd "C:\Users\JOCA\Desktop\Fundação FAT\Projeto Includi\backend"
.\mvnw.cmd spring-boot:run
```

A API inicia normalmente em `http://localhost:8080`.

### 3. Frontend

Abra outro terminal e execute:

```powershell
cd "C:\Users\JOCA\Desktop\Fundação FAT\Projeto Includi\frontend"
npm install
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`.

- Página inicial: `http://localhost:5173/`
- Área administrativa: `http://localhost:5173/admin`

Mantenha o backend e o frontend em execução em terminais separados.

## Correções e apoio de IA (ChatGPT)

O ChatGPT foi utilizado como ferramenta de apoio ao desenvolvimento e à resolução de problemas, incluindo:

- Orientação para corrigir o caminho de importação do serviço Axios (`services`).
- Apoio na integração entre frontend React e API Spring Boot.
- Ajustes na configuração de acesso à API e CORS.
- Orientação para restringir a consulta da lista de usuários à área administrativa.
- Apoio na organização da tela administrativa e na identificação de possíveis erros de renderização.

As sugestões foram aplicadas e testadas durante o desenvolvimento. 
O uso de IA serviu como apoio; a revisão, a validação e a responsabilidade pelo código final permanecem 
com a equipe do projeto.

## Segurança — observação

A configuração de autenticação atual é voltada ao ambiente de desenvolvimento. 
Antes de publicar o sistema em produção, é necessário configurar credenciais fortes e únicas, 
utilizar HTTPS e revisar o mecanismo de autenticação e autorização.

## Status

Projeto acadêmico em desenvolvimento.

