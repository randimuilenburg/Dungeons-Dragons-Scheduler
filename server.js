const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const grid = require("gridfs-stream");
const multer = require("multer"); // Import multer

const app = express();
const port = 4000;

/*
TODO:
1. Remove image upload logic from /api/users/:userId/characters/:characterId
2. Make a new endpoint that accepts post requests to upload a characater image and ONLY a character image.
   This endpoint should take in the image, write it to gridfs, and then user mongoose to update the character object
   with the image location (use the same endpoint url as above just have it use a post request be different)
3. Write a get endpoint that returns an image from gridfs based on the location you provide
4. Come see Spenser

*/

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
  // bodyParser.json({ limit: "50mb" })
  // express.json()
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
const storage = multer.memoryStorage(); // Use in-memory storage
const upload = multer({ storage: storage });

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

// TEST
app.get("/api/person/name", (req, res) => {
  const nameData = { name: "Cricket" };
  res.json(nameData);
});

// TEST
app.get("/api/person/age", (req, res) => {
  const theAge = { age: 18 };
  res.json(theAge);
});

// TEST
app.get("/api/person/true", (req, res) => {
  const isCool = true;
  res.json({ isCool });
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
    // const updatedCharacterFiles = req.files;
    // let updatedCharacterImageId = null;

    const updateFields = {};
    for (const key in updatedCharacterFields) {
      updateFields[`characters.$.${key}`] = updatedCharacterFields[key];
    }

    // characters.$.age

    // characters = [
    //   {},
    //   {},
    //   {}
    // ]

    // updatedCharacterFields = { name: "Spenser", age: 31 };

    // updatedCharacterFields.name === updatedCharacterFields["name"];

    // user = {
    //   name: "Randi",
    //   character: {
    //     id: 1,
    //     name: "Something",
    //   },
    // };

    // updateFields = {};

    // updateFields[`characters.$.name`] = "Spenser";
    // updateFields[`characters.$.age`] = 31;

    // updateFields = { "characters.$.name": "Spenser", "characters.$.age": 31 };

    // Check if there's an image upload
    // if (updatedCharacterFiles) {
    //   const updatedCharacterImage = req.files.file;

    //   const writeStream = gfs.createWriteStream({
    //     filename: updatedCharacterImage.name,
    //   });

    //   updatedCharacterImage.pipe(writeStream);

    //   writeStream.on("close", (file) => {
    //     updatedCharacterImageId = file._id;
    //   });
    // }

    // if (updatedCharacterImageId) {
    //   updatedFields[`characters.$.imageId`] = updatedCharacterImageId;
    // }

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

// function handleErrorAndResult(error, user) {
//   //do something with the error
//   // do something with use
// }

// (error, user) => {//do something}

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

// app.put

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// then: ping time
