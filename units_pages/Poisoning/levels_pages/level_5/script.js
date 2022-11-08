const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const tabletki = document.querySelector('#tabletki');
const vodA = document.querySelector('#vodA');
const maslo = document.querySelector('#maslo');
const sup = document.querySelector('#sup');
const skoraya = document.querySelector('#skoraya');
const milo = document.querySelector('#milo');
const chips = document.querySelector('#chips');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;;

function allowDrop(event){
    event.preventDefault();
}

tabletki.ondragstart = drag;
vodA.ondragstart = drag;
maslo.ondragstart = drag;
sup.ondragstart = drag;
skoraya.ondragstart = drag;
milo.ondragstart = drag;
chips.ondragstart = drag;

function drag(event){
  event.dataTransfer.setData('id', event.target.id)
}

zone1.ondrop = drop;
zone2.ondrop = drop;
let num = 1;
function drop(event){
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId));
  if (itemId=='tabletki' || itemId=='vodA' || itemId=='skoraya' || itemId=='maslo'){
    num++;
  }else if (itemId=='sup' || itemId=='milo' || itemId=='chips'){
    num=num-2;
  }
  document.getElementById("file").value = num;
  console.log(num);
  if (num<=0){
    setTimeout(() => { alert('Девочка погибла :( Попробйте еще раз.'); }, 500);
    
  } else if (num==5){
    alert("Вы вылечили девочку. Уровень пройден");
  }
}

document.querySelector("#submit").onclick = function(){
  location.reload ();
}
