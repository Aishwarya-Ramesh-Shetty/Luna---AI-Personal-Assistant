const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Luna Backend Running 🚀",
  });
});
app.get("/user",UserRoute);
module.exports = app;
