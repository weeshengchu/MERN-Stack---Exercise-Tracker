//1. new express no need Parser
const express = require("express");
const cors = require("cors");
//2. help to connect to mongoDB atlas
const mongoose = require("mongoose");

//1 environment config
require("dotenv").config();

//1. express server
const app = express();
const port = process.env.PORT || 5000;

//1.cors middleware to parse json
app.use(cors());
app.use(express.json());

//2. get the uri from the mongoDB atlas
const uri = process.env.ATLAS_URI;
//2. useNewUrlParser, useCreateIndex due to mongoDB nodejs driver rewriting its tool to parse MongoDB connection strings
//2. create .env file and get URI from mongoDB ATLAS sandbox connection
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//6. routes for the api
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

//6. everytime someone load /exercises --> exercises router
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//1.nodemon server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
