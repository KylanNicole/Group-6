--make sure to change the name
USE Evan;

DROP TABLE IF EXISTS Category, Orders, Users, Address, OrderItem, Item; 

CREATE TABLE Address (
  id INTEGER PRIMARY KEY,
  street_name VARCHAR(50) NOT NULL,
  street_num INTEGER NOT NULL,
  zip INTEGER NOT NULL,
  state VARCHAR(2) NOT NULL,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE Users (
  id INTEGER PRIMARY KEY, -- auto incremented
  f_name VARCHAR(20) NOT NULL,
  l_name VARCHAR(20) NOT NULL,
  ccid INTEGER,
  aid INTEGER NOT NULL,
  email VARCHAR (50) NOT NULL,
  pass VARCHAR(50) NOT NULL,
  perms TINYINT,
  FOREIGN KEY (aid) REFERENCES Address(id) 
);

CREATE TABLE Item (
  id INTEGER PRIMARY KEY,
  unit_price FLOAT NOT NULL,
  stock INTEGER NOT NULL,
  description VARCHAR(500) NOT NULL,
  image VARCHAR(200) NOT NULL,
  category INTEGER NOT NULL
);

CREATE TABLE OrderItem (
  id INTEGER PRIMARY KEY,
  cost INTEGER NOT NULL,
  weight INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Category (
  id INTEGER PRIMARY KEY,
  tag VARCHAR(50) NOT NULL,
  item_id INTEGER NOT NULL,
  FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Orders (
  id INTEGER PRIMARY KEY,
  total_cost INTEGER NOT NULL,
  total_weight INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  status INTEGER NOT NULL,
  credit_card INTEGER NOT NULL,
  cust_id INTEGER NOT NULL,
  staff_id INTEGER NOT NULL,
  FOREIGN KEY (cust_id) REFERENCES Users(id),
  FOREIGN KEY (staff_id) REFERENCES Users(id),
  FOREIGN KEY (item_id) REFERENCES OrderItem(id)
);

