const { MongoClient } = require('mongodb');

//MongoDB Connection
const connectDB = async () => {
  const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  try {
    const client = await MongoClient.connect(dbUrl);
    console.log("DB Connected!");
    return client.db(); // Return the database object for further usage
  } catch (error) {
    console.log("DB Connection Error: ", error);
    throw error;
  }
};

module.exports = connectDB;