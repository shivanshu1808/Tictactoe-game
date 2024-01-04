import './style.scss';
import {useState} from 'react';
import Board from './Components/Board';
 import { calculateWinner } from './Components/winner';

function App() {

   

  const[squares, setSquares]= useState(Array(9).fill(null));
    const[isXNext , setXNext] = useState(false);


    const winner = calculateWinner(squares);
    const nextPlayer= isXNext ? 'X' : '0';
    const statusMessage = winner ? `Winner is ${winner}` : `Next Player is ${nextPlayer}`;
    const handleSquareClick = clickedPosition =>{
              
      if (squares[clickedPosition] || winner) {
         return;
      }

       setSquares((currentSquares)=>{
              
           return currentSquares.map((SquareValue,position )=>{
                if(clickedPosition === position){
                   return  isXNext ? 'X' : '0';
                }
                return SquareValue;
           })

       })
        setXNext((currentIsXNext)=> !currentIsXNext)
  };
  return (
    
      <div className='app' >
      <h2> {statusMessage} </h2>
        <Board squares={squares} handleSquareClick ={handleSquareClick}/>
      </div>
      
      
    
  )
}

export default App
