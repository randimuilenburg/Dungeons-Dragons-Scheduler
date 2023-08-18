const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5000",
    optionsSuccessStatus: 200,
  })
);

function isNumericString(inputString) {
  return /^\d+$/.test(inputString);
}

app.get("/api/profiles", (req, res) => {
  const { profileId } = req.params;
  fs.readFile("./src/data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }

    try {
      const jsonData = JSON.parse(data);
      return res.json(jsonData);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/api/profiles/:profileId", (req, res) => {
  const { profileId } = req.params;
  const intProfileId = parseInt(profileId);
  if (!isNumericString(profileId)) {
    return res
      .status(400)
      .send(
        "Please select a URL with numeric character in order to see the corresponding profile."
      );
  }

  fs.readFile("./src/data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    } else {
      try {
        const jsonData = JSON.parse(data);
        const profile = jsonData.players.find(
          (players) => players.id === intProfileId
        );

        if (!profile) {
          return res.status(404).send("Profile not found");
        }

        return res.json(profile);
      } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// then: ping time
