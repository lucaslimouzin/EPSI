import React, { useState } from "react";
import "styles/App.css";
import Login from "./registration/Login.js";
import Signup from "./registration/Signup.js";
import Home from "./home.js";
import { Container } from "reactstrap";
import NavBar from "cardGame/components/Navbar";
import Game from "cardGame/components/Game";
import { Main } from "./styles/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SituationGame from "./situationGame/acceuilM";
import Shooter from "./shooter/Shooter";
import PlaySituationGame from "./situationGame/Jeu/index";

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [gameScore, setGameScore] = useState<number>(0);
  const setName = (value: string) => {
    setUserName(value);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cardGame"
          element={
            <Main>
              <NavBar name={userName} score={gameScore} />
              <Container fluid>
                <Game score={gameScore} setScore={setGameScore} />
              </Container>
            </Main>
          }
        />
        <Route path="/situationGame" element={<SituationGame />} />
        <Route path="/shooter" element={<Shooter />} />

        <Route path="/playSituationGame" element={<PlaySituationGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
