console.log("Hello Prisma!");

const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/location", (req, res) => {
  res.send(res.location());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and http://localhost:${PORT}`);
  //     // Run Prisma migrations
  //     prisma.$connect()
  //    .then(() => {
});
