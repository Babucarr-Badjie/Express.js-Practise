const express = require("express");
const path = require("path");

// initialize express
const app = express();

// import people from people.js
const people = require("./routes/people");

// initialize port number
const port = process.env.PORT || 3000;

// setup folder structure
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/people", people);

// listen on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
