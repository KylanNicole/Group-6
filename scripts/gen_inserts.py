import pandas as pd
import random
from faker import Faker
import string

WRITE = 1

fake = Faker()
fake.seed_instance(123)
f_name, l_name = fake.name().split(' ')

# good as of 11-12
base_user = "INSERT user(firstname, lastname, permission, email, password) VALUE(\"{}\", \"{}\", {}, \"{}\", \"{}\");"
# good as of 11-12
base_order = "INSERT INTO order_(total_cost, total_weight, order_status, userId, staff_id, address) VALUE({}, {}, {}, {}, {}, \"{}\");"
# good as of 11-12
base_order_item = "INSERT INTO order__item(cost, weight, orderId, itemId) VALUE({}, {}, {}, {});"
# need to update the gen function for item
base_item = "INSERT INTO item(title, unit_price, stock, description, image) VALUE(\"{}\", {}, {}, \"{}\", \"{}\");"
base_item_tag = "INSERT INTO item__tags_tag(itemId, tagId) VALUES({}, {});"
base_tag = "INSERT INTO tag(title) VALUE(\"{}\");"

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
        data.append([f_name, l_name, perms, email, pass_word])
    data.append(["admin", "admin", 0, "admin", "pass"])
    df = pd.DataFrame(data, columns=['f_name', 'l_name', 'perms', 'email', 'pass'])
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
        cust_id = random.randint(1, 4)
        staff_id = 6
        for j in range(len(subset_order_items)):
            data.append([total_cost, total_weight, status, cust_id, staff_id, ' '.join(fake.address().split('\n'))])
    df = pd.DataFrame(data, columns=['total_cost', 'total_weight', 'status', 'cust_id', 'staff_id', 'address'])
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
        data.append([name, unit_price, stock, description, image])
    df = pd.DataFrame(data, columns=["name", "unit_price", "stock", "description", "image"])
    return df

def generate_tags():
    data = []
    tags = ["spicy", "salty", "peppery", "red", "umami", "sweet", "brown", "italian", "fresh", "coarse"]
    for i in range(9):
        tag = tags[i]
        item_id = 0
        data.append([tag])
    df = pd.DataFrame(data, columns=['tag'])
    return df

def generate_join_tag():
    data = []
    item_df = generate_items()
    tag_df = generate_tags()
    random.seed(456)
    for i in range(9):
        data.append([random.randint(1, len(item_df)),
            random.randint(1, len(tag_df))])
    df = pd.DataFrame(data, columns=['itemID', 'tagID'])
    return df

def main():
    write_db('sql_scripts/insert_user.sql', generate_users(), base_user)
    write_db('sql_scripts/insert_tag.sql', generate_tags(),
            base_tag)
    write_db('sql_scripts/insert_item.sql', generate_items(), base_item)
    write_db('sql_scripts/insert_order__item.sql', generate_order_items(),
            base_order_item)
    write_db('sql_scripts/insert_order_.sql', generate_orders(), base_order)
    write_db('sql_scripts/insert_item_join_tag.sql', generate_join_tag(),
            base_item_tag)

if __name__ == '__main__':
    main()
