var fome=document.getElementById('fome')
var sede=document.getElementById('sede')
var valor_fome=100
var valor_sede=100
var clovis=document.getElementById('clovis')
var numero=10

function piscar(){
    clovis.src='clovis_piscando.gif'
    setTimeout(function piscar(){
        clovis.src='clovis_normal.png'
    },1100)
}
function dimunir_fome(){
if (valor_fome!=-1){
    fome.innerText=`${valor_fome--}%`
}
}
function dimunir_sede(){
    if (valor_sede!=-1){
        sede.innerText=`${valor_sede--}%`
    }
}
setInterval(piscar,1000*numero)

setInterval(dimunir_sede,5*60*1000)

setInterval(dimunir_fome,2*60000)
