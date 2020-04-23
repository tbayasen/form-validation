// Dependencies
const express = require("express");

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Directory
app.use(express.static("app/public"));

// Routes
require("./app/routes/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function () {
  console.log(`Server is now on port ${PORT}`);
});
