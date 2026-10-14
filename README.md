<<<<<<< HEAD
Boa, Neto! 👊  
Seu `README.md` já está ótimo, mas dá pra deixá-lo mais visual e atrativo usando ícones (via emojis). Isso ajuda a destacar seções e tecnologias. Aqui vai uma versão melhorada:

```markdown
=======
>>>>>>> 5fae3896dda0c28c73af2f22b33bc6bd36fd878c
# 🚀 Includi

Plataforma que busca conectar trabalhadores autônomos de baixa renda e pessoas neurodivergentes 
maiores de 18 anos a oportunidades profissionais, além de oferecer acesso à capacitação.

## 🎯 Objetivo

Promover inclusão profissional, trabalho digno e redução das desigualdades, em alinhamento aos 
**ODS 8 — Trabalho Decente e Crescimento Econômico** e  
**ODS 10 — Redução das Desigualdades**.

## 🛠️ Tecnologias utilizadas

- 🎨 **Frontend:** React, JavaScript, Vite, CSS e Axios  
- ⚙️ **Backend/API:** Java com Spring Boot  
- 🗄️ **Banco de dados:** MySQL  
- 💻 **Ambiente de desenvolvimento:** Visual Studio Code e XAMPP (MySQL)  
- 🔗 **Integração:** API REST para comunicação entre frontend e backend  

> Tecnologias centrais exigidas: **ReactJS, Java (backend/API) e MySQL/PostgreSQL**.  
Este projeto utiliza **MySQL**.

## ✨ Funcionalidades implementadas

- 🏠 Página inicial com apresentação do projeto  
- 📚 Exibição de cursos de capacitação cadastrados na API  
- 💼 Exibição de vagas e oportunidades profissionais  
- 📝 Cadastro de usuários  
- 🔐 Área administrativa com autenticação para consultar usuários cadastrados  
- 🔗 Integração entre frontend, backend e banco de dados  

## ⚡ Como executar localmente

### 1️⃣ Banco de dados
- Inicie o MySQL pelo XAMPP  
- Confirme que o banco `includi_db` existe  
- Confira credenciais e URL de conexão em:  
  `backend/src/main/resources/application.properties`

### 2️⃣ Backend
```powershell
cd "C:\Users\jrn\Desktop\Projeto Includi\backend"
.\mvnw.cmd spring-boot:run
```
➡️ API disponível em: `http://localhost:8080`

### 3️⃣ Frontend
```powershell
cd "C:\Users\jrn\Desktop\Projeto Includi\frontend"
npm install
npm run dev
```
➡️ Frontend disponível em: `http://localhost:5173`

- Página inicial: `http://localhost:5173/`  
- Área administrativa: `http://localhost:5173/admin`  

⚠️ Mantenha **backend** e **frontend** rodando em terminais separados.

## 🤖 Correções e apoio de IA

O ChatGPT foi utilizado como ferramenta de apoio ao desenvolvimento e à resolução de problemas:
- 🔧 Correção de importação do serviço Axios (`services`)  
- 🔗 Integração entre React e API Spring Boot  
- 🔒 Ajustes de CORS e autenticação na área administrativa  
- 🖥️ Organização da tela administrativa e correção de erros de renderização  

> O uso de IA serviu como apoio; a revisão e responsabilidade pelo código final permanecem com a equipe.

## 🔐 Segurança

A configuração atual é voltada ao ambiente de desenvolvimento.  
Antes de publicar em produção, é necessário:
- Definir credenciais fortes e únicas  
- Utilizar HTTPS  
- Revisar autenticação e autorização  

## 📌 Status

Projeto acadêmico em desenvolvimento.
