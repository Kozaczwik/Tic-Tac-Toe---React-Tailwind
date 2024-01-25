import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
      return (
        <button  onClick={handleClick} 
        className='font-extrabold text-black border border-solid font-mono square border-blue-500 w-52 h-32'  > 

        {value}
        </button>
      )

}
export default function Board() {
  return (
    <>

      <div className="board-row">
        
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square /> 
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        </div>

    </>
  );
}

