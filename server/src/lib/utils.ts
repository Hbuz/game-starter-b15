import Player from '../players/entity'

export interface Cell {
  cellPathNumber: number
  current: Player[]
  hiddenTrap: Trap
}

export interface Trap {
  id: number,
  name: string,
  desc: string
}

const noTrap: Trap = {
  id: 0,
  name: '',
  desc: ''
}
export const startingCell: Cell = {
  cellPathNumber: 1,
  current: [],
  hiddenTrap: noTrap
}

export type Dice = [number, number]
export type Board = Cell[][]

const path = (cellPathNumber: number, current: Player[], hiddenTrap: Trap): Cell => { return { cellPathNumber, current, hiddenTrap } }


const fieldingsCell: Cell = {
  cellPathNumber: 0,
  current: [],
  hiddenTrap: noTrap
}

const snake: Trap = {
  id: 1,
  name: 'snake',
  desc: 'Go back 5 cells'
}

const quicksand: Trap = {
  id: 2,
  name: 'quicksand',
  desc: 'Stop for 1 turn'
}

const shortcut: Trap = {
  id: 3,
  name: 'shortcut',
  desc: 'Go 3 cells ahead'
}


export const mainBoard: Board = [
  [path(1,[],noTrap), path(2,[],noTrap), path(3,[],noTrap),  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, path(4,[],shortcut),  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, path(5,[],noTrap),  path(6,[],snake),  path(7,[],noTrap),  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  path(8,[],noTrap),  fieldingsCell,  path(26,[],snake),  path(27,[],noTrap),   path(28,[],noTrap), path(29,[],quicksand)],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  path(9,[],noTrap),  fieldingsCell,  path(25,[],noTrap),  fieldingsCell,   fieldingsCell,   path(30,[],noTrap)],
  [fieldingsCell, fieldingsCell, path(12,[],noTrap), path(11,[],noTrap), path(10,[],quicksand), fieldingsCell,  path(24,[],shortcut),  path(23,[],noTrap),  fieldingsCell,   path(31,[],noTrap)],
  [fieldingsCell, fieldingsCell, path(13,[],snake), fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   path(22,[],noTrap),  fieldingsCell,   path(32,[],noTrap)],
  [fieldingsCell, fieldingsCell, path(14,[],noTrap), fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   path(21,[],noTrap),  fieldingsCell,   path(33,[],noTrap)],
  [fieldingsCell, fieldingsCell, path(15,[],noTrap), path(16,[],snake), path(17,[],shortcut), path(18,[],noTrap), path(19,[],quicksand),  path(20,[],noTrap),  fieldingsCell,   path(34,[],noTrap)],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   path(35,[],snake)],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   path(36,[],noTrap)],
]


export const rollDice = (): Dice => {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
}