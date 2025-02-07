const helper= {
    createCard:(src,id )=>{
        return `<div class="card" style="width:calc(100% / 4 - 1rem); height:calc(100% / 3 - 0.5rem); ">
                    <img src="/assets/images/${src}"id="${id}" class="card-img-top" alt="...">
                </div>`;
    },
    shuffleCards:(numberCards)=>{
        let cards=[];
        for (let i = 1; i <= numberCards; i++) {
            cards.push(i);
        }
        cards.sort(()=>Math.random() - Math.random());
        return cards;
    },

};


export default helper;