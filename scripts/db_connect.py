import MySQLdb

db_names = ["Evan", "Greg", "Anum", "Visal", "Cullen", "Kylan"]
db_name = db_names[0]

db = MySQLdb.connect(host="group-6-team-spice.cta8e6xoxc6y.us-east-1.rds.amazonaws.com",
        user="admin",
        passwd="teamspice",
        db=db_name)


def main():
    cur = db.cursor()
    print("successful connection")

if __name__ == '__main__':
  main()
