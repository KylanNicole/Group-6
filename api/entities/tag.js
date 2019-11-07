import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
  } from 'typeorm';

  import Item from './item';
  
  @Entity()
  export default class Tag {
    
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    title

    @ManyToMany( () => Item, (item) => item.tag)
    item

  }
  