var fome=document.getElementById('fome') // vai ser salvo no armazanamento
var sede=document.getElementById('sede') //vai ser salvo no armazanamento
var moeda=document.getElementById('money') //vai ser salvo no armazanamento
var pontos=[document.getElementById('pontos_1'),document.getElementById('pontos_2'),document.getElementById('pontos_3')]
var clovis=document.getElementById('clovis')
var lista_jogos=document.getElementById('lista_jogos')
var cenas=[document.getElementById('jogo_1'),document.getElementById('jogo_2'),document.getElementById('jogo_3')]
var quadrado=document.getElementById('quadrado')
var clovis_jogo_1=document.getElementById('clovis_jogo_1')
var txt_perdeu=document.getElementById('derrota')
var verificador=[0]
var acertos=0
var clicados=[]
var numeros_escolhidos=[]
var parada_jogo_2=0
var cartas=['peça1.png','peça1.png','peça2.png','peça2.png','peça3.png','peça3.png']
var figuras=[document.getElementById('peça_1'),document.getElementById('peça_2'),document.getElementById('peça_3'),document.getElementById('peça_4'),document.getElementById('peça_5'),document.getElementById('peça_6')]
var cartas_virada=[]

// sistema banco de dados

if (localStorage.getItem('moeda')==null){
    localStorage.setItem('moeda',50)
    localStorage.setItem('fome',100)
    localStorage.setItem('sede',100)
    localStorage.setItem('hora',[new Date().getDate(),new Date().getHours(),new Date().getMinutes()])
}else {
    var hora=localStorage.getItem('hora')
    

    fome.innerText=localStorage.getItem('fome')
    sede.innerText=localStorage.getItem('sede')
    moeda.innerText=localStorage.getItem('moeda')
}

function atualizameto(){
     localStorage.setItem('hora',[new Date().getDate(),new Date().getHours(),new Date().getMinutes()])
     localStorage.setItem('fome',fome.innerText)
     localStorage.setItem('sede',sede.innerText)
     localStorage.setItem('moeda',moeda.innerText)
}
// codigo cena 1

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
        quadrado.style.animation='quadrado 3s linear infinite'
    }else if (n==1){
        sorteador_cor()
        parada_jogo_2=1
    }else if(n==2){
        embaralhador()
        cartas_virada=[]

    }
}

// codigo jogo 1
function pular(){
        clovis_jogo_1.style.animation='personagem 500ms infinite'
        setTimeout(function(){
            clovis_jogo_1.style.animation='parado 1s infinite'
            clovis_jogo_1.style.top=='100px'
        },500)

}


function analise(){

    var top_p=parseInt(window.getComputedStyle(clovis_jogo_1).getPropertyValue('top'))
    var left_q=parseInt(window.getComputedStyle(quadrado).getPropertyValue('left'))
    if (left_q>=20 && left_q<=60 && top_p>=60){
        quadrado.style.animation=''
        clovis_jogo_1.style.animation=''
        txt_perdeu.style.visibility='visible'
        setTimeout(function(){
            cenas[0].style.visibility='collapse'
            txt_perdeu.style.visibility='collapse'
            pontos[0].innerText=0
        },2000 )
        var pn0=Number(pontos[0].innerText)*2
        moeda.innerText=Number(moeda.innerText)+pn0
    }
}

function pontuar(){
    var right_d=parseInt(window.getComputedStyle(quadrado).getPropertyValue('right')) 
    if (right_d<19){
        if (verificador[0]==1){
            pontos[0].innerText++
            verificador[0]=0
        }
    }else{
        verificador[0]=1
    }
}


// codigo jogo 2
function clicar(n){
    var tp=[]
    tp.push(n)
    clicados.push(n)
    aceder(tp,250)
    tp=[]
}

