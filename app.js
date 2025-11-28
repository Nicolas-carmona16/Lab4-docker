const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ sum: a + b });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
