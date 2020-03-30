const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    console.log("MongoDB sucsudo service mongod statuscessfully connected")
  )
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport");
// Routes
app.use("/api/users", users);

// True if in production
PRODUCTION = false;

if (PRODUCTION === true) {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.use("/", function(request, response) {
    response.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
// process.env.port is Heroku's port if you choose to deploy the app there
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
