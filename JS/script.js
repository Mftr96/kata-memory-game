import helper from "./helper.js";
let errorsCounter=document.getElementById('errors');
let srcCards=['alien.png',
    'bug.png',
    'duck.png',
    'rocket.png',
    'spaceship.png',
    'tiktac.png',

]
let gridCards=helper.shuffleCards(12);
let grid=document.getElementById("grid");
//totalCards is meant to be used when you create select for various difficulties, at the moment is not used
let totalCards=0;
let cardMatches=srcCards.map((src)=>({
    path:src,
    value:[gridCards.pop(),gridCards.pop()],
}));
console.log(cardMatches);

for (let i = 1; i <= 12; i++) {
    grid.innerHTML+=helper.createCard("back.png",i);
}
let cards=document.getElementsByClassName("card");
console.log(cards);
