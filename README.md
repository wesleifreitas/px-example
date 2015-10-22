# Phoenix Project Example (px-example)

Este projeto utiliza os arquivos de distribução [px-project](https://github.com/wesleifreitas/px-project) e suas dependências (tais como AngularJS, Jquery, etc).
Para utilizar em seu próprio projeto local siga as instruções a seguir.

## Recomendação
É recomendado ler o [Developer Guide - px-project](https://github.com/wesleifreitas/px-project/tree/master/docs/guide-pt-BR) antes de prosseguir.

## Requisitos

* Adobe ColdFusion: [Instruções de instalação](https://github.com/wesleifreitas/px-project/blob/master/docs/guide-pt-BR/2.2-cf-install.md)
* Bower: Para instalar o Bower(Gerenciador de pacotes) abra o prompt de comando ou Git Bash e execute:

```shell
npm install -g bower
```
Mais detalhes em [http://bower.io/](http://bower.io/)

## Banco de dados - DSN (ColdFusion)

* Para configurar o DSN (ColdFusion) acesse: 
[http://localhost:8500/CFIDE/administrator](http://localhost:8500/CFIDE/administrator)
* Na seção **DATA & SERVICES** - **Data Sources**, crie uma nova conexão.

Parâmetro | Valor
------------ | -------------
CF Data Source Name | px_project_sql
Database | px_project
Server | sql8.hostek.com | Port: 1433
User name | team
Password | Px2015

![cf_dsn_px-project](https://github.com/wesleifreitas/px-project/blob/master/docs/guide-pt-BR/images/cf_dsn_px-project.png)

## Projeto e Building px-project

Crie a **pasta** *[Diretório de instalação do CF]*/ColdFusion11/cfusion/wwwroot/**px-example**

Pelo prompt ou Git Bash navegue até o projeto:

```shell
cd C:/ColdFusion11/cfusion/wwwroot/px-example
```

Execute o comando:

```shell
bower init
```

Irá solicitar algumas informações, avance as etapas até que se crie o arquivo **bower.json** na pasta raíz. 
Por fim instale os arquivos de distribuição **px-project** com o seguinte comando:

```shell
bower install px-project --save
```

## Estrutura: diretórios e arquivos

Monte a seguinte estrutura de diretório e arquivos:

```
src/custom/                                     componentes customizados do projeto
src/custom/assets/wallpaper/papelParede1.jpg    imagem de plano de fundo do sistema
src/custom/controllers/index.js                 cadastrar controllers do projeto
src/custom/controllers/module.js                registrar controllers definidos em controllers/index.js
src/custom/directives/index.js                  cadastrar directives do projeto
src/custom/directives/module.js                 registrar directives definidos em directives/index.js
src/custom/exemplo/exemplo.controller.js        exemplo de controller
src/custom/exemplo/exemplo.html                 exemplo de view
src/custom/exemplo/exemplo.service.js           exemplo de service
src/custom/filters/index.js                     cadastrar filters do projeto
src/custom/filters/module.js                    registrar filters definidos em filters/index.js
src/custom/services/index.js                    cadastrar services do projeto
src/custom/services/module.js                   registrar services definidos em services/index.js
src/js/app.js                                   configurar projeto angularjs
src/js/main.js                                  configurar data-main(requirejs)
src/js/px-config.js                             configurar projeto px-project
src/js/routes.js                                configurar routes(angularjs) do projeto
src/lib                                         componentes externos
src/index.html                                  html principal
src//styles.css                                 css do projeto
```
Note que a pasta *src* é opcional.

## Conteúdo dos arquivos

* src/custom/controllers/[index.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/controllers/index.js)
* src/custom/controllers/[module.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/controllers/module.js)
* src/custom/directives/[index.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/directives/index.js)
* src/custom/directives/[module.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/directives/module.js)
* src/custom/assets/wallpaper/[papelParede1.jpg](https://raw.githubusercontent.com/wesleifreitas/px-example/master/src/custom/assets/wallpaper/px-example-q70.jpg)
* src/custom/exemplo/[exemplo.controller.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/exemplo/exemplo.controller.js)
* src/custom/exemplo/[exemplo.html](https://github.com/wesleifreitas/px-example/blob/master/src/custom/exemplo/exemplo.html)
* src/custom/exemplo/[exemplo.service.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/exemplo/exemplo.service.js)
* src/custom/filters/[index.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/filters/index.js)
* src/custom/filters/[module.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/filters/module.js)
* src/custom/services/[index.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/services/index.js)
* src/custom/services/[module.js](https://github.com/wesleifreitas/px-example/blob/master/src/custom/services/module.js)
* src/js/[app.js](https://github.com/wesleifreitas/px-example/blob/master/src/js/app.js)
* src/js/[main.js](https://github.com/wesleifreitas/px-example/blob/master/src/js/main.js)
* src/js/[px-config.js](https://github.com/wesleifreitas/px-example/blob/master/src/js/px-config.js)
* src/js/[routes.js](https://github.com/wesleifreitas/px-example/blob/master/src/js/routes.js)
* src/[index.html](https://github.com/wesleifreitas/px-example/blob/master/src/index.html)
* src/[px-project-config.js](https://github.com/wesleifreitas/px-example/blob/master/src/js/px-config.js)
* src/[style.css](https://github.com/wesleifreitas/px-example/blob/master/src/styles.css)

## Primeiro acesso

* Acesse no navegador o endereço: http://localhost:8500/px-example
* Realize o login:

Campo | Valor
------------ | -------------
Usuário | px-project
Senha | atopng

Após testar o login, solicite um ID de projeto e instruções para proseguir com o desenvolvimento de seu projeto. Você pode realizar esta solicitação adicionando uma [issue](https://github.com/wesleifreitas/px-example/issues) ou enviando um e-mail para team@pxproject.com.br
