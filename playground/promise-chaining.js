require("../src/db/mongoose");
const User = require("../src/models/user");

// 5d13c47af50a520a0a046755
// 5d13c4bbf50a520a0a046756

// User.findByIdAndUpdate("5d13c4bbf50a520a0a046756", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d13c4bbf50a520a0a046756", 10)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
