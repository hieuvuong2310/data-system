const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    console.log('in connection')
    console.log(Db)
    console.log(client)
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      console("in conn")
      if (db) {
        _db = db.db("sample_training");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};

// const { MongoClient } = require("mongodb");

// // Replace the following with your Atlas connection string
// const url = process.env.ATLAS_URI;

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// async function connectToServer() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// connectToServer().catch(console.dir);
// export default connectToServer
