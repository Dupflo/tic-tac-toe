import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div className="game">
        <div className="game__board">
            {squares.map((square, i) => (
                 <div key={i} className="game__box">
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                </div>
            ))}
        </div>
    </div>
)

export default Board;