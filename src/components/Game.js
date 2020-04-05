import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button className="start-btn" onClick={() => setBoard(Array(9).fill(null))}>
            JOUER
        </button>
    )

    return (
        <>
            <h1 className="game__status">Tic Tac Toe Game</h1>
            <Board squares={board} onClick={handleClick} />
            <div id="informations">
                <p>{'Joueur suivant: ' + (xIsNext ? 'X' : 'O')}</p>
                <p className="winner">{winner ? 'Les ' +  winner + ' remportent la partie' : ""}</p>
            </div>
            {renderMoves()}
            
        </>
    )
}

export default Game;