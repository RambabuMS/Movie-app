import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamepadIcon from '@mui/icons-material/Gamepad';

export function TicTacToe() {

  const Eboard = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(Eboard);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return `The Winner is ${board[a]}`;
      }
      
    }
    return null;
  };

  const winner = decideWinner(board);

  const draw = (board)=>{
     if (isBoardFull(board) && winner === null) {
      return `The Match is Drawn`;
    }
  }
  const dcondition=draw(board);

  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {

    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXturn(!isXturn);
    }

  };
  const { width, height } = useWindowSize();
  const styles= {
         display:  board[0] || board[1] || board[2] || board[3] || board[4] || board[5] || board[6] || board[7] || board[8]  ? "none" : "block",
  };
  return <div className="full-game">
    {winner ? <Confetti width={width} height={height} gravity={0.03} numberOfPieces={300} /> : ""}
    <div className="head"><h1>Welcome to the Nostalgic Tic-tac-toe Game</h1>
    </div>
    <span style={styles} className="play"><Button variant="contained" onClick={() => setIsXturn(true)}>Player X<SportsEsportsIcon/> </Button>
      <Button variant="contained" onClick={() => setIsXturn(false)}>Player O<SportsEsportsIcon/></Button></span>
    <p className={winner === null  ? "showturn" : "turnhide"}>{isXturn ? <h2>X Turn <GamepadIcon color="primary"/></h2> : <h2>O Turn<GamepadIcon color="primary"/></h2>}</p>
    <div className="board">
      {board.map((val, index) => (
        <GameBox val={val} onPlayerClick={() => { handleClick(index); }} />
      ))}
    </div>

    {winner ? <h2> Game Finished and {winner}</h2> : ""}
    {dcondition ? <h2> Game Finished and {dcondition}</h2> : ""}
     

     <div className="restart">
    <Button  variant="contained" onClick={(index) => {
      setBoard(Eboard);
      setIsXturn(true);

    }}>Restart<RestartAltIcon /></Button></div>
  </div>;
}
function GameBox({ val, onPlayerClick }) {
  const styles = {
    color: val === "X" ? "green" : "red"
  };
  return <div onClick={() => onPlayerClick()} style={styles} className="game-box">
    {val}
  </div>;
}


function isBoardFull(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return false;
    }
  }
  return true;
}

