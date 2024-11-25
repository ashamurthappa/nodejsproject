const { MongoClient, MongoServerError } = require('mongodb');
const url = 'mongodb+srv://ashamanoj7119:FyAKetEd.gi7w4J@nodecluster.wagdi.mongodb.net/'

const client = new MongoClient(url);
const dbName = 'HelloWorld';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  //insert to a document
  const data = {
    firstname : "Shwetha",
    lastname : "Raju",
    city: "Tarikere1",
    phonenumber: "1235461111"
  }
  //const insertResult = await collection.insertOne(data);

  //Update to a document
  //const updateResult = await collection.updateOne({ firstname: 'Dhanvish' }, { $set: { lastname: 'Asha' } });
  //console.log('Updated documents =>', updateResult);

  //delete from the document
  //const deleteResult = await collection.deleteMany({ firstname: 'Dhanvish' });


  //find a document
  const findResult = await collection.find({}).toArray();
  //console.log('Found documents =>', findResult);

  //count the documents
  const countResults =  await collection.countDocuments({});
  console.log("count the total results::", countResults)

  //filter the documents based on condition
  const filterDocuments = await collection.find({firstname: 'Shwetha'}).toArray()
  console.log("Filter the results on conditions::", filterDocuments.length)


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


