type cell = {
  digit: number;
  notes: Array<boolean>;
  onClick: ()=>{};
}

const Cell = ({digit = 0, notes = Array(9).fill(false), onClick = ()=>{},}) => {
  return (
      <p>
        <button onClick={onClick}> {digit} hi </button>
      </p>
  );
}  

export default Cell;
