const express = require("express");
const cors = require("cors");
const propertyRoutes = require("./routes/propertyRoutes");
const { connectDb } = require("./config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/v1/property", propertyRoutes);


app.listen(port, () => {
  connectDb();
  console.log(`Server running on port : ${port}`);
});
