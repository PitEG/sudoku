import {useState} from 'react';
import Cell from './Cell';
// import {DigitContext} from './Contexts';

class cell {
  digit: number;
  notes: Array<boolean>;

  constructor(digit : number = 0) {
    this.digit = digit;
    this.notes = Array(9).fill(false);
  }
}

const Board = () => {

  // check function
  const check = () => {
    console.log('board check');
  };

  // cells
  const [selectedCell,setSelectedCell] = useState(-1);
  let [cells,setCells] = useState(Array(81).fill(new cell()));

  const updateCell = (idx: number, c : cell) => {
    if (idx < 0 || idx > cells.length) { return; }
    const newCells = [...cells];
    newCells[idx] = c;
    setCells(newCells);
  }

  // digit buttons
  let digitButtons = [...Array(9)].map((_,i) => 
    <button key={`d${i}`} onClick={() => {
      updateCell(selectedCell, new cell(i+1));
    }}>{i+1}</button>
    );

  return (
      <div className="board">
        here's the board.
        <p>selected cell:{selectedCell}</p>
        {digitButtons}
        {cells.map((x,i)=> <Cell digit={x.digit} onClick={()=>setSelectedCell(i)}/>)}
      </div>
  );
}

export default Board;
