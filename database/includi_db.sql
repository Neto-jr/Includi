-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/10/2026 às 02:30
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `includi_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cursos`
--

CREATE TABLE `cursos` (
  `id` bigint(20) NOT NULL,
  `carga_horaria` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `url_conteudo` varchar(500) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `cursos`
--

INSERT INTO `cursos` (`id`, `carga_horaria`, `descricao`, `titulo`, `url_conteudo`) VALUES
(3, 20, 'Desenvolvimento da comunicação, trabalho em equipe, relacionamento interpessoal e postura no ambiente profissional.', 'Comunicação Profissional', 'https://exemplo.com/curso-comunicacao'),
(4, 30, 'Introdução ao uso do computador, ferramentas de escritório, organização de arquivos, internet e e-mail profissional.', 'Informática para o Trabalho', 'https://exemplo.com/curso-informatica'),
(5, 12, 'Como elaborar um currículo, apresentar competências, preparar-se para entrevistas e identificar oportunidades profissionais.', 'Preparação para Entrevistas', 'https://exemplo.com/curso-entrevistas');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `tipo_usuario` enum('CONTRATANTE','TRABALHADOR') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nome`, `telefone`, `tipo_usuario`) VALUES
(2, 'empresa.includi@example.com', 'Empresa Includi Teste', '16999990000', 'CONTRATANTE'),
(5, 'contato@inovatecnologia.com.br', 'Inova Tecnologia Ltda', '16999991001', 'CONTRATANTE'),
(6, 'contato@conectaservicos.com.br', 'Conecta Serviços Profissionais', '16999991002', 'CONTRATANTE'),
(7, 'maria.teste2026@example.com', 'Maria Teste', '16999990000', 'TRABALHADOR'),
(8, 'jocks@gmail.com', 'Jocks', '1198406064.6', 'TRABALHADOR'),
(9, 'logtrans@gmail.com', 'Trans Log', '16987876565', 'CONTRATANTE'),
(10, 'viniclay@gmail.com', 'Vini Clay', '16987874545', 'TRABALHADOR');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vagas`
--

CREATE TABLE `vagas` (
  `id` bigint(20) NOT NULL,
  `descricao` text NOT NULL,
  `remuneracao` decimal(10,2) NOT NULL,
  `status` enum('ABERTA','CONCLUIDA','PREENCHIDA') NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `contratante_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `vagas`
--

INSERT INTO `vagas` (`id`, `descricao`, `remuneracao`, `status`, `titulo`, `contratante_id`) VALUES
(1, 'Organização de documentos e apoio administrativo.', 2200.00, 'ABERTA', 'Assistente Administrativo', 2),
(2, 'Organização de documentos, atualização de planilhas, atendimento e apoio às rotinas administrativas.', 2200.00, 'ABERTA', 'Assistente Administrativo', 5),
(3, 'Atendimento ao cliente por canais digitais, registro de solicitações e orientação sobre serviços.', 1900.00, 'ABERTA', 'Atendente de Suporte', 5),
(4, 'Cadastro e conferência de informações, atualização de registros e organização de dados em sistema.', 1800.00, 'ABERTA', 'Auxiliar de Cadastro', 6),
(5, 'Apoio na produção de publicações, organização de conteúdo e atualização de redes sociais da empresa.', 2000.00, 'ABERTA', 'Assistente de Conteúdo Digital', 6);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKkfsp0s1tflm1cwlj8idhqsad0` (`email`);

--
-- Índices de tabela `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcuegpjelhayaa2g2wwueunp7c` (`contratante_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `vagas`
--
ALTER TABLE `vagas`
  ADD CONSTRAINT `FKcuegpjelhayaa2g2wwueunp7c` FOREIGN KEY (`contratante_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
