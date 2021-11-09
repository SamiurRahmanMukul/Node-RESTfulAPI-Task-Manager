const mongoose = require("mongoose");

// const connectionString = process.env.MONGO_URI;

/* mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // for mongoose 6.x
    // useFindAndModify: false, // for mongoose 6.x
  })
  .then(() => {
    console.log("Connected to MongoDB successfully !!!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  }); */

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
