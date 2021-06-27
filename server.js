const express = require('express');
const app = express();
const path = require("path");
const PORT = 8000;

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.listen(PORT, () => {
  console.log("Listening on port" + PORT);
});