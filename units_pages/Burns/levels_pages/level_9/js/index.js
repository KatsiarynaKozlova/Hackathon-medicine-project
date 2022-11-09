let answer=null;
cards = document.querySelectorAll('.select');
const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone0 = document.querySelector('.zone-0');

const pasta = document.querySelector('#pasta');
const pantenol = document.querySelector('#pantenol');
const smetana = document.querySelector('#smetana');
const maslo = document.querySelector('#maslo');


zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone0.ondragover = allowDrop;

function allowDrop(event){
    event.preventDefault();
}

pasta.ondragstart = drag;
pantenol.ondragstart = drag;
smetana.ondragstart = drag;
maslo.ondragstart = drag;

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
 
  if($("#pantenol").parents('#zone1').length == 1 && 
  $("#smetana").parents('#zone2').length == 1 &&
  $("#maslo").parents('#zone2').length == 1 &&
  $ ("#pasta").parents('#zone2').length == 1 && answer ==='0' ){
    alert("Уровень пройден!");
  } else{
    alert("Пока неверно, попробуйте еще раз");
  }
}

function fun1() {
    var sel=document.getElementById('mySelect').selectedIndex;
    var options=document.getElementById('mySelect').options;
    answer=options[sel].value;
    console.log(answer);
  }




  
  
  