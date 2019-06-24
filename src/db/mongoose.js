const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
    default: "Anonymous"
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Errow("Age must be a positive number");
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Must use correct email format");
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can not contain password");
      }
    },
    minlength: 7
  }
});

// const me = new User({
//   name: "  Michael Womack  ",
//   email: "mikewomack@yahoo.com",
//   age: 32,
//   password: "pass"
// });

// me.save()
//   .then(result => {
//     console.log("user saved", result);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new Task({
  description: "Eat, Sleep, Code... Repeat"
});

task
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error", error);
  });
