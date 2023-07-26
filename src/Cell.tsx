import {useState} from 'react';
// import {DigitContext} from './Contexts';

interface cell {
  key: string,
  digit: number,
  clickFunc: ()=>void,
}

function Cell(props : cell) {
  let [fun,setFun] = useState(0);

  return (
      <div className="cell">
      here's a cell {props.digit}
      <button onClick={props.clickFunc}> click me </button>
      </div>
  );
}

export default Cell;
