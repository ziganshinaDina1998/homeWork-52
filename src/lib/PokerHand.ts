import Card from './Card.ts';

class PokerHand {
    public cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        const allRanks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        const allSuits: string[] = ['spades', 'hearts', 'clubs', 'diams'];

        let pairsCount: number = 0;
        let threesCount: number = 0;
        let foursCount: number = 0;

        let isFlush: boolean = false;
        let isStraight: boolean = false;
        let isRoyal: boolean = false;

        for (let i: number = 0; i < allSuits.length; i++) {
            const currentSuit: string = allSuits[i];
            let count: number = 0;

            for (let j: number = 0; j < this.cards.length; j++) {
                if (this.cards[j].suit === currentSuit) {
                    count++;
                }
            }

            if (count === 5) {
                isFlush = true;
            }
        }

        let consecutiveSteps: number = 0;

        let hasAce: boolean = false;
        let hasFourToFive: boolean = false;

        for (let i: number = 0; i < allRanks.length; i++) {
            const currentRank: string = allRanks[i];
            let count: number = 0;

            for (let j: number = 0; j < this.cards.length; j++) {
                if (this.cards[j].rank === currentRank) {
                    count++;
                }
            }

            if (count === 2) pairsCount++;
            if (count === 3) threesCount++;
            if (count === 4) foursCount++;

            if (count > 0) {
                consecutiveSteps++;

                if (currentRank === 'a') {
                    hasAce = true;
                }

                if (consecutiveSteps === 5) {
                    isStraight = true;

                    if (currentRank === 'a') {
                        isRoyal = true;
                    }
                }

                if (consecutiveSteps === 4 && currentRank === '5') {
                    hasFourToFive = true;
                }

            } else {
                consecutiveSteps = 0;
            }
        }

        if (hasFourToFive === true && hasAce === true) {
            isStraight = true;
        }

        if (isFlush && isStraight && isRoyal) {
            return 'Роял Флэш';
        }

        if (isFlush && isStraight) {
            return 'Стрит Флэш';
        }

        if (foursCount === 1) {
            return 'Каре (четыре одинаковые)';
        }

        if (threesCount === 1 && pairsCount === 1) {
            return 'Фулл-хаус';
        }

        if (isFlush) {
            return 'Флэш';
        }

        if (isStraight) {
            return 'Стрит';
        }

        if (threesCount === 1) {
            return 'Тройка';
        }

        if (pairsCount === 2) {
            return 'Две пары';
        }

        if (pairsCount === 1) {
            return 'Одна пара';
        }

        return 'Старшая карта (ничего)';
    }
}

export default PokerHand;