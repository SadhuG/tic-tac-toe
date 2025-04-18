import useTicTacToe from "../hooks/useTocTacToe";

const TicTacToe = () => {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 font-mono text-white">
      <div className="mx-auto w-[calc(3*100px)]">
        <div className="mb-5 flex items-center justify-between text-lg font-semibold text-gray-100">
          <span>{getStatusMessage()}</span>
          <button
            onClick={resetGame}
            className="rounded-md bg-purple-700 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-purple-600 active:scale-95"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {board.map((b, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
              className="flex h-[100px] w-[100px] items-center justify-center rounded-md border border-gray-700 bg-gray-900 text-3xl font-bold text-purple-400 transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TicTacToe;
