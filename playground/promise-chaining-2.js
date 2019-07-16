require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d13c4d6f50a520a0a046758").then(() => {
//   return Task.countDocuments({ completed: false })
//     .then(count => {
//       console.log(count);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// });

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5d13ca200235ef0ba8f2fdfe")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
