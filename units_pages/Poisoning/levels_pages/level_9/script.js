const zone1 = document.querySelector('.zone1');
const zone2 = document.querySelector('.zone2');
const zone3 = document.querySelector('.zone3');
const zone4 = document.querySelector('.zone4');
const igolki = document.querySelector('.igolki');

const igla1 = document.querySelector('#igla1');
const igla2 = document.querySelector('#igla2');
const igla3 = document.querySelector('#igla3');
const igla4 = document.querySelector('#igla4');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone3.ondragover = allowDrop;
zone4.ondragover = allowDrop;
igolki.ondragover = allowDrop;

function allowDrop(event){
    event.preventDefault();
}

igla1.ondragstart = drag;
igla2.ondragstart = drag;
igla3.ondragstart = drag;
igla4.ondragstart = drag;

function drag(event){
  event.dataTransfer.setData('id', event.target.id)
}

zone1.ondrop = drop;
zone2.ondrop = drop;
zone3.ondrop = drop;
zone4.ondrop = drop;
igolki.ondrop = drop;
let fl1 = false;
let fl2 = false;
let fl3 = false;
let fl4 = false;
let num = 1;
function drop(event){
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId));
  if (itemId=="igla1"){ 
    if($("#igla1").parents('#zone4').length == 1){
    document.getElementById("zone4").style.display="none"; fl1 = true;
  }else{ alert('Ошибка. Начните заново')}}

  if (itemId=="igla2"){ if($("#igla2").parents('#zone2').length == 1){
    document.getElementById("zone2").style.display="none";fl2 = true;
  }else{ alert('Ошибка. Начните заново')}}


  if (itemId=="igla3"){if($("#igla3").parents('#zone1').length == 1){
    document.getElementById("zone1").style.display="none";fl3 = true;
  }else{ alert('Ошибка. Начните заново')}}

  if (itemId=="igla4"){ if($("#igla4").parents('#zone3').length == 1){
    document.getElementById("zone3").style.display="none";fl4 = true;
  }else{ alert('Ошибка. Начните заново')}}

  if (fl1 && fl2 && fl3 && fl4){
    setTimeout(() => { alert('Уровень пройден'); }, 500);
  }
}


document.querySelector("#submit").onclick = function(){
  location.reload ();
}