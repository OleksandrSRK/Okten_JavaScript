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

let foundSpadesAce = (deck) => {
    console.log(`Ace Spades:`);
    for (const item of deck) {
        if (item.value === `Ace` && item.cardSuit === `Spades`){
            console.log(item);
        }
    }
}
let foundAll6 = (deck) => {
    console.log(`All 6:`);
    for (const item of deck) {
        if (item.value === 6){
            console.log(item);
        }
    }
}
let foundAllRed = (deck) => {
    console.log(`All Reds:`);
    for (const item of deck) {
        if (item.color === `red`){
            console.log(item);
        }
    }
}
let foundAllDiamonds = (deck) => {
    console.log(`All Diamonds:`);
    for (const item of deck) {
        if (item.cardSuit === `Diamonds`){
            console.log(item);
        }
    }
}
let foundAllClubsFrom9AndUp = (deck) => {
    console.log(`All Clubs from 9 and up:`);
    for (const item of deck) {
        if (item.cardSuit === `Clubs` && (item.value > 8 || typeof item.value === "string")){
            console.log(item);
        }
    }
}


console.log(deck_of_cards);
foundSpadesAce(deck_of_cards);
foundAll6(deck_of_cards);
foundAllRed(deck_of_cards);
foundAllDiamonds(deck_of_cards);
foundAllClubsFrom9AndUp(deck_of_cards);

