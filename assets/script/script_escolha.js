var menu = false
var NotificacaoMenu = false
var BarraPesquisa = false 
var infoVideo = false 
var OptionsResponsive = false 

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE GERENCIAMENTO DE CONTAS */

function abrirMenu(){
    if (!NotificacaoMenu) {
        var displayValue = document.querySelector(".gerenciar") 

        if (menu){
            displayValue["style"]["display"] = "none";
            menu = false
        }else {
            displayValue["style"]["display"] = "block";
            menu = true 
        }
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE NOTIFICAÇÕES*/

function abrirNotificacao(){
    if (!menu) {
        var displayValue = document.querySelector(".alerts") 

        if (NotificacaoMenu){
            displayValue["style"]["display"] = "none";
            NotificacaoMenu = false
        }else {
            displayValue["style"]["display"] = "block";
            NotificacaoMenu = true 
        }
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DA BARRA DE PESQUISA */

function abrirBarraPesquisa() {
    var displayValue = document.querySelector(".pesquisa") 
    if (BarraPesquisa){
        displayValue["style"]["display"] = "none";
        BarraPesquisa = false
    }else {
        displayValue["style"]["display"] = "block";
        BarraPesquisa = true 
    }
}

/* JAVASCRIPT - FUNÇÃO PARA DESATIVAÇÃO DA ANIMAÇÃO  */

function activeBackground() {
    setTimeout(() => {
        document.querySelector(".loading_page")["style"]["display"] = "none";
        document.querySelector(".loading_off")["style"]["display"] = "block";
    },3000)     
}

/* JAVASCRIPT - FUNÇÃO PARA DESATIVAÇÃO DO VÍDEO */

function closeVideos() {
    var displayValue = document.querySelector(".info-film-display") 
    if (infoVideo){
        displayValue["style"]["display"] = "none";
        infoVideo = false
    }
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO VÍDEO */


function openVideoInfos() {
    var displayValue = document.querySelector(".info-film-display") 
    if (infoVideo){
        displayValue["style"]["display"] = "none";
        infoVideo = false
    }else {
        displayValue["style"]["display"] = "block";
        infoVideo = true 
    }  
}

/* JAVASCRIPT - FUNÇÃO PARA ATIVAÇÃO DO MENU DE INFOS RESPONSIVO  */

function openNavInfos() {
    var displayValue = document.querySelector(".infos") 
    if (OptionsResponsive){
        displayValue["style"]["display"] = "none";
        OptionsResponsive = false
    }else {
        displayValue["style"]["display"] = "block";
        OptionsResponsive = true 
    }  
}

activeBackground()