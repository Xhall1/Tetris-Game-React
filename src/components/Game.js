import Menu from "./Menu";
import Tetris from "./Tetris"

import { useGameOver } from "../hooks/useGameOver.js";

const Game = ({ rows, columns }) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => { 
        resetGameOver();
        console.log(`Start gameOver is ${gameOver}`)
    }

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>

    );

}
export default Game;