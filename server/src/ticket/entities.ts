import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Event from '../events/entities'
import User from '../users/entity'

@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column('numeric', { precision: 5, scale: 2 })
  price: number

  @OneToMany(type => Comment, comment => comment.ticket, {
    eager: true
})
comments: Comment[];

  @Column('text')
  description: string

  @Column('text', { nullable: true })
  image: string
  
  @Column("int", { nullable: true })
  event_id: number;

  @ManyToOne(type => Event, event => event.tickets)
  @JoinColumn({ name: "event_id" })
  event: Event
}
  
@Entity()
export class Comment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  body: string

  @ManyToOne(type => User, user => user.comments)
  user: User

  @ManyToOne(type => Ticket, ticket => ticket.comments)
  ticket: Ticket

}