/*
class Cell {
  digit: undefined | number;
  notes: Array<boolean>;
  
  constructor() {
    this.digit = undefined;
    this.notes = Array(9);
  }

  mark(num : number, mark : boolean) {
    if (num < 1 || num > 9) {
      return;
    }

    this.notes[num-1] = mark;
  }
}
*/

type cell = {
  digit: number;
  notes: Array<boolean>;
  onClick: ()=>{};
}

const Cell = (
    {digit = 0, 
    notes = Array(9).fill(false),
    onClick = ()=>{},
    }) => {
  return (
      <p>
        <button onClick={onClick}> {digit} hi </button>
      </p>
  );
}  

export default Cell;
