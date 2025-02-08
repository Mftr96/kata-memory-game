import helper from "./helper.js";
let errorsCounter=0;
document.getElementById("errors").innerHTML=errorsCounter;
let srcCards=['alien.png',
    'bug.png',
    'duck.png',
    'rocket.png',
    'spaceship.png',
    'tiktac.png',

]
let gridCards=helper.shuffleCards(12);
//console.log(gridCards);
let grid=document.getElementById("grid");
//totalCards is meant to be used when you create select for various difficulties, at the moment is not used
let totalCards=0;
let showedCards=[];
let cardMatches=srcCards.map((src)=>({
    path:src,
    value:[gridCards.pop(),gridCards.pop()],
}));
//console.log(cardMatches);
for (let i = 1; i <= 12; i++) {
    grid.innerHTML+=helper.createCard("back.png",i);
}
let cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{
    //TO-DO : set debounce for click function 
    card.onclick=helper.debounce(()=>{
        //console.log("CIAO",card.children[0].src,index+1);
        let indexMatch=cardMatches.findIndex((e)=>e.value.includes(index+1));
        let imgCard=cardMatches[indexMatch].path;
        //console.log(imgCard);
        card.children[0].src=`../assets/images/${imgCard}`;
        showedCards.push(index+1);
        if(showedCards.length===2){
            if(showedCards.every((num)=>cardMatches[indexMatch].value.includes(num))&&showedCards[0]!==showedCards[1]){
                //console.log("coppia trovata");
                showedCards=[];

            }else{
                setTimeout(()=>{
                    //console.log(showedCards,cardMatches[indexMatch].value,showedCards.every((num)=>cardMatches[indexMatch].value.includes(num)));
                    //console.log("else",cards[showedCards[0]-1].children[0].src,cards[showedCards[1]-1].children[0].src);
                    document.getElementById(`${showedCards[0]}`).src=`../assets/images/back.png`;
                    document.getElementById(`${showedCards[1]}`).src=`../assets/images/back.png`;
                    console.log(showedCards[0],showedCards[1]);
                    showedCards=[];
                    errorsCounter++;
                    //console.log("errori:",errorsCounter);
                    document.getElementById("errors").innerHTML=errorsCounter;
                },200);
            }
        }
    })
})
