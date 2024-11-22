const { MongoClient } = require('mongodb');
const url =
  'mongodb+srv://asham:uzdAKNUN8O4JSLFF@lmtnodecluster.seouz.mongodb.net/';

const client = new MongoClient(url);
const dbName = 'HelloWorld';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//steps
//go to mondodb website
//create M0 cluster
//create a user
//get connection string
//install mongo db compass
// install mongodb npm package
//go to API docs to understand how to make use of mongodb ->
// https://mongodb.github.io/node-mongodb-native/

// username: ashamanoj7119;
// password: W3VN8sAZVxkrEzAk;
// URI : mongodb+srv://ashamanoj7119:W3VN8sAZVxkrEzAk@nodecluster.wagdi.mongodb.net/

//API ref https://mongodb.github.io/node-mongodb-native/6.8/
