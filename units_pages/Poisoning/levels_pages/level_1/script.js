
const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone0 = document.querySelector('.zone-0');
const banana = document.querySelector('#banana');
const hleb = document.querySelector('#hleb');
const kley = document.querySelector('#kley');
const sup = document.querySelector('#sup');
const sosiska = document.querySelector('#sosiska');
const milo = document.querySelector('#milo');
const myaso = document.querySelector('#myaso');
const apple = document.querySelector('#apple');


zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone0.ondragover = allowDrop;

function allowDrop(event){
    event.preventDefault();
}

banana.ondragstart = drag;
hleb.ondragstart = drag;
kley.ondragstart = drag;
sup.ondragstart = drag;
sosiska.ondragstart = drag;
milo.ondragstart = drag;
myaso.ondragstart = drag;
apple.ondragstart = drag;

function drag(event){
  event.dataTransfer.setData('id', event.target.id)
}

zone1.ondrop = drop;
zone2.ondrop = drop;
zone0.ondrop = drop;
function drop(event){
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId));
}

document.querySelector("#submit").onclick = function(){
  if($("#banana").parents('#zone1').length == 1 && 
     $("#apple").parents('#zone1').length == 1 &&
     $("#sosiska").parents('#zone1').length == 1 &&
     $("#sup").parents('#zone1').length == 1 &&
     $("#milo").parents('#zone2').length == 1 &&
     $("#myaso").parents('#zone2').length == 1 &&
     $("#kley").parents('#zone2').length == 1 &&
     $("#hleb").parents('#zone2').length == 1) {
    alert("Уровень пройден!");
  } else{
    alert("Пока неверно, попробуйте еще раз");
  }
}