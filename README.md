# ScpciWeb

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Mateus-msj3/license-mit)

# Sobre o projeto

O SCPCI WEB [Sistema de Cadastro de Pessoas, Cursos e Inscrições] consiste em:
- Um CRUD de pessoa
- Dashboard para consulta de estatísticas
- Consulta em api externa (Via Cep), para os dados do endereço
- Uma tela da Inscrição de uma Pessoa em um Curso
- Uma tela para a funcionalidade de finalização das inscrições via API (com fila RabbitMQ)
- Listagem de selecionados para as vagas

## Layout web

### Dashboard
![Dashboard](https://github.com/Mateus-msj3/assets/raw/main/tela_dashboard.png)

### Cadastro de Pessoas 

R1 - Os campos Nome e CPF são obrigatórios.

R1.2 - Validar o nome com as regras:
- Ter mais de 1 nome

R2 - Se informada, a data de nascimento não pode ser maior que o dia atual.

R3 - O CPF deve ser válido, deve usar máscara no campo e salvar apenas os números no banco de
  dados.

R4 - Se informado o e-mail deve ser válido (exemplo email@teste.com).

R5 - Endereço deve consultar o serviço https://viacep.com.br/ e atualizar os campos conforme o
  retorno.

R5.1 - Se não encontrado, o usuário pode cadastrar qualquer CEP (Exemplo 00000-000)
  - R5.2 - Campo número, deve aceitar apenas número.
  - R5.3 - Se informado CEP, todos os campos do endereço devem ser obrigatórios.

  R6 - Validar se o CPF já está cadastrado, informando erro caso positivo.

  - R6.1 - O botão de salvar vai criar ou atualizar os dados da pessoa

![Pessoa_cadastro](https://github.com/Mateus-msj3/assets/raw/main/tela_pessoa_cadastro.png)

### Detalhes de Pessoas

R7 - A tabela deve listar todas as pessoas cadastradas no banco de dados

R8 - A coluna nascimento deve ser no formato dd/mm/yyyy

R9 - A coluna CPF deve ter máscara, no formato 000.000.000-00

R10 - A coluna cidade deve informar também o estado, no formato Cidade/Estado

R11 - Botões de Ação

- R11.1 - Editar, vai carregar os dados da pessoa no formulário.
- R11.2 - Remover, vai remover a pessoa do Banco de dados

R11.2.1 - Deve ter uma modal de confirmação

![Pessoa_detalhes](https://github.com/Mateus-msj3/assets/raw/main/tela_pessoa_detalhes.png)

### Cadastro de Cursos

R12 - A listagem de cursos deve ser consultada na API

- R12.1 - Devem ser listados todos os cursos, mas os cursos com inscrições finalizadas devem
ter a informação “(IF)” ao lado do nome

- R12.2 - Devem mostrar os Cursos em ordem alfabética
- R12.3 - Ao selecionar o Curso, deve ser listado abaixo todos os candidatos inscritos nesse
- R12.4 - Ao selecionar um curso onde as inscrições já foram finalizadas, o formulário deve ser
desabilitado.

R13 - A listagem de pessoas deve listar todas as pessoas do banco de dados

R14 - A nota deve ser um valor válido entre 0 e 10

R15 - A listagem de inscrições do curso deve ser mostrada apenas se o curso tiver sido selecionado
- R15.1 - Os dados devem ser consultados na API

R16 - O Botão “Inscrever” deve enviar a inscrição para a API
- R16.1 - Deve ser enviado para a API o CPF, Nota e Curso para registro nela

![Curso](https://github.com/Mateus-msj3/assets/raw/main/tela_curso.png)

### Tela de Inscrções

R17 - Ao clicar no botão “Finalizar Inscrições" deve ser enviado o curso para que a API faça a
finalização e seleção dos candidatos.

- R17.1 - A API deve aplicar a situação de “Selecionado” para os inscritos que ficarem dentro
do número de vagas do curso, de acordo com a maior nota, os restantes deverão ficar como “Não
Selecionado”.

- R17.2 - A integração deve ser feita via RABBITMQ, para que o usuário não tenha que esperar
a conclusão do processo.

- R17.3 - Deve mostrar uma mensagem para o usuário informando que a finalização das
inscrições está em andamento.

R18 - Deve listar na tabela “Selecionados” apenas os alunos selecionados.

![Inscrição](https://github.com/Mateus-msj3/assets/raw/main/tela_inscrição.png)

# Tecnologias utilizadas

## Frontend
- Angular
- PrimeNG
- Chart.js

## Integrações
- API Via Cep

# Conceitos utilzados
- Requisições HTTP
- Abstração de Serviços
- Reactive Forms
- Interceptors
- Rotas
- Modularização de componentes

# Como executar o projeto

## Frontend
Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/Mateus-msj3/scpci-web.git

# entrar na pasta do projeto front end web
cd scpci-web

# instalar dependências
npm install

# executar o projeto
ng serve
```

# Autor

Mateus Souza de Jesus

https://www.linkedin.com/in/mateus-souza-de-jesus/
