var menu = document.body.querySelector("#menu")
var aberto = false

function menu_botao(){
    if(aberto == false){
        menu.style.left = "0px"
        aberto = true
    } else {
        menu.style.left = "150vw"
        aberto = false
    }
}