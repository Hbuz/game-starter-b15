import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Ticket from '../ticket/entities'

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @Column('text', {nullable: true})
  description: string
  
  @Column('text', {nullable:false})
  From: string

  @Column('text', {nullable: true})
  To: string
  

  @OneToMany(type => Ticket, ticket => ticket.event, {
    eager: true
})
tickets?: Ticket[];
  
}