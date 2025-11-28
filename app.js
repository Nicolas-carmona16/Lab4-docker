const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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

app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: a - b });
});

app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: a * b });
});

app.get("/divide", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }
  res.json({ result: a / b });
});

app.get("/time", (req, res) => {
  res.json({ 
    timestamp: Date.now(),
    datetime: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
