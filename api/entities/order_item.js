/* eslint-disable import/no-cycle */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
  } from 'typeorm';
  import Order from './order';
  import Item from './item';

  
  @Entity()
  export default class Order_Item {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'float' })
    cost
  
    @Column({ type: 'float' })
    weight
  
  
    @ManyToOne( () => Order, (order) => order.Order_Item)
    order

    @ManyToOne( () => Item, (item) => item.Order_Item )
    item

  }
  