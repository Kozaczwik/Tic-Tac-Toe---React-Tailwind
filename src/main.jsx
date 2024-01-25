import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <div className='flex flex-col items-center justify-center w-full h-full mt-96'>
    <Board />
    </div>
  </React.StrictMode>
,
)
