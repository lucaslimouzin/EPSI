import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Col } from "reactstrap";
import { GameField } from "./styles";
import { useNavigate } from "react-router-dom";

// Data
import { images, ICard } from "cardGame/data/images";

interface GameProps {
  score: number;
  setScore: Function;
}

type Match = Array<string | null | number>;

const Game: React.FC<GameProps> = ({ setScore, score }) => {
  const navigate = useNavigate();
  const [game, setGame] = useState<ICard[]>([]);
  const [showField, setShowField] = useState<boolean>(true);
  const [cardOne, setCardOne] = useState<Match>([]);
  const [cardTwo, setCardTwo] = useState<Match>([]);
  const [pairCount, setPairCount] = useState<number>(0);

  // Start first game
  useEffect(() => {
    const newGame: ICard[] = images.sort(() => Math.random() - 0.5);
    setGame(newGame);
    setTimeout(() => setShowField(false), 2000);
  }, []);

  // Start new game
  useEffect(() => {
    if (pairCount === 6) {
      setScore(score);
      alert("End of the game! " + score + " points earned!");
      navigate("/home");
    }
  }, [pairCount]);

  // Compare cards
  useEffect(() => {
    if (cardTwo.length !== 0 && cardOne[0] === cardTwo[0]) {
      setTimeout(() => {
        setPairCount(pairCount + 1);
        setCardOne([]);
        setCardTwo([]);
        game.forEach((item) => {
          if (item.name === cardOne[0]) {
            item.match = true;
            setScore(score + 1);
            console.log("score : " + score);
          }
        });
      }, 400);
    }
  }, [cardOne, cardTwo]);

  const onCoverClick = (event: React.SyntheticEvent, id: number) => {
    const card = event.currentTarget;
    const cardName: string | null = card.getAttribute("data-name");

    if (cardOne.length === 0) {
      setCardOne([cardName, id]);
      game.forEach((item, index) => {
        if (id === index) {
          item.flipped = true;
        }
      });
    }
    // Detect same card click
    if (cardOne[1] === id) {
      game.forEach((item) => {
        item.flipped = false;
      });
      setCardOne([]);
      setCardTwo([]);
      return false;
    }
    // Condition to add second card for compare
    if (cardOne.length !== 0) {
      setCardTwo([cardName, id]);
      game.forEach((item, index) => {
        if (id === index) {
          item.flipped = true;
        }
      });

      // False if not match
      setTimeout(() => {
        game.forEach((item) => {
          item.flipped = false;
        });
        setCardOne([]);
        setCardTwo([]);
        return false;
      }, 600);
    }
    return true;
  };

  return (
    <GameField>
      {game.map((item, index) => (
        <Col xs="3" key={index}>
          <Card
            id={index}
            animation={showField}
            name={item.name}
            image={item.pic}
            flipped={item.flipped}
            matched={item.match}
            onCoverClick={onCoverClick}
          />
        </Col>
      ))}
    </GameField>
  );
};

export default Game;
