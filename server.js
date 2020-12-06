// Dependencies
const express = require("express");
const mongoose = require("mongoose");

//express
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connection to mongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


//routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });