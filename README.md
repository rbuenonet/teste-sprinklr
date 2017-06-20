# Teste Sprinklr
Teste Sprinklr com as tecnologias Nodejs + Mysql + Angular 2

#### Documentos
  - O documento com a descrição do teste está na pasta "_documentos"

#### Requisitos
* Banco Mysql devidamente configurado e rodando
* Node devidamente configurado e rodando
* Angular2 Cli configurado e rodando
  * Para mais informações sobre Angular2 Cli acesse: https://github.com/angular/angular-cli

#### Preparando o Banco de Dados
* Já com tudo certo    
  * Entrar na pasta "db" e rodar no banco mysql o arquivo db.sql    
  * Será criado um banco chamado 'sprinklr'

#### Testando o WebService
* Agora com o banco de dados criado e alimentado
  * Entrar na pasta "backend/enum", abrir o arquivo config.js e modificar os dados de acesso ao banco    
  * Padrão: Host: '127.0.0.1'   User: 'root'    Password: '123'   Database: "sprinklr"
  * Depois de configurado, rode script "backend/index.js" pelo terminal    
```sh
$ node ./backend/index.js
```
  * PS: Por padrão, rodará na porta 8080, se desejar mudar, abra o arquivo "backend/index.js" e modifique na linha 15. Em seguida abra o arquivo "frontend/src/app/enum/config.enum.ts" e mude no endereço também.

#### Rodando o Sistema \o/
* Agora com o Mysql rodando e alimentado e o WebService rodando
  * Entrar na pasta "frontend" e rodar pelo angular-cli
```sh
$ ng serve
```    
* Abrir no navegador (padrão: http://localhost:4200)
* Abrirá a página com botões 
  * Origem = Ao clicar abrirá um modal para escolhar o DDD de origem
  * Destino = Ao clicar abrirá um modal para escolhar o DDD de destino
  * Tempo = Ao clicar abrirá um modal para digitar o tempo da ligação
  * Plano = Ao clicar abrirá um modal para escolhar o filtro de Plano
  * Calcular = Se já tiver escolhido todos os campos (Plano não é obrigatório), será realizada a consulta ao banco de dados e listará os valores na tela
