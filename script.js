var menu = document.body.querySelector("#menu")
var aberto = false
var acessou = false
var acesso = localStorage.getItem('acesso')

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

function abrir(){
    if (acessou == false && acesso != 'true'){
        document.querySelector('.popup').style.opacity = '1'
    } else{
        document.body.style.overflowY = 'scroll'
    }
}

function desaparece(){
    document.querySelector('.popup').style.display = 'none'
}


function fechar(){
    document.querySelector('.popup').style.opacity = '0'
    document.querySelector('.popup').style.marginTop = '-300px'
    document.body.style.overflowY = 'scroll'
    setTimeout(desaparece, 2000)
    acessou = true
    localStorage.setItem('acesso', 'true')
}