import { Player } from '../games/entities'

export interface Cell {
  id: number
  current: Player[]
  hiddenTrap: string
}

const path = (id: number, current: Player[], hiddenTrap: string): Cell => { return { id, current, hiddenTrap } }


const fieldingsCell: Cell = {
  id: 0,
  current: [],
  hiddenTrap: ''
}

export const mainBoard: Cell[][] = [
  [path(1,[],''), path(2,[],''), path(3,[],''),  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, path(4,[],''),  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, path(5,[],''),  path(6,[],''),  path(7,[],''),  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   fieldingsCell],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  path(8,[],''),  fieldingsCell,  path(26,[],''),  path(27,[],''),   path(28,[],''), path(29,[],'')],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  path(9,[],''),  fieldingsCell,  path(25,[],''),  fieldingsCell,   fieldingsCell,   path(30,[],'')],
  [fieldingsCell, fieldingsCell, path(12,[],''), path(11,[],''), path(10,[],''), fieldingsCell,  path(24,[],''),  path(23,[],''),  fieldingsCell,   path(31,[],'')],
  [fieldingsCell, fieldingsCell, path(13,[],''), fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   path(22,[],''),  fieldingsCell,   path(32,[],'')],
  [fieldingsCell, fieldingsCell, path(14,[],''), fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   path(21,[],''),  fieldingsCell,   path(33,[],'')],
  [fieldingsCell, fieldingsCell, path(15,[],''), path(16,[],''), path(17,[],''), path(18,[],''), path(19,[],''),  path(20,[],''),  fieldingsCell,   path(34,[],'')],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   path(35,[],'')],
  [fieldingsCell, fieldingsCell, fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,  fieldingsCell,   fieldingsCell,   fieldingsCell,   path(36,[],'')],
]
