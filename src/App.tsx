import './App.css'
import DrawCards from './DrawCards.tsx'
import Card from './lib/Card.ts';
import CardDeck from './lib/CardDeck.ts';

const App = () => {
    return (
        <div className="playingCards faceImages">
            <DrawCards rank="q" suit="diams" />
            <DrawCards rank="k" suit="spades" />
            <DrawCards rank="a" suit="hearts" />
        </div>
    );
};

export default App
