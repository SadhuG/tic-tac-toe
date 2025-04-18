import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WinningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(currentBoard) {
    for (let i = 0; i < WinningPatterns.length; i++) {
      const [a, b, c] = WinningPatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const winner = calculateWinner(board);

    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function getStatusMessage() {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} Wins`;
    }
    if (!board.includes(null)) {
      return "It's a draw";
    }
    return `Player ${isXNext ? "X" : "O"}'s Turn`;
  }

  function resetGame() {
    setBoard(initialBoard);
    setIsXNext(true);
  }

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
