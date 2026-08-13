import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import Contact from "./contact.jsx";
import Movie from "./movie.jsx";
import Game from "./Game.jsx";

import { useEffect, useState } from "react";

import playerImage from "./assets/images (4).jpeg";
import dangerImage from "./assets/images (5).jpeg";


function Home() {
  const [player, setPlayer] = useState({
    x: 500,
    y: 300,
  });

  const [activeDanger, setActiveDanger] = useState(null);
  const [score, setScore] = useState(0);
  const [completedDangerIds, setCompletedDangerIds] = useState([]);
  const [touchDirection, setTouchDirection] = useState(null);

  const [dangerPoints] = useState([
    {
      id: 1,
      x: 150,
      y: 120,
      question: "What is Spider-Man's real name?",
      answers: [
        "Peter Parker",
        "Bruce Wayne",
        "Clark Kent",
        "Tony Stark",
      ],
      correctAnswer: "Peter Parker",
    },

    {
      id: 2,
      x: 350,
      y: 200,
      question: "Which city does Spider-Man primarily protect?",
      answers: [
        "New York City",
        "Gotham City",
        "Metropolis",
        "Chicago",
      ],
      correctAnswer: "New York City",
    },

    {
      id: 3,
      x: 600,
      y: 130,
      question: "What is one of Spider-Man's most famous abilities?",
      answers: [
        "Web-slinging",
        "Flying without equipment",
        "Breathing underwater",
        "Turning invisible at will",
      ],
      correctAnswer: "Web-slinging",
    },

    {
      id: 4,
      x: 850,
      y: 180,
      question:
        "Who is Spider-Man's famous enemy who uses mechanical tentacles?",
      answers: [
        "Doctor Octopus",
        "Green Goblin",
        "Venom",
        "Mysterio",
      ],
      correctAnswer: "Doctor Octopus",
    },

    {
      id: 5,
      x: 1050,
      y: 300,
      question: "What phrase is strongly associated with Spider-Man?",
      answers: [
        "With great power comes great responsibility",
        "I am Iron Man",
        "Avengers assemble",
        "Hulk smash",
      ],
      correctAnswer:
        "With great power comes great responsibility",
    },

    {
      id: 6,
      x: 900,
      y: 450,
      question:
        "What color is commonly associated with Spider-Man's classic suit?",
      answers: [
        "Red and blue",
        "Green and purple",
        "Black and yellow",
        "White and orange",
      ],
      correctAnswer: "Red and blue",
    },

    {
      id: 7,
      x: 650,
      y: 500,
      question: "What does Spider-Man use to swing between buildings?",
      answers: [
        "Webs",
        "Ropes",
        "Grappling hooks",
        "Chains",
      ],
      correctAnswer: "Webs",
    },

    {
      id: 8,
      x: 350,
      y: 450,
      question: "Which villain is also known as the Green Goblin?",
      answers: [
        "Norman Osborn",
        "Otto Octavius",
        "Eddie Brock",
        "Quentin Beck",
      ],
      correctAnswer: "Norman Osborn",
    },

    {
      id: 9,
      x: 1100,
      y: 520,
      question: "What is Spider-Man's spider-sense?",
      answers: [
        "A danger warning ability",
        "A teleportation power",
        "A healing device",
        "A flying machine",
      ],
      correctAnswer: "A danger warning ability",
    },
  ]);

  const speed = 5;

  // =========================
  // WASD MOVEMENT
  // =========================

  useEffect(() => {
    function handleKeyDown(event) {
      if (activeDanger !== null) return;

      setPlayer((currentPlayer) => {
        let newX = currentPlayer.x;
        let newY = currentPlayer.y;

        if (event.key === "w" || event.key === "W") {
          newY -= speed;
        }

        if (event.key === "s" || event.key === "S") {
          newY += speed;
        }

        if (event.key === "a" || event.key === "A") {
          newX -= speed;
        }

        if (event.key === "d" || event.key === "D") {
          newX += speed;
        }

        newX = Math.max(25, Math.min(1175, newX));
        newY = Math.max(25, Math.min(605, newY));

        return {
          x: newX,
          y: newY,
        };
      });
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDanger]);

  // =========================
  // TOUCH MOVEMENT
  // =========================

  useEffect(() => {
    if (touchDirection === null || activeDanger !== null) {
      return;
    }

    const interval = setInterval(() => {
      setPlayer((currentPlayer) => {
        let newX = currentPlayer.x;
        let newY = currentPlayer.y;

        if (touchDirection === "up") newY -= speed;
        if (touchDirection === "down") newY += speed;
        if (touchDirection === "left") newX -= speed;
        if (touchDirection === "right") newX += speed;

        newX = Math.max(25, Math.min(1175, newX));
        newY = Math.max(25, Math.min(605, newY));

        return {
          x: newX,
          y: newY,
        };
      });
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [touchDirection, activeDanger]);

  // =========================
  // DANGER COLLISION
  // =========================

  useEffect(() => {
    if (activeDanger !== null) return;

    for (const danger of dangerPoints) {
      if (completedDangerIds.includes(danger.id)) {
        continue;
      }

      const distance = Math.sqrt(
        (player.x - danger.x) ** 2 +
        (player.y - danger.y) ** 2
      );

      if (distance < 50) {
        setActiveDanger(danger);
        break;
      }
    }
  }, [
    player,
    activeDanger,
    dangerPoints,
    completedDangerIds,
  ]);

  // =========================
  // ANSWER QUESTION
  // =========================

  function answerQuestion(answer) {
    if (answer === activeDanger.correctAnswer) {
      setScore((currentScore) => currentScore + 100);

      setCompletedDangerIds((currentIds) => [
        ...currentIds,
        activeDanger.id,
      ]);

      setActiveDanger(null);
    } else {
      alert("Wrong answer! Try again.");
    }
  }

  function exitQuiz() {
    setActiveDanger(null);
  }

  return (
    <main className="home-page">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-badge">
            🕷️ SPIDER-TRACKER
          </div>

          <h1 className="intro1">
            Spidey Tracker
          </h1>

          <p className="hero-subtitle">
            TRACK THE WEB-SLINGER ACROSS NEW YORK CITY
          </p>

          <img
            className="intrologo1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wT9UN0I12xy-h9HV73ks62bBjQRe1gtE7DOKUQwCNg&s=10"
            alt="Spider-Man"
          />

          <p className="hero-description">
            Spidey Tracker allows to track where spiderman is headed across NYC
            live tracking.
          </p>

          <p className="fan-note">
            Please note that this is a fan-made service made and inspired from
            the new movie Brand New Day.
          </p>

          <div className="hero-cta">
            <span>WASD</span>
            <span className="dot">•</span>
            <span>TOUCH CONTROLS</span>
            <span className="dot">•</span>
            <span>FIND THE DANGER POINTS</span>
          </div>

        </div>

      </section>


      {/* GAME HUD */}

      <section className="game-section">

        <div className="game-heading">

          <div>
            <span className="section-label">
              LIVE MISSION
            </span>

            <h2>
              New York City
            </h2>

            <p>
              Explore the map and investigate every danger signal.
            </p>
          </div>

          <div className="scoreboard">
            <span>🕷️ SPIDEY SCORE</span>
            <strong>{score}</strong>
          </div>

        </div>


        {/* MAP */}

        <div className="map-shell">

          <div className="map-status">
            <span className="live-dot"></span>
            TRACKING ACTIVE
          </div>

          <div className="map-container">

            <img
              className="map-image"
              src="https://assetsio.gnwcdn.com/marvels-spider-man-2-map_KNAswW2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
              alt="New York map"
            />

            <div className="map-vignette"></div>

            {/* TOUCH CONTROLS */}

            <div className="touch-controls">

              <button
                className="touch-button up"
                onTouchStart={() => setTouchDirection("up")}
                onTouchEnd={() => setTouchDirection(null)}
                onTouchCancel={() => setTouchDirection(null)}
              >
                ▲
              </button>

              <button
                className="touch-button left"
                onTouchStart={() => setTouchDirection("left")}
                onTouchEnd={() => setTouchDirection(null)}
                onTouchCancel={() => setTouchDirection(null)}
              >
                ◀
              </button>

              <button
                className="touch-button center"
                onTouchStart={() => setTouchDirection(null)}
              >
                🕷
              </button>

              <button
                className="touch-button right"
                onTouchStart={() => setTouchDirection("right")}
                onTouchEnd={() => setTouchDirection(null)}
                onTouchCancel={() => setTouchDirection(null)}
              >
                ▶
              </button>

              <button
                className="touch-button down"
                onTouchStart={() => setTouchDirection("down")}
                onTouchEnd={() => setTouchDirection(null)}
                onTouchCancel={() => setTouchDirection(null)}
              >
                ▼
              </button>

            </div>


            {/* DANGER ICONS */}

            {dangerPoints.map((danger) => {

              if (completedDangerIds.includes(danger.id)) {
                return null;
              }

              return (
                <div
                  key={danger.id}
                  className="danger-wrapper"
                  style={{
                    left: `${danger.x}px`,
                    top: `${danger.y}px`,
                  }}
                >
                  <div className="danger-pulse"></div>

                  <img
                    className="danger-image"
                    src={dangerImage}
                    alt="Danger"
                  />
                </div>
              );

            })}


            {/* PLAYER */}

            <div
              className="player-wrapper"
              style={{
                left: `${player.x}px`,
                top: `${player.y}px`,
              }}
            >

              <div className="player-glow"></div>

              <img
                className="player-image"
                src={playerImage}
                alt="Spidey player"
              />

            </div>


            {/* QUIZ */}

            {activeDanger !== null && (

              <div className="quiz-backdrop">

                <div className="quiz-box">

                  <button
                    className="quiz-close"
                    onClick={exitQuiz}
                  >
                    ×
                  </button>

                  <span className="quiz-kicker">
                    ⚠️ DANGER DETECTED
                  </span>

                  <h2>
                    {activeDanger.question}
                  </h2>

                  <div className="quiz-answers">

                    {activeDanger.answers.map((answer) => (

                      <button
                        key={answer}
                        onClick={() => answerQuestion(answer)}
                      >
                        <span className="answer-arrow">
                          →
                        </span>

                        {answer}
                      </button>

                    ))}

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>


        <div className="game-instructions">

          <div>
            <strong>⌨️ DESKTOP</strong>
            <span>Use W A S D to move Spider-Man</span>
          </div>

          <div>
            <strong>📱 MOBILE</strong>
            <span>Hold the directional buttons to move</span>
          </div>

          <div>
            <strong>⚠️ DANGER</strong>
            <span>Reach the signals to unlock questions</span>
          </div>

        </div>

      </section>

    </main>
  );
}


function App() {

  return (

    <BrowserRouter>

      <div className="app">

        {/* NAVIGATION */}

        <header className="header">

          <div className="nav-inner">

            <Link
              className="brand"
              to="/"
            >
              <span className="brand-icon">
                🕷
              </span>

              <span>
                SPIDEY
                <b>TRACKER</b>
              </span>
            </Link>


            <nav className="header2">

              <Link
                className="homebutt"
                to="/"
              >
                Home
              </Link>

              <Link
                className="moviebutt"
                to="/movie"
              >
                Movie
              </Link>

              <Link
                className="contactbutt"
                to="/contact"
              >
                Contact Me
              </Link>

            </nav>

          </div>

        </header>


        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/movie"
            element={<Movie />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/game"
            element={<Game />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}


export default App;