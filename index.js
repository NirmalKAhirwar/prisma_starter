console.log("Hello Prisma!");

const cookieParser = require("cookie-parser");
const express = require("express");
const userRouter = require("./routes/userRoutes");
const prisma = require("./prisma/index");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/api", userRouter);

app.get("/", (req, res) => {
 
  res.send(`Hello from Expre ss! ${users}`);
});

app.get("/models/:modeluid", async (req, res) => {
  try {
    // Fetch records from the ModelImg collection based on model_id
    const allModelImgs = await prisma.model_img.findMany({
      where: { model_uid: req.params.modeluid },
    });

    // Send the fetched data as JSON
    res.json(allModelImgs);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ error: "An error occurred while fetching records" });
  } finally {
    await prisma.$disconnect();
  }
});


app.get("/location", (req, res) => {
  res.send(res.location());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} and http://localhost:${PORT}`);
});
