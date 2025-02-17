const mongoose = require("mongoose");

// const mongoURI = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&tls=false&appName=desaipratik';
const mongoURI =
  "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&directConnection=true&tls=false&appName=desaipratik";

// mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false&appName=desaipratik    // for mongoDB compass

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
