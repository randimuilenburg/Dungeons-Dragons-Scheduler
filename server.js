const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const grid = require("gridfs-stream");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  }),
  bodyParser.json({ limit: "50mb" })
);

const mongoURI = "mongodb://admin:adminPassword@localhost:27017/admin";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dungeonSchedulerDB = mongoose.connection.useDb("dungeon-scheduler");

let gfs; // GridFS stream

dungeonSchedulerDB.once("open", () => {
  gfs = grid(dungeonSchedulerDB.db, mongoose.mongo);
  gfs.collection("uploads");
});

function isNumericString(inputString) {
  return /^\d+$/.test(inputString);
}

// ... Your existing routes ...

// Upload image using GridFS
app.post("/api/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  const file = req.files.file;

  // Create a write stream to store the uploaded file in GridFS
  const writeStream = gfs.createWriteStream({
    filename: file.name,
    mode: "w",
    content_type: file.mimetype,
    metadata: { someKey: "someValue" }, // Optional metadata
  });

  writeStream.on("close", (file) => {
    return res.status(200).json({
      file_id: file._id,
      message: "File uploaded successfully.",
    });
  });

  writeStream.on("error", (error) => {
    return res.status(500).json({ error });
  });

  file.pipe(writeStream);
});

// Retrieve image using GridFS
app.get("/api/images/:imageId", (req, res) => {
  const { imageId } = req.params;

  gfs.files.findOne({ _id: mongoose.Types.ObjectId(imageId) }, (err, file) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const readStream = gfs.createReadStream({ _id: file._id });
    readStream.pipe(res);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
