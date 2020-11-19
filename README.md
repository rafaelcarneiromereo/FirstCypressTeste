# FirstCypressTeste
Instruções básicas para configuração e criação do primeiro projeto Cypress.

# CONFIGURAÇÃO.

1 - Instale o NODE JS, no seu PC, assim como as ferramentas que acompanham o instalador.
2 - Sugerida a instalação do VS Code para escrever o código e uso do terminal.
3 - Se for seu primeiro projeto, crie uma pasta. Ex: 'c:/workspace/firstcypresstest/'.
4 - Utilizando o terminal do VS CODE, escreva os comandos. (Considere para o comando somente o que está dentro das aspas simples):
  4.1 - 'npm init --yes'   (Este comando irá identificar seu código como um projeto Node e criar os arquivos necessários).
  4.2 - 'npm install -D cypress'  (Este comando irá instalar o cypress na última versão e criar todos os arquivos necessários, além de alguns exemplos).
5 - Abra no seu computador o PowerSehell ou CMD, como admin e digite o comando: 'Set-ExecutionPolicy Unrestricted'. 
  Normalmente, a configuração do windows vem preparada para bloquear a execução de scripts e por isso, você não conseguirá rodar seus scripts de teste, a menos que faça essa alteração.
6 - À partir daí, o seu ambiente de trabalho já esta configurado.

# EXECUÇÃO E CRIAÇÃO DE PROJETO.

1 - O comando: './node_modules/.bin/cypress open' , abre a interface de execução e acompanhamento dos scripts.
2 - Para criar um novo projeto
