import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Ticket extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column('numeric', { precision: 5, scale: 2 })
  price: number

  @Column('text')
  description: string

  @Column('text', { nullable: true })
  image: string
  
  
}