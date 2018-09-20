import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import Player from '../players/entity'
import { Board, mainBoard, Dice } from '../lib/utils'

type Status = 'pending' | 'started' | 'finished'


@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json', { default: mainBoard })
  board: Board

  @Column('json', { nullable: true })
  dice: Dice

  @Column({ nullable: true })
  turn: number

  @Column('json', { nullable: true })
  winner: Player

  @Column('text', { default: 'pending' })
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, { eager: true })
  players: Player[]
}
