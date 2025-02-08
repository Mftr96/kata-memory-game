const helper= {
    createCard:(src,id )=>{
        return `<div class="card" style="width:calc(100% / 4 - 1rem); height:calc(100% / 3 - 0.5rem); ">
                    <img src="/assets/images/${src}"id="${id}" class="card-img-top" alt="...">
                </div>`;
    },
    shuffleCards:(numberCards)=>{
        if(numberCards % 2 !== 0){
            return console.error("inserire un numero pari");
        }
        let cards=[];
        for (let i = 1; i <= numberCards; i++) {
            cards.push(i);
        }
        cards.sort(()=>Math.random() - Math.random());
        return cards;
    },
     debounce:(func, timeout = 100)=>{
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        }
      },

};


export default helper;