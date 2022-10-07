const { GridFSBucketWriteStream } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:4000/gamePlayers", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const user = new User(
  {
    _id: 1,
    name: "Randi M",
    email: "randiemail@gmail.com",
    password: "RandiPassword",
  },
  {
    _id: 2,
    name: "Spenser W",
    email: "spenseremail@gmail.com",
    password: "SpenserPassword",
  },
  {
    _id: 3,
    name: "Janey R",
    email: "janeyemail@gmail.com",
    password: "JaneyPassword",
  },
  {
    _id: 4,
    name: "Tyler E",
    email: "tyleremail@gmail.com",
    password: "TylerEmail",
  }
  // {
  //   name: "Maia C",
  //   email: "maiaemail@gmail.com",
  //   password: "MaiaEmail",
  // }
  // {
  //   name: "Tim S",
  //   email: "timemail@gmail.com",
  //   password: "TimEmail",
  // }
);

user.save();

console.log(User.find({ collectionName: "players" }));

// User.find(function (err, users) {
//   if (err) {
//     console.log(err);
//   } else {
//     users.forEach(function (user) {
//       console.log(user.name);
//     });
//   }
// });
