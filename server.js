const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

function isNumericString(inputString) {
  return /^\d+$/.test(inputString);
}

app.get("/api/users", (req, res) => {
  const { userId } = req.params;
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

app.get("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const intUserId = parseInt(userId);
  if (!isNumericString(userId)) {
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
        const user = jsonData.users.find((users) => users.id === intUserId);

        if (!user) {
          return res.status(404).send("Profile not found");
        }

        return res.json(user);
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
