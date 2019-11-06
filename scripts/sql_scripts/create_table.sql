--make sure to change the name
USE Evan;

DROP TABLE IF EXISTS Category, Orders, Users, Address, OrderItem, Item; 

CREATE TABLE Address ( --written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  street_name VARCHAR(50) NOT NULL,
  street_num INTEGER NOT NULL,
  zip INTEGER NOT NULL,
  state VARCHAR(2) NOT NULL,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE Users ( -- written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT, -- auto incremented
  f_name VARCHAR(20) NOT NULL,
  l_name VARCHAR(20) NOT NULL,
  ccid INTEGER,
  aid INTEGER NOT NULL,
  email VARCHAR (50) NOT NULL,
  pass VARCHAR(50) NOT NULL,
  perms TINYINT,
  FOREIGN KEY (aid) REFERENCES Address(id) 
);

CREATE TABLE Item ( --written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name, VARCHAR(50) NOT NULL,
  unit_price FLOAT NOT NULL,
  stock INTEGER NOT NULL,
  description VARCHAR(500) NOT NULL,
  image VARCHAR(200) NOT NULL,
  category INTEGER NOT NULL,
  FOREIGN KEY (category) REFERENCES Category(id)
);

CREATE TABLE OrderItem ( --written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  cost INTEGER NOT NULL,
  weight INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Category ( -- written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  tag VARCHAR(50) NOT NULL,
  item_id INTEGER NOT NULL,
  FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Orders ( -- written out
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  total_cost INTEGER NOT NULL,
  total_weight INTEGER NOT NULL,
  -- every order item id gets a row in orders
  item_id INTEGER NOT NULL,
  status INTEGER NOT NULL,
  credit_card INTEGER NOT NULL,
  cust_id INTEGER NOT NULL,
  staff_id INTEGER NOT NULL,
  FOREIGN KEY (cust_id) REFERENCES Users(id),
  FOREIGN KEY (staff_id) REFERENCES Users(id),
  FOREIGN KEY (item_id) REFERENCES OrderItem(id)
);

