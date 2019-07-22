const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   if (req.method === "GET") {
//     res.send("No GET requests");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site under maintenance. Please try again later");
// });

// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler
//

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password, hashedPassword);

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };

// myFunction();

// const jwt = require("jsonwebtoken");

// const myJwtFunction = async () => {
//   const token = jwt.sign(
//     {
//       _id: "abc123"
//     },
//     "secret",
//     { expiresIn: "24 hours" }
//   );
//   console.log(token);

//   const decoded = jwt.verify(token, "secret");
//   console.log(decoded);
// };

// myJwtFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("5d2cd4f42927ea16afa1f782");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5d2cd4e92927ea16afa1f780");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
