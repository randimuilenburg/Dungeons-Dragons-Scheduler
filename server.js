// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 4000;

// // Serve static files from the build FileSystemDirectoryEntry
// app.use(express.static(path.join(__dirname, "build")));

// // Handle requests and respond with the React app
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}!`);
// });

const express = require("express");
const fs = require("fs");

const app = express();
const port = 4000;

// app.get("/api/profiles", (req, res) => {
//   const { profileId } = req.params;
//   fs.readFile("./src/data.json", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send("Internal Server Error");
//     }

//     try {
//       const jsonData = JSON.parse(data);
//       return res.json(jsonData);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send("Internal Server Error");
//     }
//   });
// });

app.get("/api/profiles/:profileId", (req, res) => {
  const { profileId } = req.params;
  fs.readFile("./src/data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }

    try {
      const jsonData = JSON.parse(data);
      const profile = jsonData.find((players) => players.id === profileId);

      if (!profile) {
        return res.status(404).send("Profile not found");
      }

      return res.json(profile);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  });
});

// get /api/profiles/:id
// return single player info based on id

// (instead of players, return the player ID instead that corresponds to the page you go
//   to localhost, and remember: parse is a string)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// then: ping time
// get a specific person by id
// display a specific person by id
