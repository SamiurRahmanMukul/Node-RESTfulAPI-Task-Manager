/*Title: Task Manager App - app.js
  Description: Build a RESTful API for a Task Manager App. Using Node, Express and MongoDB.
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 08/11/2021 */

// !TASK MANAGER APP - ROUTES
// app.get("/api/v1/tasks");        - GET ALL THE TASKS
// app.get("/api/v1/tasks/:id");    - GET SINGLE TASK
// app.post("/api/v1/tasks");       - CREATE A NEW TASK
// app.patch("/api/v1/tasks/:id");  - UPDATE A TASK
// app.delete("/api/v1/tasks/:id"); - DELETE A TASK

// external modules import
const express = require("express");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");

// internal modules import
const tasksRoute = require("./src/routes/tasksRoute");
const connectDB = require("./src/db/connect");
const notFoundHandler = require("./src/middleware/not-found");

// application configuration
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// establish connection to mongodb
// require("./src/db/connect");
const dbEstablished = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log("Connected to MongoDB successfully !!!");
  } catch (err) {
    console.log("Error connecting to MongoDB: ", err.message);
    process.exit(1);
  }
};

dbEstablished();

// static folder & favicon setup
app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

// application middleware
app.use(express.json());

// application routes
app.use("/api/v1/tasks", tasksRoute);

// not found handler
app.use(notFoundHandler);

// application listening
app.listen(PORT, (err) => {
  if (err) {
    console.log("Listening error: " + err);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});
