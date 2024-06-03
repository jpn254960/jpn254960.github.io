var s=0
var tempo=[]
var ids=[]
var pessoas=[]

function criar(){
  s++
  var nick=prompt('nome do preso')
  pessoas.push(nick)
  tempo.push(10)
  var element = document.getElementById('fundo');
  var nome=document.createElement('h1')
  nome.innerHTML=`<h1 id="${s+'a'}" class="pessoas" onclick="retirar(${s})">${nick} ${tempo[s-1]}</h1>`
  ids.push(s+'a')
  element.append(nome)
}
function retirar(id){
  var cor=document.getElementById(ids[id-1]).style.backgroundColor
  if(cor=='rgb(79, 126, 95)')
    var base=document.getElementById(ids[id-1])
    base.remove()
}

setInterval(function(){
  var c=0
  var quantidade = tempo.length
  while (c!=quantidade){
    var atividade=document.getElementById(ids[c])
    if(tempo[c]>0){
      tempo[c]=tempo[c]-1
      console.log(pessoas)
      console.log(c)
      atividade.innerText=`${pessoas[c]} ${tempo[c]}`
    }if(tempo[c]==0){
      atividade.style.backgroundColor='#4f7e5f'
      tempo[c]=-1
    }
    c++
    console.log(tempo)
  }
},1000)
