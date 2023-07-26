import {useState} from 'react';
import Cell from './Cell';
// import {DigitContext} from './Contexts';

function Board() {

  // check function
  const check = () => {
    console.log('board check');
  };

  // cells
  const [selectedCell,setSelectedCell] = useState(-1);
  let cells = Array(9*9);
  // key every cell a0 to i8
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const key = String.fromCharCode(i+'a'.charCodeAt(0)).concat(j.toString());
      const cellId = i*9+j;
      cells[cellId] = <Cell 
        key={key} 
        digit={0}
        clickFunc={()=>{setSelectedCell((i*9)+j)}}/>
    }
  }

  // not working, being overwritten on next render
  const updateCell = (id : number, digit : number) => {
    const cell = cells[id];
    cells[id] = <Cell
      key={cell.key}
      digit={digit}
      clickFunc={cell.props.clickFunc}/>
    console.log(cells[id]);
  }

  // digit buttons
  let digitButtons = [...Array(9)].map((_,i) => 
    <button key={`d${i}`} onClick={() => {
      updateCell(selectedCell, i+1);
    }}>{i+1}
      </button>
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
