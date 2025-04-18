/* eslint-disable no-unused-vars */
import { useState } from "react";

const initalBoard = () => Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initalBoard());
  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center">
      <div className="mx-auto w-[calc(3*100px)]">
        <div className="mb-5 flex justify-between text-xl">
          Player X turn
          <button>Reset Game</button>
        </div>
        <div className="grid grid-cols-3">
          {board.map((_, index) => {
            return (
              <button className="cell" key={index}>
                X
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
