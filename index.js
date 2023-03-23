const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  const a = 1;
  const b = 2;
  const c = a + b;
  res.send("You are welcome! Trunks");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
