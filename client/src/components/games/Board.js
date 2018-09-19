import React from 'react'
import './Board.css'
import img from '../../images/snake.ico'
import player1 from '../../images/player1.png'
import player2 from '../../images/player2.png'


const renderCel = (makeMove, rowIndex, cellIndex, cell, hasTurn) => {

 const a1 = cell.current[0]?'P1':''
 const a2 = cell.current[1]?'P2':''
  return (
    
    <div
      className="board-tile"
      disabled={hasTurn}
      key={`${rowIndex}-${cellIndex}`}
    >
    {cell.cellPathNumber ? <div className="board-style">{cell.cellPathNumber} <span>{a1}</span><span>{a2}</span></div> : <div></div>}
    {cell.cellPathNumber===13 ? <div className="board-style-snake">{cell.cellPathNumber}<img src={img}/> <span>{a1}</span><span>{a2}</span></div> : <div></div>}

    {cell.current.includes('player1')? <div className="board-style-player1">{cell.cellPathNumber}<img src={player1}/> <span>{a1}</span><span>{a2}</span></div> : <div></div>}
    {cell.current.includes('player2')? <div className="board-style-player2">{cell.cellPathNumber}<img src={player2}/> <span>{a1}</span><span>{a2}</span></div> : <div></div>}
   
   </div>
)
}

const b =[[{"cellPathNumber":1,"current":[{},{}],"hiddenTrap":""},{"cellPathNumber":2,"current":[],"hiddenTrap":""},{"cellPathNumber":3,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":4,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":5,"current":[],"hiddenTrap":""},{"cellPathNumber":6,"current":[],"hiddenTrap":""},{"cellPathNumber":7,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":8,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":26,"current":[],"hiddenTrap":""},{"cellPathNumber":27,"current":[],"hiddenTrap":""},{"cellPathNumber":28,"current":[],"hiddenTrap":""},{"cellPathNumber":29,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":9,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":25,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":30,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":12,"current":[],"hiddenTrap":""},{"cellPathNumber":11,"current":[],"hiddenTrap":""},{"cellPathNumber":10,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":24,"current":[],"hiddenTrap":""},{"cellPathNumber":23,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":31,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":13,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":22,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":32,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":14,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":21,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":33,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":15,"current":[],"hiddenTrap":""},{"cellPathNumber":16,"current":[],"hiddenTrap":""},{"cellPathNumber":17,"current":[],"hiddenTrap":""},{"cellPathNumber":18,"current":[],"hiddenTrap":""},{"cellPathNumber":19,"current":[],"hiddenTrap":""},{"cellPathNumber":20,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":34,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":35,"current":[],"hiddenTrap":""}],[{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":0,"current":[],"hiddenTrap":""},{"cellPathNumber":36,"current":[],"hiddenTrap":""}]]

export default ({board, makeMove}) => b.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((cell, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,cell,false))}
  </div>
)
