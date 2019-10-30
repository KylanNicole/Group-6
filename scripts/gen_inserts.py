import pandas as pd
from faker import Faker
fake = Faker()
fake.seed_instance(52)
f_name, l_name = fake.name().split(' ')

data = []
counter = 1
lst = ['id', 'street_name', 'street_num', 'zip', 'state', 'city']
for i in range(10):
    street, loc = (fake.address().split('\n'))
    print(street)
    street_num, street_name = street.split(' ')[0], " ".join(street.split(' ')[1:])
    print(loc)
    print(loc.split(',')[1].split(' '))
    city, state, zip_code = loc.split(',')[0], loc.split(',')[1].split(' ')[0], loc.split(',')[1].split(' ')[1]
    data.append([counter, street_name, street_num, zip_code, state, city])
    counter += 1
df = pd.DataFrame(data, columns=lst)
print(df)
