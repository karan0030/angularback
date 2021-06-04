require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./api/users/user.router");
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});