const DrawCard = (props: { rank: string; suit: string }) => {
    let cardSuit = '';

    if (props.suit === 'spades') {
        cardSuit = '♠';
    } else if (props.suit === 'hearts') {
        cardSuit = '♥';
    } else if (props.suit === 'clubs') {
        cardSuit = '♣';
    } else if (props.suit === 'diams') {
        cardSuit = '♦';
    }

    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    return (
        <span className={cardClasses}>
            <span className='rank'>{props.rank.toUpperCase()}</span>
            <span className='suit'>{cardSuit}</span>
        </span>
    );
};

export default DrawCard;
