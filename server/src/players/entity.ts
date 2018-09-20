import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, ManyToOne } from 'typeorm'
import User from '../users/entity'
import Game from '../games/entity'
// import { Cell } from '../lib/utils'

@Entity()
@Index(['game', 'user', 'avatar'], { unique: true })
export default class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column({ nullable: true })
  userId: number 

  @Column()
  playerNumber: string   //player1||player2

  @Column()
  currentCell: number

  @Column()
  avatar: string  //url to image

  @Column({ nullable: true })
  trap: string
}