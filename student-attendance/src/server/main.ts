import express from "express";
import ViteExpress from "vite-express";
require('dotenv').config();
const { PORT = 3000 } = process.env

const app = express();

const { authMiddleware } = require("./utils");

// Logging middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authMiddleware);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

//Backend Routes
app.use("/adminAuth", require("./adminAuth"));
app.use("/teacherAuth", require("./teacherAuth"));
app.use("/teacherApi", require("./teacherApi"));
app.use("/adminApi", require("./adminApi"));

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);