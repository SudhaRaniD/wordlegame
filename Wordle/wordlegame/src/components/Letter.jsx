import React, {useContext} from 'react';
import {AppContext} from "../App";
// import { boardDefault } from '../Words';

function Letter({letterPos, attemptVal}) {

    const board = useContext(AppContext);
    // console.log(board);
    const letter = board[letterPos][attemptVal];




  return (
    <div className="letter">
      {letter}
    </div>
  );
}

export default Letter;
