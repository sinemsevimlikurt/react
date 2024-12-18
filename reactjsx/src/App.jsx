import { useState } from 'react'
import "./App.css"
import Square from "./Square"
import calculateWinner from "./CalculateWinner"

function App() {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setisNext] = useState(true)
  const [colorStates, setColorStates] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    if(squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice()
    newSquares[index] = isNext ? 'X' : 'O'
    setSquares(newSquares)
    setisNext(!isNext)

    const nextColors = colorStates.slice();
    nextColors[index] = true;
    setColorStates(nextColors);
  }

  const winner = calculateWinner(squares)
  const status = winner ? `Player ${winner} wins!` : `Next player ${isNext ? 'X' : 'O'}`


  return (
    <div className="game">
      <div className="next">{status}</div>
      <div className="buttons">
        {squares.slice(0,3).map((value, index) => (
          <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          className={colorStates[index] ? "change" : ""}
          />
        ))}
      </div>
      <div className="buttons"> 
        {squares.slice(3,6).map((value, index) => (
          <Square
          key={index + 3}
          value={value}
          onClick={() => handleClick(index + 3)}
          className={colorStates[index + 3] ? "change" : ""}
          />
      ))}</div>
      <div className="buttons"> 
        {squares.slice(6,9).map((value, index) => (
          <Square
          key={index + 6}
          value={value}
          onClick={() => handleClick(index + 6)}
          className={colorStates[index + 6] ? "change" : ""}
          />
        ))}</div>
     <button
        className="resetbutton"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setisNext(true);
          setColorStates(Array(9).fill(false)); 
        }}
      >
        Reset
      </button>
</div>
  )
}

export default App
