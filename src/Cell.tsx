import React from 'react';
import {useState, useContext} from 'react';
// import {DigitContext} from './Contexts';

interface cell {
  key: string,
  check: ()=>void,
  lol: number,
}

function Cell(props : cell) {
  let [fun,setFun] = useState(0);
  // let context = useContext(DigitContext);

  const clickFunc = () => {
    setFun(fun+1);
    props.check();
    console.log(props.lol);
  };

  return (
      <div className="cell">
      here's a cell {fun}
      <button onClick={clickFunc}> click me </button>
      </div>
  );
}

export default Cell;
