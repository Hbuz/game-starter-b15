import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import Player from '../players/entity'
import { Board, mainBoard, Dice } from '../lib/utils'

// export type Symbol = 'x' | 'o'
// export type Row = [Symbol | null, Symbol | null, Symbol | null]
// export type Board = [Row, Row, Row]

type Status = 'pending' | 'started' | 'finished'


// const emptyRow: Row = [null, null, null]
// const emptyBoard: Board = [emptyRow, emptyRow, emptyRow]


@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json', { default: mainBoard })
  board: Board

  @Column('json', { nullable: true })
  dice: Dice

  /* @Column('char', { length: 1, default: 'x' })  //CHANGE ME
  turn: Symbol

  @Column('char', { length: 1, nullable: true })
  winner: Symbol */
  @Column({ nullable: true })
  turn: string

  @Column('json', { nullable: true })
  winner: Player

  @Column('text', { default: 'pending' })
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, { eager: true })
  players: Player[]
}
