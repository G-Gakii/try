import express from "express";
const app = express();

const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  res.send("hallo from typescript much love");
});
app.listen(PORT, () => {
  console.log(`listening at port ${PORT} `);
});
