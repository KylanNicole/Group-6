import pandas as pd
import random
from faker import Faker
import string

WRITE = 1

fake = Faker()
fake.seed_instance(123)
f_name, l_name = fake.name().split(' ')

# good as of 11-12
base_user = "INSERT INTO Users(firstname, lastname, permission, credit_card_number, address, email, password) VALUE(\"{}\", \"{}\", {}, {}, \"{}\", \"{}\", {});"
# good as of 11-12
base_address = "INSERT INTO Address(street_name, street_number, zip_code, state, city) VALUE(\"{}\", {}, {}, \"{}\", \"{}\");"
# good as of 11-12
base_order = "INSERT INTO Orders(total_cost, total_weight, order_status, user, staff) VALUE({}, {}, {}, {}, {});"
# good as of 11-12
base_order_item = "INSERT INTO OrderItem(cost, weight, order_id, item_id) VALUE({}, {}, {}, {});"
# need to update the gen function for item
base_item = "INSERT INTO Item(title, unit_price, stock, desciption, image, order_item, tag) VALUE(\"{}\", {}, {}, \"{}\", \"{}\", \"{}\", {});"
base_item_tag = "INSERT INTO Item_Tag(itemID, tagID) VALUES({}, {});"
base_tag = "INSERT INTO Tag(tag_id, item_id) VALUE(\"{}\", {});"

def write_db(file_name, df, sql_template):
    if WRITE:
        with open(file_name, 'w') as f:
            for ind in range(len(df)):
                curr = df.iloc[ind]
                f.write(sql_template.format(*curr))
                f.write('\n')

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
        data.append([f_name, l_name, perms, ccid, aid, email, pass_word])
    df = pd.DataFrame(data, columns=['f_name', 'l_name', 'perms', 'ccid', 'aid', 'email', 'pass'])
    return df

def generate_addresses():
    data = []
    for i in range(9):
        street, loc = (fake.address().split('\n'))
        street_num, street_name = street.split(' ')[0], " ".join(street.split(' ')[1:])
        city, state, zip_code = loc.split(',')[0], loc.split(',')[1].split(' ')[1], loc.split(',')[1].split(' ')[2]
        data.append([street_name, street_num, zip_code, state, city])
    df = pd.DataFrame(data, columns=['street_name', 'street_num', 'zip', 'state', 'city'])
    return df

def generate_orders():
    data = []
    random.seed(123)
    order_items = generate_order_items()
    for i in range(3):
        subset_order_items = order_items.iloc[i*3: (i+1) * 3]
        total_cost = sum(subset_order_items['cost'])
        total_weight = sum(subset_order_items['weight'])
        status = random.randint(0, 3)
        ccid = 123456789101112
        cust_id = random.randint(1, 4)
        staff_id = 6
        for j in range(len(subset_order_items)):
            data.append([total_cost, total_weight, status,
                ccid, cust_id, staff_id])
    df = pd.DataFrame(data, columns=['total_cost', 'total_weight', 'status', 'credit_card', 'cust_id', 'staff_id'])
    return df

def generate_order_items():
    data = []
    item = generate_items()
    counter = 0
    random.seed(123)
    for i in range(9):
        if i % 3 == 0:
            counter += 1
        item_ind = random.randint(0, len(item)) 
        rand_item = item.iloc[item_ind]
        weight = random.randint(10, 30)
        cost = rand_item['unit_price'] * weight
        item_id = item_ind+1
        data.append([cost, weight, item_id, counter])
    df = pd.DataFrame(data, columns=['cost', 'weight', 'order_id', 'item_id'])
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
    df = pd.DataFrame(data, columns=["name", "unit_price", "stock",
        "description", "image", "order_item", "category"])
    return df

def generate_tags():
    data = []
    tags = ["spicy", "salty", "peppery", "red", "umami", "sweet", "brown", "italian", "fresh", "coarse"]
    for i in range(9):
        id_val = i+1
        tag = tags[i]
        item_id = 0
        data.append([id_val, tag, item_id])
    df = pd.DataFrame(data, columns=['id', 'tag', 'item_id'])
    return df

def generate_item_tags():
    data = []
    item_df = generate_items()
    tag_df = generate_tags()
    for i in range(9):
        data.append([random.randint(len(item_df)),
            random.randint(len(tag_df))])
    df = pd.DataFrame(data, columns=['itemID', 'tagID'])
    return df

def main():
    write_db('sql_scripts/insert_address.sql', generate_addresses(), base_address)
    write_db('sql_scripts/insert_users.sql', generate_users(), base_user)
    write_db('sql_scripts/insert_categories.sql', generate_tags(),
            base_tag)
    write_db('sql_scripts/insert_items.sql', generate_items(), base_item)
    write_db('sql_scripts/insert_order_items.sql', generate_order_items(),
            base_order_item)
    write_db('sql_scripts/insert_orders.sql', generate_orders(), base_order)
    write_db('sql_scripts/insert_item_tags.sql', generate_item_tags(),
            base_item_tag)

if __name__ == '__main__':
    main()
