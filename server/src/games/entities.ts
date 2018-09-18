import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'
import { Cell, mainBoard } from '../lib/utils'

// export type Symbol = 'x' | 'o'
// export type Row = [Symbol | null, Symbol | null, Symbol | null]
// export type Board = [Row, Row, Row]

type Status = 'pending' | 'started' | 'finished'


// const emptyRow: Row = [null, null, null]
// const emptyBoard: Board = [emptyRow, emptyRow, emptyRow]


@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json', { default: mainBoard })
  board: Cell[][]

  /* @Column('char', { length: 1, default: 'x' })  //CHANGE ME
  turn: Symbol

  @Column('char', { length: 1, nullable: true })
  winner: Symbol */
  @Column()
  turn: Player

  @Column({ nullable: true })
  winner: Player

  @Column('text', { default: 'pending' })
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, { eager: true })
  players: Player[]
}

@Entity()
@Index(['game', 'user', 'avatar'], { unique: true })
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column()
  userId: number  //Username?

  @Column()
  avatar: string  //url to image
}
