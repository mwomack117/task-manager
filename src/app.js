const express = require("express");
require("./db/mongoose");

const userRouter = require("./routes/api/users");
const taskRouter = require("./routes/api/tasks");

const app = express();

//middleware
app.use(express.json());
// Use Routes
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
