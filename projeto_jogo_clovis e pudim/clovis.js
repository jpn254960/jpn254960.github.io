var fome=document.getElementById('fome')
var sede=document.getElementById('sede')
var valor_fome=100
var valor_sede=100
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
setInterval(dimunir_sede,5*60*1000)
setInterval(dimunir_fome,2*60*1000)