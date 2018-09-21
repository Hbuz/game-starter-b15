import React from 'react'
import './Board.css'
import snake from '../../images/snake.ico'
import quicksand from '../../images/quicksand.png'
import {getMedia} from '../../lib/utils'
import treasure from '../../images/treasure.png'
import shortcut from '../../images/shortcut.png'


const renderCel = (rowIndex, cellIndex, cell, hasTurn) => {
  return (

    <div
      className="board-tile"
      disabled={hasTurn}
      key={`${rowIndex}-${cellIndex}`}
    >
      {cell.cellPathNumber ? <div className="board-style">
        <strong>{cell.cellPathNumber}</strong>
        {cell.current.map(player => {
          // let playerImage = ''
          // if (typeof player.avatar === 'string') {
          //   playerImage = getMedia(JSON.parse(player.avatar))
          // } else {
          //   playerImage = getMedia(player.avatar)
          // }
          const playerImage = typeof player.avatar === 'string' ? getMedia(JSON.parse(player.avatar)) : getMedia(player.avatar)
          
          return (<div className="board-style-img">
            <img src={playerImage} />
          </div>)
        
        }
        
        )}
      </div>
        : <div></div>}
      {cell.hiddenTrap.id === 1 ? <div className="board-style-img"><img src={snake} /> </div> : <div></div>}
      {cell.hiddenTrap.id === 2 ? <div className="board-style-img"><img src={quicksand} /> </div> : <div></div>}
      {cell.hiddenTrap.id === 3 ? <div className="board-style-img"><img src={shortcut} /> </div> : <div></div>}
      {cell.cellPathNumber === 36 ? <div className="board-style-final"><img src={treasure} /> </div> : <div></div>}
   
    </div>
  )
}

// const b = [[{ "cellPathNumber": 1, "current": [{}, {}], "hiddenTrap": "" }, { "cellPathNumber": 2, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 3, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 4, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 5, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 6, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 7, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 8, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 26, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 27, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 28, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 29, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 9, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 25, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 30, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 12, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 11, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 10, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 24, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 23, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 31, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 13, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 22, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 32, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 14, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 21, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 33, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 15, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 16, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 17, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 18, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 19, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 20, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 34, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 35, "current": [], "hiddenTrap": "" }], [{ "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 0, "current": [], "hiddenTrap": "" }, { "cellPathNumber": 36, "current": [], "hiddenTrap": "" }]]

export default ({ board }) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((cell, cellIndex) => renderCel(rowIndex, cellIndex, cell, false))}
  </div>
)


/* const getMedia = (avatar) => {
  const url = Object.keys(avatar)
  const code = Object.keys((avatar[url]))
  const ext = Object.keys((avatar[url][code]))
  return url + '.' + code + '.' + ext
} */