function subir_nivel(){
    var s=0
    var v=0
    var erro=0
    while (numeros_escolhidos.length!=s && parada_jogo_2==1 ){
        if (numeros_escolhidos[s]==clicados[s] && numeros_escolhidos.length!=0){
            v+=1 
        }else if (numeros_escolhidos[s]!=clicados[s] && clicados[s]>0){
            erro++
        }
        s+=1
    }
    if (v==numeros_escolhidos.length && numeros_escolhidos.length>0){
        pontos[1].innerText++
        sorteador_cor()
        clicados=[]
    }else{
        if (erro>0){
            document.getElementById('derrota_2').style.visibility='visible'
            setTimeout(function(){
                pontos[1].innerText=0
                cenas[1].style.visibility='collapse'
                document.getElementById('derrota_2').style.visibility='collapse'
                parada_jogo_2=0
                erro=0
                s=0
                v=0
                numeros_escolhidos=[]
                clicados=[]
                moeda.innerText=`${resultado}`
            },1000)
            var pn1=Number(pontos[1].innerText)*4
            var resultado=Number(moeda.innerText)+pn1
            console.log(resultado)


        }

    }

}

function sorteador_cor(){
    var sorteado=sorteador(1,4)
    var c=-1
    numeros_escolhidos.push(sorteado)
    var t=setInterval(function(){
        c++
        aceder(numeros_escolhidos[c],500)
        if (c==numeros_escolhidos.length){
            clearInterval(t)
        }
    },1000)

}
function aceder(n,tempo){
    var vm=document.getElementById('vermelho')
    var vd= document.getElementById('verde')
    var az=document.getElementById('azul')
    var am=document.getElementById('amarelo')
    if (n==1){
        am.style.backgroundColor='rgb(255,255,0)'
        setTimeout(function(){
        am.style.backgroundColor='rgb(200,200,0,0.50)'
        },tempo)
    }else if (n==2){
        az.style.backgroundColor='rgb(0,0,255)'
        setTimeout(function(){
            az.style.backgroundColor='rgb(0,0,200,0.50'
        },tempo)
    }else if (n==3){
        vd.style.backgroundColor='rgb(0,255,0)'
    setTimeout(function(){
        vd.style.backgroundColor='rgb(0,200,0,0.50'
        },tempo)
    }else if (n==4){
    vm.style.backgroundColor='rgb(255,0,0)'
        setTimeout(function(){
            vm.style.backgroundColor='rgb(200,0,0,0.50'
        },tempo)
    }
}


// codigo jogo 3 teste de sorteamento de cartas
function embaralhador(){
    for (var c=0;c!=7;c++){
        var cor_sorteada=sorteador(0,cartas.length-1)
        cartas.push(cartas[cor_sorteada])
        cartas.splice(cor_sorteada,1)
    }
    console.log(cartas)
}


function virar_carta(s){
    
    figuras[s].src=cartas[s]
    cartas_virada.push(cartas[s])
    cartas_virada.push(figuras[s])

    if(cartas_virada[0]==cartas_virada[2]){
        cartas_virada=[]
        acertos++
        if(acertos==figuras.length/2){
            setTimeout(function(){
                for (var c=0;c!=figuras.length;c++){
                    figuras[c].src='costa_carta.png'
                }
                embaralhador()
                acertos=0
            },1000)
            pontos[2].innerText++
        }
    }else if (cartas_virada.length==4){
        setTimeout(function(){   
            cartas_virada[1].src='costa_carta.png'
            cartas_virada[3].src='costa_carta.png'
            cartas_virada=[]
        },500)
    }
}

function sair(){
    console.log(pontos[2].innerText)
    moeda.innerText=Number(moeda.innerText)+Number(pontos[2].innerText)
    cenas[2].style.visibility='collapse'
    for (var c=0;c!=figuras.length;c++){
        figuras[c].src='costa_carta.png'
    } 
    pontos[2].innerText=0
}

// sistema de sorteamento
function sorteador(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// intervalos do codigo todo sem eles o codigo não executa nada
setInterval(atualizameto,10)
setInterval(subir_nivel,10)
setInterval(pontuar,10)
setInterval(analise,1)
setInterval(piscar,1000*10)
setInterval(dimunir_sede,300000)//duração de 8h20m
setInterval(dimunir_fome,2*60000)//duração de 6h20m
