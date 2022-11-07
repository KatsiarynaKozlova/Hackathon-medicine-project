const cards = document.querySelectorAll('.memory-card');
let boardLocked = false;
let hasFlippedCard = false;

let fCard, sCard;
//console.log("OUR CARDS",cards);
const flipCard=e=>{
    if (boardLocked) return;

   const target= e.target.parentElement;
   target.classList.add('flip');

   if (!hasFlippedCard){
    fCard = target;
    hasFlippedCard=true;
   }else { 
        if ( target === fCard) return;
        sCard = target;
        checkForMatch();
   }
};


const checkForMatch= () =>{
    if ( fCard.dataset.framework === sCard.dataset.framework ){
        fCard.removeEventListener("click",flipCard);
        sCard.removeEventListener("click",flipCard);
        [hasFlippedCard,boardLocked]=[false,false];
    }else{ 
        boardLocked=true;
        setTimeout(()=>{
        fCard.classList.remove("flip");
        sCard.classList.remove("flip");
        
        [hasFlippedCard,boardLocked]=[false,false];
        [fCard,sCard]=[null,null];
    },1000);
    }
};



cards.forEach(card =>{
    //add event listener to every card
     card.addEventListener("click",flipCard);
     const randomIndex = Math.floor(Math.random()*cards.length);
     card.style.order = randomIndex;
});