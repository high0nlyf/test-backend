const mongoose = require("mongoose");

const connectDb = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }
  mongoose.connect(mongoUri).catch((err) => console.log(err));

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("connection succeed");
  });

  db.on("error", (err) => {
    console.log("error:", err);
  });
};

module.exports = { connectDb };
