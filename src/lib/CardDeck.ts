import Card from './Card.ts';

class CardDeck {
    public cardDeck: Card[] = [];
    private suits = ['spades', 'hearts', 'clubs', 'diams'];
    private ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.cardDeck.push(card);
            });
        });
    }

    getCard(): Card {
        const randomNum = Math.floor(Math.random() * this.cardDeck.length);
        return this.cardDeck.splice(randomNum, 1)[0];
    }

    getCards(howMany: number) {
        const cards: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            cards.push(card);
        }

        return cards;
    }
}

export default CardDeck;