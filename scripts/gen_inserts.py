import pandas as pd
from faker import Faker
import string

WRITE = 0

fake = Faker()
fake.seed_instance()
f_name, l_name = fake.name().split(' ')

counter = 1
base_user = "INSERT INTO Users(f_name, l_name, ccid, aid, email, pass, perms) VALUE(\"{}\", \"{}\", {}, {}, \"{}\", \"{}\", {});"
base_address = "INSERT INTO Address(street_name, stree_num, zip, state, city) VALUE(\"{}\", {}, {}, \"{}\", \"{}\");"
lst = ['id', 'street_name', 'street_num', 'zip', 'state', 'city']

def generate_addresses():
    data = []
    for i in range(9):
        street, loc = (fake.address().split('\n'))
        street_num, street_name = street.split(' ')[0], " ".join(street.split(' ')[1:])
        print(loc)
        print(loc.split(',')[1].split(' '))
        city, state, zip_code = loc.split(',')[0], loc.split(',')[1].split(' ')[1], loc.split(',')[1].split(' ')[2]
        data.append([counter, street_name, street_num, zip_code, state, city])
        counter += 1
    df = pd.DataFrame(data, columns=lst)
    return df

def generate_users():
    data = []
    for i in range(9):
        f_name, l_name = fake.name().split(' ')
        aid = i
        ccid = 123456789101112
        email = f_name[0]+l_name+"@gmail.com"
        pass_word = ''.join(random.choice(string.ascii_lowercase) for i in range(10))
        perms=0
        data.append([f_name, l_name, ccid, aid, email, pass_word, perms])
    df = pd.DataFrame(data, colums=['f_name', 'l_name', 'ccid', 'aid', 'email', 'pass', 'perms'])
    if WRITE:
        with open('sql_scripts/insert_users.sql', 'w') as f:
            for ind in range(len(df)):
                curr = df.iloc[ind]
                insert_statement = base_user.format(curr['f_name'], curr['l_name'], curr['ccid'], curr['aid'], curr['email'], curr['pass'], curr['perms'])
                f.write(insert_statement)
                f.write('\n')

# writing data
if WRITE:
    with open('sql_scripts/insert_address.sql', 'w') as f:
        df = generate_addresses()
        for ind in range(len(df)):
            curr = df.iloc[ind]
            insert_statement = base_address.format(curr['street_name'], curr['street_num'], curr['zip'], curr['state'], curr['city'])
            f.write(insert_statement)
            f.write('\n')
