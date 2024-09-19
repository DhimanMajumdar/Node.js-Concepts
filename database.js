const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
// -> mongodb+srv://dhiman:<db_password>@namastenode.besbt.mongodb.net/
const url =
  "mongodb+srv://dhiman:9ZMTMSrx4fUbEGYv@namastenode.besbt.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Deepika",
    lastname: "Padukone",
    city: "Mumbai",
    phoneNumber: "9876543200",
  };

  // Insert document
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  // Update document
//   const updateResult = await collection.updateOne(
//     { _id: new ObjectId("66e5e7dd568ca0c607bfe0a5") },
//     {
//       $set: {
//         phoneNumber: "00000",
//         city: "Delhi",
//       },
//     }
//   );
//   console.log("Updated documents =>", updateResult);

  // Delete/ Remove a Document
//   const deleteResult = await collection.deleteMany(
//     { _id: new ObjectId("66e5e7dd568ca0c607bfe0a5")},
//   );
//   console.log("Deleted documents =>", deleteResult);

  // Read -> Find all the documents
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

  // Count Documents
  const countResult=await collection.countDocuments({});
  console.log("Count of documents in the User Collection:",countResult);

  // Find all documents with a filter of firstname: Dhiman

//   const result=await collection.find({firstname:"Dhiman"}).toArray();
  const result=await collection.find({firstname:"Dhiman"}).count(); // find returns a cursor  
  console.log("result=>",result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a Database
// Install mongodb package
// Create a connection from code
// Documents - CRUD- Create , Read, Update, Delete
