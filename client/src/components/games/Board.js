import React from 'react'
import './Board.css'
import img from '../../images/snake.ico'


const renderCel = (rowIndex, cellIndex, cell, hasTurn) => {
  return (

    <div
      className="board-tile"
      disabled={hasTurn}
      key={`${rowIndex}-${cellIndex}`}
    >
      {cell.cellPathNumber ? <div className="board-style">
        {cell.cellPathNumber}
        {cell.current.map(player => {
          let playerImage = ''
          if (typeof player.avatar === 'string') {
            playerImage = getMedia(JSON.parse(player.avatar))
          } else {
            playerImage = getMedia(player.avatar)
          }

          return (<div className="board-style-img">
            <img src={playerImage} />
          </div>)
        }

        )}
      </div>
        : <div></div>}
      {cell.cellPathNumber === 13 ? <div className="board-style-img">{cell.cellPathNumber}<img src={img} /> </div> : <div></div>}
    </div>
  )
}

const b = [[{ "cellPathNumber": 1, "current": [{}, {}], "hiddenTrap": "" }, { "cellPathNumber": 2, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 3, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 4, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 5, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 6, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 7, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 8, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 26, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 27, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 28, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 29, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 9, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 25, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 30, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 12, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 11, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 10, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 24, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 23, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 31, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 13, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 22, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 32, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 14, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 21, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 33, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 15, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 16, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 17, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 18, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 19, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 20, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 34, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 35, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 36, "current": [], "hiddenTrap": "" }]]

export default ({ board }) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((cell, cellIndex) => renderCel(rowIndex, cellIndex, cell, false))}
  </div>
)


const getMedia = (avatar) => {
  const k = Object.keys(avatar)
  const kk = Object.keys((avatar[k]))
  const kkk = Object.keys((avatar[k][kk]))
  return k + '.' + kk + '.' + kkk
}