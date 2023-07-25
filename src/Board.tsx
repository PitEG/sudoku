import React from 'react';
import {useState, useEffect} from 'react';
import Cell from './Cell';
// import {DigitContext} from './Contexts';

function Board() {
  const [digit,setDigit] = useState(1);
  
  const check = () => {
    console.log('board check'.concat(digit.toString()));
  };

  let cells = Array(9*9);
  // key every cell a0 to i8
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const key = String.fromCharCode(i+'a'.charCodeAt(0)).concat(j.toString());
      cells[(i*9)+j] = <Cell key={key} check={check} lol={digit}/>
    }
  }

  return (
      <div className="board">
        here's the board.
        <button onClick={()=>{setDigit(digit+1)}}> lmao</button>
        {digit}
        {cells}
      </div>
  );
}

export default Board;
