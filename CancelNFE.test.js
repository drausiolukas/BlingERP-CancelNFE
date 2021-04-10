//acessa o bling
I.goTo("https://www.bling.com.br/notas.fiscais.php#list");

//login:
I.fill("username",DATA.user);
I.fill("senha", DATA.password);
I.click(" entrar ");

//Carrega a lista de Notas
var queueNFE = TEST.loadDataFromJson("notas.json");
//Inicia processo de cancelamento
for(var i = 0; i < queueNFE.length; i++){
    //Pesquisa a Nota
    I.fill("pesquisa-mini",queueNFE[i]);
    I.pressEnter();	
    //Clica em opções da nota
    I.click("/html/body/div[5]/div[6]/div[2]/div[5]/table/tbody/tr/td[8]/div/button/i");
    //Verifica se existe a opção de cancelar no menu
    //Se existir Cancela
    if(I.see$("Cancelar NF-e")){	
        I.click("/html/body/div[5]/div[6]/div[2]/div[5]/table/tbody/tr/td[8]/div/ul/li[5]/a/span[2]");
        //Motivo Cancelamento
        I.fill("justificativa","Nota Fiscal foi emitida com erro");
        I.click("Cancelar nota");
        //SE cancelamento concluido, proxima
        if(I.see$("Cancelamento Concluído")){
            I.click("/html/body/table/tbody/tr[2]/td[2]/div[1]/a");
            TEST.log.info("Cancelada: "+queueNFE[i]);
        }else{
            //Senão o script para, pra vc verificar pq não foi possivel cancelar
            TEST.log.info("falha:"+queueNFE[i]);
            TEST.stop();
        }
    }
}

