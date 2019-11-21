import MySQLdb
import os
import config

db = MySQLdb.connect(host=config.db_endpoint,
        user=config.db_user,
        passwd=config.db_pass,
        db=config.db_name)

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

