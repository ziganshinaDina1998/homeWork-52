import './App.css'
import Card from './Card.tsx'

const App = () => {
    return (
        <div className="playingCards faceImages">
            <Card rank="q" suit="diams" />
            <Card rank="k" suit="spades" />
            <Card rank="a" suit="hearts" />
        </div>
    );
};

export default App
