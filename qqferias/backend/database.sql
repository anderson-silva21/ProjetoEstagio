-- Cria tabela de funcionários
CREATE TABLE funcionarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo_contrato VARCHAR(10) NOT NULL CHECK (tipo_contrato IN ('CLT', 'PJ')),
  tipo_funcionario VARCHAR(10) NOT NULL CHECK (tipo_funcionario IN ('Gestor', 'Colaborador')),
  data_ingresso DATE NOT NULL,
  gestor_id INTEGER,
  FOREIGN KEY (gestor_id) REFERENCES funcionarios(id)
);

-- Cria tabela de agendamentos de férias
CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  funcionario_id INTEGER NOT NULL,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  status VARCHAR(10) NOT NULL CHECK (status IN ('Pendente', 'Aprovado', 'Reprovado')),
  dias INTEGER NOT NULL CHECK (dias IN (5, 10, 15, 20, 30)),
  antecipacao_13_salario BOOLEAN DEFAULT false,
  FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id)
);  

-- Cria tabela de notificações por e-mail (python)
CREATE TABLE notificacoes (
  id SERIAL PRIMARY KEY,
  agendamento_id INTEGER NOT NULL,
  tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('Solicitacao', 'Aprovacao')),
  FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id)
);

-- Cria tabela de compromissos no Google Agenda
CREATE TABLE compromissos (
  id SERIAL PRIMARY KEY,
  agendamento_id INTEGER NOT NULL,
  tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('Partida', 'Retorno')),
  FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id)
);

-- Insere na tabela "funcionarios"
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('João Silva', 'CLT', 'Gestor',  '2024-03-10', 1);
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('Flavio', 'CLT', 'Gestor',  '2024-03-10', 1);
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('Maria Santos', 'CLT', 'Colaborador', '2024-03-10', 1);
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('Pedro Oliveira', 'PJ', 'Colaborador', '2024-03-10', 1);
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('Ana Pereira', 'CLT', 'Colaborador', '2024-03-10', 2);
INSERT INTO funcionarios (nome, tipo_contrato, tipo_funcionario, data_ingresso, gestor_id) VALUES ('Lucas Martins', 'PJ', 'Colaborador', '2024-03-10', 2);

-- Insere na tabela "agendamentos"
INSERT INTO agendamentos (funcionario_id, data_inicio, data_fim, status, dias, antecipacao_13_salario)
VALUES (2, '2023-03-01', '2023-03-10', 'Pendente', 10, false);

INSERT INTO agendamentos (funcionario_id, data_inicio, data_fim, status, dias, antecipacao_13_salario)
VALUES (3, '2023-04-01', '2023-04-20', 'Pendente', 20, true);

INSERT INTO agendamentos (funcionario_id, data_inicio, data_fim, status, dias, antecipacao_13_salario)
VALUES (4, '2023-05-01', '2023-05-31', 'Pendente', 30, false);

-- Insere na tabela "notificacoes"
INSERT INTO notificacoes (agendamento_id, tipo)
VALUES (1, 'Solicitacao');

INSERT INTO notificacoes (agendamento_id, tipo)
VALUES (1, 'Aprovacao');

INSERT INTO notificacoes (agendamento_id, tipo)
VALUES (2, 'Solicitacao');

-- Insere na tabela "compromissos"
INSERT INTO compromissos (agendamento_id, tipo)
VALUES (1, 'Partida');

INSERT INTO compromissos (agendamento_id, tipo)
VALUES (1, 'Retorno');