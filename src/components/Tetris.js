import "./Tetris.css"

import Board from "./Board"

import { useBoard } from "../hooks/useBoard"

const Tetris = ({ rows, columns, setGameOver }) => {
    const [board, setBoard] = useBoard({rows, columns })
    return (
       <div className="Tetris">
        <Board board={board} />
       </div>
    )
}

export default Tetris;