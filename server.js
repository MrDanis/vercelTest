const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use('/api/test', (req, res) => {
  res.send("Hurray! API is working");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});