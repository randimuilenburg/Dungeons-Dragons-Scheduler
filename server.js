const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const grid = require("gridfs-stream");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

const mongoURI = "mongodb://admin:adminPassword@localhost:27017/admin";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoConn = mongoose.connection;
const dungeonSchedulerDB = mongoConn.useDb("dungeon-scheduler");

grid.mongo = mongoose.mongo;
const gfs = grid(mongoConn);

// Set up Multer for handling file uploads
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return {
      filename: file.originalname,
      profileImagesGrid: "uploads",
    };
  },
});
const upload = multer({ storage });
// const multerStorage = multer.memoryStorage(); // Uses in-memory storage
// const upload = multer({ storage: multerStorage });

// Non-fuctions / routes below
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

// req = {
//   params: {userId: 1, characterId: 2},
//   body: {},
//   files: {files: binary}
// }

app.put(
  "/api/users/:userId/characters/:characterId",
  // upload.single("file"),
  (req, res) => {
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
            [];
            return res.json(result);
          }
          return res.status(404).send("User or character not found");
        }
      }
    );
  }
);

app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "No image file uploaded, try again." });
  }
  // return res.status(200).json({ message: "Image uploaded successfully!" });

  // Does the character have a character id?
  const characterId = req.body.characterId;

  // Image location from req.file object
  const imageLocation = `/uploads/${req.file.filename}`;

  dungeonSchedulerDB
    .collection("users")
    .updateOne(
      { "characters.id": characterId },
      { $set: { "characters.$.imageLocation": imageLocation } },
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal server error: " + err);
        } else {
          if (result.matchedCount > 0) {
            return res
              .status(200)
              .json({ message: "Image uploaded and saved to character!" });
          }
          return res
            .status(404)
            .send("Character not found, couldn't save image.");
        }
      }
    );
});

app.get("/api/users/:userId/characters", (req, res) => {
  const { userId } = req.params;

  dungeonSchedulerDB
    .collection("users")
    .findOne({ id: userId }, (err, user) => {
      if (err) {
        return res.status(500).send("Internal Server Error: " + err);
      } else {
        return res.json(user.characters);
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
