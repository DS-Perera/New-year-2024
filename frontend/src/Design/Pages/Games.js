import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const cardsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 1',
    link: 'https://example.com/page1'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 2',
    link: '/pancha'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    heading: 'Card 3',
    link: 'https://example.com/page3'
  },
  // Add more cards as needed
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Games = () => {
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(cardsData);
    setShuffledCards(shuffled);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {shuffledCards.map(card => (
          <div key={card.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-center justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="text-center">{card.heading}</Card.Title>
                <Button variant="primary" href={card.link}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
