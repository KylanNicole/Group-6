import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity()
  export default class Announcement {
    
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    title

    @Column({ type: 'varchar' })
    description

    @Column({ type: 'varchar' })
    link

    @Column({ type: 'varchar' })
    color 

  }
  