/* eslint-disable import/no-cycle */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
  } from 'typeorm';
  import Order_Item from './order_item';
  import Tag from './tag';
  
  @Entity()
  export default class Item {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'int' })
    unit_price
  
    @Column({ type: 'int' })
    stock
  
    @Column({ type: 'varchar' })
    description
  
    @Column({ type: 'varchar' })
    image
  
  
    @OneToMany( () => Order_Item, (order_item) => order_item.item )
    order_item

    @ManyToMany( () => Tag, (tag) => tag.item)
    tag

    // @OneToMany(() => ToDo, (todo) => todo.user, { eager: true })
    // todos
  }
  