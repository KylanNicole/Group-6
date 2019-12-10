# Steps to populate your db with fake data
1. edit the ~/api/ormconfig.json file and fill in your db info
2. create the database you have named in ~/api/ormconfig.json
3. execute `npm run fakedata
4. execute `npm run fakedata2
5. execute `npm run verify to make sure the math checks out between orders,
   order_items, and items
6. For postman testing, make sure that you do not add / alter the database as
   it may cause some of the tests to fail
