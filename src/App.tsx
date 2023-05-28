import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [gameOver, setGameOver] = useState<boolean>(false)

  return (
    <>
    <h2>Welcome to Tic Tac Toe Game</h2>
    <Board/>
    {gameOver ? <button>Play Again</button>  :  null}
    </>
  )
}

export default App
