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
Server | sql7.hostek.com | Port: 1433
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

Irá solicitar algumas informações, avance as etapas até que se crie o arquivo bower.json na pasta raíz. 
Por fim instale os arquivos de distribuição px-project com o seguinte comando:

```shell
bower install px-project --save
```

## Estrutura: diretórios e arquivos

Monte a seguinte estrutura de diretório e arquivos:

```
bower_components/                         este diretório foi criado Bower
custom/                                   componentes customizados do seu projeto
custom/assets/wallpaper/papelParede1.jpg  imagem de fundo do sistema
custom/controller/                        controllers do projeto (*.js)         
custom/controller/exemploCtrl.js          controller (exemplo)
custom/model                              armazena fontes do back-end
custom/view                               views do projeto (*.html)
custom/view/exemplo.html                  view (exemplo)
index.html                                html principal
px-project-config.js                      configuração do px-project
style.css                                 css do projeto
```

## Conteúdo dos arquivos

* custom/assets/wallpaper/[papelParede1.jpg](https://raw.githubusercontent.com/wesleifreitas/px-example/master/custom/assets/wallpaper/papelParede1.jpg) (A imagem de fundo poderá ser alterada no futuro)
* custom/controller/[exemploCtrl.js](https://github.com/wesleifreitas/px-example/blob/master/custom/controller/exemploCtrl.js)
* custom/view/[exemplo.html](https://github.com/wesleifreitas/px-example/blob/master/custom/view/exemplo.html)
* [index.html](https://github.com/wesleifreitas/px-example/blob/master/index.html)
* [px-project-config.js](https://github.com/wesleifreitas/px-example/blob/master/px-project-config.js)
* [style.css](https://github.com/wesleifreitas/px-example/blob/master/style.css)

## Primeiro acesso

* Acesse no navegador o endereço: http://localhost:8500/px-example
* Realize o login:

Campo | Valor
------------ | -------------
Usuário | px-project
Senha | atopng

