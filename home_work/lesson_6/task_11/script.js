function generatorDeckOfCards(){
    let cards_array_res = [];
    let card_id = 0;
    let suit_name = [`Diamonds`, `Hearts`, `Spades`, `Clubs`]
    let card_name = [`Jack`, `Queen`, `King`, `Ace`]
    for (let num = 6; num <= 14; num += 1) {
        let card_val;

        if (num > 10) {
            card_val = card_name[num - 11];
        }else{
            card_val = num;
        }

        for (let suit_nam = 0; suit_nam < suit_name.length; suit_nam += 1) {
            cards_array_res.push({});

            cards_array_res[card_id].value = card_val;
            cards_array_res[card_id].cardSuit = suit_name[suit_nam]

            if (suit_name[suit_nam] === `Diamonds` || suit_name[suit_nam] === `Hearts`){
                cards_array_res[card_id].color = `red`;
            }else{
                cards_array_res[card_id].color = `black`;
            }
            card_id++;
        }
    }

    return cards_array_res;
}

let deck_of_cards = generatorDeckOfCards();

let sort_deck_of_cards = deck_of_cards.reduce((accumulator, card) => {
    if(card.cardSuit === `Diamonds`){
        accumulator.diamonds.push(card);
    }else if(card.cardSuit === `Hearts`){
        accumulator.hearts.push(card);
    }else if (card.cardSuit === `Spades`){
        accumulator.spades.push(card);
    }else{
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {diamonds: [], hearts: [], spades: [], clubs: []});


console.log(sort_deck_of_cards);

