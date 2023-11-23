
var m1=document.getElementById('m1')
var m2=document.getElementById('m2')
var m3=document.getElementById('m3')
var s=0
var img=["380999309_18139758088306812_1108584732404115523_n.jpg","Banner Frete Grátis Loja Virtual Multiuso Moderno Gradiente Rosa Azul.png","Banner Frete Grátis Loja Virtual Multiuso Moderno Gradiente Rosa Azul (1).png"]
var contador=0
var nomes=['']
var texto=['']
function teste(){ 
    anterior=contador
    if (contador!=img.length-1){
        contador++
    }else{
        contador=0
    }
    proximo=contador+1
    if (contador+1>img.length-1){
        proximo=0
    }
    m2.src=img[contador]
    m1.src=img[anterior]
    m3.src=img[proximo]
    console.log(contador)

}   
setInterval(teste,3000)
