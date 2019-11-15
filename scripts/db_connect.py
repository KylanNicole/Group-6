import MySQLdb
import os

# edit this variable too
YOUR_NAME_HERE = "Evan"
db_names = ["Evan", "Greg", "Anum", "Visal", "Cullen", "Kylan"]
# edit this variable
db_name = "Evan"
assert db_name == YOUR_NAME_HERE

db = MySQLdb.connect(host="group6-db.cta8e6xoxc6y.us-east-1.rds.amazonaws.com",
        user="admin",
        passwd="teamspice",
        db=db_name)

def main():
    cur = db.cursor()
    print('successful connection')
    upload_data(cur)

def upload_data(cursor):
    for sql_script in ['user', 'order_', 'item', 'order__item', 'tag', 'item_join_tag']:
        print('reading {}'.format(sql_script))
        with open('sql_scripts/insert_{}.sql'.format(sql_script), 'r') as f:
            for line in f:
                print('executing line: ', line)
                cursor.execute(line)
            db.commit()

if __name__ == '__main__':
  main()

