import './App.css'
import DrawCard from './DrawCard.tsx'
import Card from './lib/Card.ts';
import CardDeck from './lib/CardDeck.ts';
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

    return (
        <div className='casino-table'>
            <div className='playingCards faceImages'>
                {hand.map((card, index) => (
                    <DrawCard key={index} rank={card.rank} suit={card.suit} />
                ))}
            </div>

            <button className='deal-btn' onClick={dealCards}>Раздать карты!</button>
        </div>
    );

};

export default App
