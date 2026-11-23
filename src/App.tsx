import './App.css';
import DrawCard from './DrawCard.tsx';
import Card from './lib/Card.ts';
import CardDeck from './lib/CardDeck.ts';
import PokerHand from './lib/PokerHand.ts';
import { useState } from 'react';

const App = () => {
    const [hand, setHand] = useState<Card[]>([]);

    const dealCards = () => {
        const currentDeck = new CardDeck();
        const newCards = currentDeck.getCards(5);
        setHand(newCards);
    };

    if (hand.length === 0) {
        return (
            <div className='casino-table'>
                <button className='deal-btn' onClick={dealCards}>Раздать карты!</button>
            </div>
        );
    }

    const pokerHand = new PokerHand(hand);
    const combo = pokerHand.getOutcome();

    return (
        <div className='casino-table'>
            <div className='playingCards faceImages'>
                {hand.map((card, index) => (
                    <DrawCard key={index} rank={card.rank} suit={card.suit} />
                ))}
            </div>

            <h2 className='gold-text'>Комбинация: {combo}</h2>
            <button className='deal-btn' onClick={dealCards}>Раздать карты!</button>
        </div>
    );

};

export default App;
