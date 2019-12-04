/* eslint-disable import/no-cycle */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import Order_Item from './order_item';
  import Tag from './tag';
  
  @Entity()
  export default class Item {
    @PrimaryGeneratedColumn()
    id

    @Column( { type: 'varchar' })
    title
  
    @Column({ type: 'float' })
    unit_price
  
    @Column({ type: 'float' })
    stock
  
    @Column({ type: 'varchar' })
    description
  
    @Column({ type: 'varchar' })
    image
  
    @OneToMany( () => Order_Item, (order_item) => order_item.item )
    order_item

    @ManyToMany( () => Tag, (tag) => tag.item)
    @JoinTable()
    tag

    // @OneToMany(() => ToDo, (todo) => todo.user, { eager: true })
    // todos
  }
  
