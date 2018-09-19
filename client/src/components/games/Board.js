import React from 'react'
import './Board.css'
import img from '../../images/snake.ico'


const renderCel = (rowIndex, cellIndex, cell, hasTurn) => {
  const a1 = cell.current[0] ? 'P1' : ''
  const a2 = cell.current[1] ? 'P2' : ''
  return (

    <div
      className="board-tile"
      disabled={hasTurn}
      key={`${rowIndex}-${cellIndex}`}
    >
      {cell.cellPathNumber ? <div className="board-style">
        {cell.cellPathNumber}
        {cell.current.map(player => {
          let good = ''
          // if (typeof player.avatar === 'object') {
          //   const k = Object.keys(player.avatar)
          //   console.log(player.avatar[k])
          //   const kk = Object.keys((player.avatar[k]))
          //   const kkk = Object.keys((player.avatar[k][kk]))
          //   good = k + '.' + kk + '.' + kkk
          // } else if (typeof player.avatar === 'string') {
          //   const parsed = JSON.parse(player.avatar)
          //   console.log("PARSED: " + JSON.stringify(parsed))
          //   const k = Object.keys(parsed)
          //   console.log(k)
          //   const kk = Object.keys((parsed[k]))
          //   console.log(kk)
          //   const kkk = Object.keys((parsed[k][kk]))
          //   good = k + '.' + kk + '.' + kkk
          // }
          if (typeof player.avatar === 'string') {
            good = getMedia(JSON.parse(player.avatar))
          } else {
            good = getMedia(player.avatar)
          }

          return (<div className="board-style-img">
            <img src={good} />
          </div>)
        }

        )}
      </div>
        : <div></div>}
      {cell.cellPathNumber === 13 ? <div className="board-style-img">{cell.cellPathNumber}<img src={img} /> <span>{a1}</span><span>{a2}</span></div> : <div></div>}
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