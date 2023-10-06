const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  }),
  bodyParser.json()
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

app.put("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = req.body;
  dungeonSchedulerDB
    .collection("users")
    .updateOne({ id: userId }, { $set: user }, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error: " + err);
      } else {
        if (result.matchedCount === 1) {
          return res.json(result);
        }
        return res
          .status(404)
          .send("Something went wrong " + result.modifiedCount);
      }
    });
});

app.put("/api/users/:userId/characters/:characterId", (req, res) => {
  const { userId, characterId } = req.params;
  const updatedCharacterFields = req.body;

  const updateFields = {};
  for (const key in updatedCharacterFields) {
    updateFields[`characters.$.${key}`] = updatedCharacterFields[key];
  }

  dungeonSchedulerDB.collection("users").updateOne(
    { id: userId, "characters.id": Number(characterId) }, // Match user and character by ID
    { $set: updateFields }, // Update the matched character
    (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error " + err);
      } else {
        if (result.matchedCount > 0) {
          return res.json(result);
        }
        return res.status(404).send("User or character not found");
      }
    }
  );
});

// app.put

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// then: ping time
