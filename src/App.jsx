import './style.scss';
import {useState} from 'react';
import Board from './Components/Board';
import StatusMessage from './Components/statusMessage';
 import { calculateWinner } from './Components/winner';

function App() {

   

  const[squares, setSquares]= useState(Array(9).fill(null));
    const[isXNext , setXNext] = useState(false);


    const winner = calculateWinner(squares);
   
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
      <h2> {StatusMessage} </h2>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
        <Board squares={squares} handleSquareClick ={handleSquareClick}/>
      </div>
      
      
    
  )
}

export default App
