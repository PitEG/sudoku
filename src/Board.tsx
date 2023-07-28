import {useState} from 'react';
import Cell from './Cell';
// import {DigitContext} from './Contexts';

const Board = () => {

  // check function
  const check = () => {
    console.log('board check');
  };

  // cells
  const [selectedCell,setSelectedCell] = useState(-1);
  let [cells,setCells] = useState(
    Array(9*9).fill(<Cell/>).map((_,i)=>
      <Cell key={i} onClick={()=>{setSelectedCell(i)}}/>
    ));
  
  const updateCell = (idx: number, cell : any) => {
    const newCells = [...cells];
    newCells[idx] = cell;
    setCells(newCells);
  }

  // digit buttons
  let digitButtons = [...Array(9)].map((_,i) => 
    <button key={`d${i}`} onClick={() => {
      updateCell(i, <Cell digit={9}/>)
    }}>{i+1} </button>
    );

  return (
      <div className="board">
        here's the board.
        <p>selected cell:{selectedCell}</p>
        {digitButtons}
        {cells}
      </div>
  );
}

export default Board;
