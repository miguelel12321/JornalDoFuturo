var menu = document.body.querySelector("#menu")
var aberto = false
var acessou = false

function menu_botao(){
    if(aberto == false){
        menu.style.left = "0px"
        aberto = true
        menu.style.opacity = "1"
    } else {
        menu.style.left = "150vw"
        aberto = false
        menu.style.opacity = "0"
    }
}

function fechar(){
    if (acessou == false){
    document.querySelector('.popup').style.display = 'none'
    document.body.style.overflowY = 'scroll'
    acessar = true
    }
}