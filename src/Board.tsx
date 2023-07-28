import {useState} from 'react';
import Cell from './Cell';

const Board = () => {

  // check function
  const check = () => {
    console.log('board check');
  };

  // cells
  const [selectedCell,setSelectedCell] = useState(-1);
  let [cells,setCells] = useState(Array(81).fill(0));

  const updateCell = (idx: number, digit : number) => {
    if (idx < 0 || idx > cells.length) { return; }
    const newCells = [...cells];
    newCells[idx] = digit;
    setCells(newCells);
  }

  // cell notes
  let [notes,setNotes] = useState(Array(81).fill(Array(9).fill(false)));

  // digit buttons
  let digitButtons = [...Array(9)].map((_,i) => 
    <button key={`d${i}`} onClick={() => {
      updateCell(selectedCell, i+1);
    }}>{i+1}</button>
    );

  return (
      <div className="board">
        here's the board.
        <p>selected cell:{selectedCell}</p>
        {digitButtons}
        {cells.map((x,i)=> <Cell digit={x} onClick={()=>setSelectedCell(i)}/>)}
      </div>
  );
}

export default Board;
