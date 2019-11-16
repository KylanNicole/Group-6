# Populating your database
1. As a developer, you will have to adjust two files in order to connect to your
database. Your name will be the name of the database. In
~/scripts/db_connect.py, edit the variable, YOUR_NAME_HERE and db_name. The
assert statement will break out of the script if you don't put down your name.
In the second file in ~/api/ormconfig.json, edit the database name to your name
as well so that type orm can automatically populate your database with the
correct tables. In order to create your tables, run `npm run serve in the api folder.
2. If the ~/scripts/sql_scripts folder is empty, run `python3 gen_inserts.py.
   If your sql_scripts folder is populated with 6 sql scripts, then run python
(python 2.7, not 3) `python db_connect.py. Let me know (Evan) if there are any
errors that pop up.
3. Have fun with your own db! Please don't work on anybody else's database
