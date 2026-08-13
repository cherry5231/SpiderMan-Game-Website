import { useEffect, useState } from "react";
import playerImage from "./assets/images (1).jpeg";

function Game() {
    const [player, setPlayer] = useState({
        x: 500,
        y: 300,
    });

    const speed = 5;

    useEffect(() => {
        function handleKeyDown(event) {
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
    }, []);
    return (
        <div className="game">
            <img
                className="gameMap"
                src="https://assetsio.gnwcdn.com/marvels-spider-man-2-map_KNAswW2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
                alt="Spider-Man map"
            />

            <img
                className="player"
                src={playerImage}
                alt="Player"
                style={{
                    left: `${player.x}px`,
                    top: `${player.y}px`,
                }}
            />
        </div>
    );
}
export default Game;
