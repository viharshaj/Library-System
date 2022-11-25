import mongoose from "mongoose";

  //Database
const client = mongoose.connect("mongodb://127.0.0.1:27017/librarydb");
if (client) {
  client.then((res) => {
    console.log("Database Connected",res.connection.db.databaseName);
  })
}
const Database = mongoose.connection;

 export { client, Database };