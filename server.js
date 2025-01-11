const express = require("express");

// initialize express
const app = express();

// initialize port number
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// listen on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
