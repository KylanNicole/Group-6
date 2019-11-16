/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Address from './address';
import Order from './order';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  firstname

  @Column({ type: 'varchar' })
  lastname

  @Column({ type: 'int' })
  permission

  @Column({ type: 'varchar'})
  email

  @Column({ type: 'varchar', nullable: false })
  password

  // it didn't show address column in user
  // @OneToOne(() => Address)
  // @JoinColumn()
  // address

  @OneToMany(() => Order, (order) => order.user, { eager: true})
  orders
}
