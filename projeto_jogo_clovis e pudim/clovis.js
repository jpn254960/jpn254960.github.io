var fome=document.getElementById('fome')
var sede=document.getElementById('sede')
var moeda=document.getElementById('money')
var clovis=document.getElementById('clovis')
var lista_jogos=document.getElementById('lista_jogos')
var cenas=[document.getElementById('jogo_1')]
var quadrado=document.getElementById('quadrado')
var clovis_jogo_1=document.getElementById('clovis_jogo_1')
var txt_perdeu=document.getElementById('derrota')

function piscar(){
    clovis.src='clovis_piscando.gif'
    setTimeout(function piscar(){
        clovis.src='clovis_normal.png'
    },1100)
}
function dimunir_fome(){
if (fome.innerText!=0){
    fome.innerText--
}
}
function dimunir_sede(){
    if (sede.innerText!=0){
        sede.innerText--
    }
}
function comer(){
    if (moeda.innerText>=2 && fome.innerText!=100){  
        moeda.innerText-=2
        fome.innerText++
    }
}
function beber(){
    if (moeda.innerText>=5 && sede.innerText!=100 ){
        moeda.innerText-=5
        sede.innerText++
    }
}
function jogar(){
    if(lista_jogos.style.visibility=='visible'){
        lista_jogos.style.visibility='collapse'
    }else{
        lista_jogos.style.visibility='visible'
    }
}
function iniciar_jogo(n){
    cenas[n].style.visibility='visible'
    if (n==0){
        quadrado.style.animation='quadrado 1s linear infinite'
    }
}

function pular(){
        clovis_jogo_1.style.animation='personagem 500ms infinite'
        setTimeout(function(){
            clovis_jogo_1.style.animation=''
        },500)
}
function analise(){
    var top =parseInt(window.getComputedStyle(clovis_jogo_1).getPropertyValue('top'))
    var left=parseInt(window.getComputedStyle(quadrado).getPropertyValue('left'))
    console.log(top)
    if (left>=0 && left<=40 && top>=120){
        quadrado.style.animation=''
        clovis_jogo_1.style.animation=''
        txt_perdeu.style.visibility='visible'

    }
}
setInterval(analise,10)
setInterval(piscar,1000*10)

setInterval(dimunir_sede,5*60000)

setInterval(dimunir_fome,2*60000)
