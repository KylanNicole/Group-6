import pandas as pd
import random
from faker import Faker
import string

WRITE = 1

fake = Faker()
fake.seed_instance(123)
f_name, l_name = fake.name().split(' ')

base_user = "INSERT INTO Users(f_name, l_name, ccid, aid, email, pass, perms) VALUE(\"{}\", \"{}\", {}, {}, \"{}\", \"{}\", {});"
base_address = "INSERT INTO Address(street_name, stree_num, zip, state, city) VALUE(\"{}\", {}, {}, \"{}\", \"{}\");"
base_category = "INSERT INTO Category(tag, item_id) VALUE(\"{}\", {});"
base_item = "INSERT INTO Item(name, unit_price, stock, desciption, image, category) VALUE(\"{}\", {}, {}, \"{}\", \"{}\", {});"
base_order_item = "INSERT INTO OrderItem(cost, weight, item_id) VALUE({}, {}, {});"
base_order = "INSERT INTO Orders(total_cost, total_weight, item_id, status, credit_card, cust_id, staff_id) VALUE({}, {}, {}, {}, {}, {}, {});"
lst = ['id', 'street_name', 'street_num', 'zip', 'state', 'city']

def write_db(file_name, df, sql_template):
    if WRITE:
        with open(file_name, 'w') as f:
            for ind in range(len(df)):
                curr = df.iloc[ind]
                f.write(sql_template.format(*curr))
                f.write('\n')

def generate_addresses():
    data = []
    counter = 1
    for i in range(9):
        street, loc = (fake.address().split('\n'))
        street_num, street_name = street.split(' ')[0], " ".join(street.split(' ')[1:])
        city, state, zip_code = loc.split(',')[0], loc.split(',')[1].split(' ')[1], loc.split(',')[1].split(' ')[2]
        data.append([counter, street_name, street_num, zip_code, state, city])
        counter += 1
    df = pd.DataFrame(data, columns=lst)
    return df

def generate_users():
    data = []
    random.seed(123)
    for i in range(9):
        name = fake.name()
        f_name, l_name = name.split(' ')
        aid = i
        ccid = 123456789101112
        email = f_name[0]+l_name+"@gmail.com"
        pass_word = ''.join(random.choice(string.ascii_lowercase) for i in range(10))
        if i > 7:
            perms = 2
        elif i >= 5:
            perms = 1
        else:
            perms = 0
        data.append([f_name, l_name, ccid, aid, email, pass_word, perms])
    df = pd.DataFrame(data, columns=['f_name', 'l_name', 'ccid', 'aid', 'email', 'pass', 'perms'])
    return df

def generate_categories():
    data = []
    tags = ["spicy", "salty", "peppery", "red", "umami", "sweet", "brown", "italian", "fresh", "coarse"]
    for i in range(9):
        id_val = i+1
        tag = tags[i]
        item_id = 0
        data.append([id_val, tag, item_id])
    df = pd.DataFrame(data, columns=['id', 'tag', 'item_id'])
    return df

def generate_items():
    data = []
    alpha = string.ascii_lowercase
    random.seed(123)
    for i in range(9):
        name = "spice_{}".format(alpha[i])
        unit_price = random.randint(10, 20)
        stock = random.randint(100, 500)
        description = "description of spice_{}".format(alpha[i])
        image = "image of spice_{}".format(alpha[i])
        category = random.randint(1, 10)
        data.append([name, unit_price, stock, description, image, category])
    df = pd.DataFrame(data, columns=["name", "unit_price", "stock", "description", "image", "category"])
    return df

def generate_order_items():
    data = []
    item = generate_items()
    random.seed(123)
    for i in range(9):
        item_ind = random.randint(0, len(item)) 
        rand_item = item.iloc[item_ind]
        weight = random.randint(10, 30)
        cost = rand_item['unit_price'] * weight
        item_id = item_ind+1
        data.append([cost, weight, item_id])
    df = pd.DataFrame(data, columns=['cost', 'weight', 'item_id'])
    return df

def generate_orders():
    data = []
    random.seed(123)
    order_items = generate_order_items()
    for i in range(3):
        subset_order_items = order_items.iloc[i*3: (i+1) * 3]
        print(subset_order_items)
        total_cost = sum(subset_order_items['cost'])
        total_weight = sum(subset_order_items['weight'])
        status = random.randint(0, 3)
        ccid = 123456789101112
        cust_id = random.randint(1, 4)
        staff_id = 6
        for j in range(len(subset_order_items)):
            item_order_ind = j + i*3
            data.append([total_cost, total_weight, item_order_ind, status,
                ccid, cust_id, staff_id])
    df = pd.DataFrame(data, columns=['total_cost', 'total_weight', 'item_id', 'status', 'credit_card', 'cust_id', 'staff_id'])
    return df

def main():
    write_db('sql_scripts/insert_address.sql', generate_addresses(), base_address)
    write_db('sql_scripts/insert_users.sql', generate_users(), base_user)
    write_db('sql_scripts/insert_categories.sql', generate_categories(),
            base_category)
    write_db('sql_scripts/insert_items.sql', generate_items(), base_item)
    write_db('sql_scripts/insert_order_items.sql', generate_order_items(),
            base_order_item)
    write_db('sql_scripts/insert_orders.sql', generate_orders(), base_order)

if __name__ == '__main__':
    main()
