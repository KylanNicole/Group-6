/* eslint-disable import/no-cycle */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
  } from 'typeorm';
  import User from './user';
  
  @Entity()
  export default class Address {
    @PrimaryGeneratedColumn()
    id
    
    @Column({ type: 'varchar' })
    street_name
  
    @Column({ type: 'varchar' })
    street_number
  
    @Column({ type: 'int' })
    zip_code
  
    @Column({ type: 'varchar' })
    state

    @Column({ type: 'varchar' })
    city 
  
    @OneToOne(() => User, (user) => user.address )
    user
  }
  