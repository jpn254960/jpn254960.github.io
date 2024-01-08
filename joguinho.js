
var logo=document.getElementById('imagem')
var painel= document.getElementById('painel')
var fotos=document.getElementsByClassName('personagem')


function trocar_logo(){
    logo.style.width='0px'
    logo.style.height='0px'
    painel.style.visibility='visible'
    painel.style.width='280px'
    painel.style.height='200px'

}
function escolher(n){
    console.log(n)
    console.log(fotos[3].src)
    logo.src=fotos[n-1].src
    logo.style.width='200px'
    logo.style.height='200px'
    painel.style.visibility='collapse'
    painel.style.width='0px'
    painel.style.height='0px'    

}
function text(){
    document.getElementById('nome').value=''}