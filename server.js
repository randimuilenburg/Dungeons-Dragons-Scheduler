const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const mongoURI = "mongodb://admin:adminPassword@localhost:27017/admin";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dungeonSchedulerDB = mongoose.connection.useDb("dungeon-scheduler");

function isNumericString(inputString) {
  return /^\d+$/.test(inputString);
}

app.get("/api/users", (req, res) => {
  dungeonSchedulerDB
    .collection("users")
    .find({})
    .toArray((err, users) => {
      if (err) {
        console.error("Error fetching users:", err);
        return res.status(500).send("Internal Server Error");
      }
      return res.json(users);
    });
});

app.get("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  if (!isNumericString(userId)) {
    return res
      .status(400)
      .send(
        "Please select a URL with numeric character in order to see the corresponding profile."
      );
  }

  dungeonSchedulerDB
    .collection("users")
    .findOne({ id: userId }, (err, user) => {
      if (err) {
        return res.status(500).send("Internal server error");
      } else {
        if (!user) {
          return res.status(404).send("User not found");
        }
        return res.json(user);
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// then: ping time
