# BlingERP-CancelNFE
Projeto criado para facilitar o cancelamento em massa das notas fiscais no bling

Para isso ultilizaremos o https://uilicious.com/
uma ferramenta de test e2e. 

Com apenas dois Arquivos somos capazes de cancelar uma infinidade de notas, 
basta criar uma conta no https://uilicious.com/ , criar um projeto, Criar um Dataset com nome que preferir com as propriedade (DATA.user,DATA.password) e cadastrar as suas credenciais do blingERP.

CancelNFE.test.js
Contem os codigos com todo o processo de cancelamento no BlingERP (10/04/21)

Notas.json
Arquivo que contem o array de notas a serem canceladas : [1,2,3,4,5,6]; 

