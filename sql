-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 22-Jun-2018 às 00:04
-- Versão do servidor: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistemaveterinario`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alergia`
--

CREATE TABLE `alergia` (
  `cod_alergia` int(11) NOT NULL,
  `data_diagnostico` date DEFAULT NULL,
  `causa` varchar(45) DEFAULT NULL,
  `sintomas` varchar(45) DEFAULT NULL,
  `tratamento` varchar(45) DEFAULT NULL,
  `gravidade` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `alergia`
--

INSERT INTO `alergia` (`cod_alergia`, `data_diagnostico`, `causa`, `sintomas`, `tratamento`, `gravidade`, `observacao`, `cod_animal`) VALUES
(1, '2018-06-18', 'Alergia a Detergente', 'Espirros', 'Remédio', 'Leve', 'Foi ao Veterinário', 11),
(2, '2018-06-08', 'Alergia a Tapete', 'Espirros', 'Remédio', 'Grave', 'Foi ao veterinário', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `animal`
--

CREATE TABLE `animal` (
  `cod_animal` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `nascimento` varchar(45) DEFAULT NULL,
  `raca` varchar(45) DEFAULT NULL,
  `condicao` varchar(45) DEFAULT NULL,
  `cor` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_dono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `animal`
--

INSERT INTO `animal` (`cod_animal`, `nome`, `tipo`, `sexo`, `nascimento`, `raca`, `condicao`, `cor`, `observacao`, `cod_dono`) VALUES
(1, 'rex', 'cao', 'macho', '12/18/18', 'poddle', NULL, 'branco', NULL, 10),
(2, 'rex', 'cao', 'macho', '12/18/18', 'poddle', NULL, 'branco', NULL, 9),
(3, 'reox', 'cao', 'macho', '12/18/18', 'poddle', NULL, 'branco', NULL, 10),
(4, 'Rex', 'cachorro', NULL, '1996-09-26', 'vira-lata', NULL, NULL, NULL, 28),
(9, 'Rex', 'cachorro', NULL, '1996-09-26', 'vira', NULL, NULL, NULL, 29),
(10, 'joel', 'salve', NULL, '4545-05-04', 'odskodsa', NULL, NULL, NULL, 9),
(11, 'Dino', 'Cachorro', 'Masculino', '11/02/1997', 'Poodle', NULL, 'Preto', NULL, 28),
(12, 'Maria', 'Cachorro', 'Feminino', '13/04/1991', 'Beagle', NULL, 'Branca', NULL, 28);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cirurgia`
--

CREATE TABLE `cirurgia` (
  `cod_cirurgia` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `data` varchar(45) DEFAULT NULL,
  `complicacoes` varchar(45) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `cuidados` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cirurgia`
--

INSERT INTO `cirurgia` (`cod_cirurgia`, `nome`, `data`, `complicacoes`, `valor`, `cuidados`, `observacao`, `cod_animal`) VALUES
(1, 'Cirurgia Nasal', '22/02/2018', NULL, 200, 'Remédio por 1 mês', 'Foi ao Veterinário', 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `consulta`
--

CREATE TABLE `consulta` (
  `cod_consulta` int(11) NOT NULL,
  `motivo` varchar(45) DEFAULT NULL,
  `data_ida` date DEFAULT NULL,
  `data_volta` date DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `diagnostico` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `consulta`
--

INSERT INTO `consulta` (`cod_consulta`, `motivo`, `data_ida`, `data_volta`, `valor`, `diagnostico`, `observacao`, `cod_animal`) VALUES
(2, 'teste motivo', '1996-09-26', '1997-09-26', 1234, 'teste diagnostico', 'teste obs', 1),
(3, 'teste motivo 2', '1515-05-04', '1515-12-15', 1400, 'teste diag 2', 'ah sim ok', 1),
(4, 'motivo teste 3', '5255-02-25', '0525-02-25', 1000, 'motivo diag', '10000', 1),
(5, 'motivo 3', '1996-09-26', '1996-09-26', 100, 'teste dig', 'okok', 1),
(6, 'dsaoko', '1511-10-20', '2102-02-01', 100101, 'odksaodkaso', 'dksoadkosa', 1),
(9, 'Sim', '1996-09-26', '1996-08-25', 2992, 'sim', 'okk', 4),
(10, 'Gripe', '2018-06-15', '2018-06-18', 200, 'Resfriado', 'Tomar Remédio', 11),
(11, 'Alergia', '2018-06-12', '2018-06-18', 100, 'Complicações', 'Cirurgia agendada', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `dono`
--

CREATE TABLE `dono` (
  `cod_dono` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `dono`
--

INSERT INTO `dono` (`cod_dono`, `nome`, `email`, `senha`) VALUES
(28, 'Leonardo Marco', 'leo26alves@yahoo.com.br', '258456ll'),
(29, 'leozin', 'leonardo@cokato.com.br', '258456ll');

-- --------------------------------------------------------

--
-- Estrutura da tabela `exames`
--

CREATE TABLE `exames` (
  `cod_exame` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `diagnostico` varchar(45) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `exames`
--

INSERT INTO `exames` (`cod_exame`, `nome`, `data`, `local`, `diagnostico`, `foto`, `observacao`, `cod_animal`) VALUES
(1, 'Exame de urina', '2018-06-14', 'Belo Horizonte ', 'infecção urinária', NULL, 'Foi ao Veterinário', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `higiene`
--

CREATE TABLE `higiene` (
  `cod_higiene` int(11) NOT NULL,
  `data` date DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `higiene`
--

INSERT INTO `higiene` (`cod_higiene`, `data`, `local`, `valor`, `observacao`, `cod_animal`) VALUES
(1, '2018-06-20', 'Belo Horizonte', 25, 'Tava muito sujo', 12),
(2, '2018-06-19', 'Belo Horizonte', 12, 'Tava imunda', 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `medicamento`
--

CREATE TABLE `medicamento` (
  `cod_medicamento` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `dosagem` varchar(45) DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  `repeticoes` int(11) DEFAULT NULL,
  `instrucao` varchar(45) DEFAULT NULL,
  `condicao` varchar(45) DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `medicamento`
--

INSERT INTO `medicamento` (`cod_medicamento`, `nome`, `dosagem`, `data_inicio`, `data_fim`, `repeticoes`, `instrucao`, `condicao`, `observacao`, `cod_animal`) VALUES
(1, 'Dipirona', '100ml', '2018-06-12', '2018-06-20', NULL, 'Gripe', 'Gripada', 'Tomar de 8 em 8 horas', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `medico`
--

CREATE TABLE `medico` (
  `cod_medico` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `crmv` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `cod_animal` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pulgasvermifugos`
--

CREATE TABLE `pulgasvermifugos` (
  `cod_pulga` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `data_aplicacao` date DEFAULT NULL,
  `data_reaplicacao` date DEFAULT NULL,
  `observacao` varchar(45) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pulgasvermifugos`
--

INSERT INTO `pulgasvermifugos` (`cod_pulga`, `nome`, `tipo`, `data_aplicacao`, `data_reaplicacao`, `observacao`, `cod_animal`) VALUES
(1, 'ok', 'sei n', NULL, NULL, 'obs', 1),
(2, 'Pulgas ', 'Remédio', '2018-06-20', '2018-06-23', NULL, 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vacina`
--

CREATE TABLE `vacina` (
  `cod_vacina` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `data_aplicacao` date DEFAULT NULL,
  `data_reaplicacao` date DEFAULT NULL,
  `observacao` varchar(180) DEFAULT NULL,
  `cod_animal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `vacina`
--

INSERT INTO `vacina` (`cod_vacina`, `nome`, `data_aplicacao`, `data_reaplicacao`, `observacao`, `cod_animal`) VALUES
(1, 'Vacina de Gripe', '2018-06-13', '2018-06-20', 'Tomou bem', 11),
(2, 'Vacina de Vermíferos', '2018-06-13', '2018-06-20', NULL, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alergia`
--
ALTER TABLE `alergia`
  ADD PRIMARY KEY (`cod_alergia`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`cod_animal`),
  ADD KEY `cod_dono` (`cod_dono`);

--
-- Indexes for table `cirurgia`
--
ALTER TABLE `cirurgia`
  ADD PRIMARY KEY (`cod_cirurgia`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`cod_consulta`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `dono`
--
ALTER TABLE `dono`
  ADD PRIMARY KEY (`cod_dono`);

--
-- Indexes for table `exames`
--
ALTER TABLE `exames`
  ADD PRIMARY KEY (`cod_exame`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `higiene`
--
ALTER TABLE `higiene`
  ADD PRIMARY KEY (`cod_higiene`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `medicamento`
--
ALTER TABLE `medicamento`
  ADD PRIMARY KEY (`cod_medicamento`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`cod_medico`),
  ADD UNIQUE KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `pulgasvermifugos`
--
ALTER TABLE `pulgasvermifugos`
  ADD PRIMARY KEY (`cod_pulga`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- Indexes for table `vacina`
--
ALTER TABLE `vacina`
  ADD PRIMARY KEY (`cod_vacina`),
  ADD KEY `cod_animal` (`cod_animal`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alergia`
--
ALTER TABLE `alergia`
  MODIFY `cod_alergia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `animal`
--
ALTER TABLE `animal`
  MODIFY `cod_animal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cirurgia`
--
ALTER TABLE `cirurgia`
  MODIFY `cod_cirurgia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `consulta`
--
ALTER TABLE `consulta`
  MODIFY `cod_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `dono`
--
ALTER TABLE `dono`
  MODIFY `cod_dono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `exames`
--
ALTER TABLE `exames`
  MODIFY `cod_exame` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `higiene`
--
ALTER TABLE `higiene`
  MODIFY `cod_higiene` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicamento`
--
ALTER TABLE `medicamento`
  MODIFY `cod_medicamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `medico`
--
ALTER TABLE `medico`
  MODIFY `cod_medico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pulgasvermifugos`
--
ALTER TABLE `pulgasvermifugos`
  MODIFY `cod_pulga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vacina`
--
ALTER TABLE `vacina`
  MODIFY `cod_vacina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `medico`
--
ALTER TABLE `medico`
  ADD CONSTRAINT `medico_ibfk_1` FOREIGN KEY (`cod_animal`) REFERENCES `animal` (`cod_animal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
