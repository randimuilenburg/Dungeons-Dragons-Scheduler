const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

// Serve static files from the build FileSystemDirectoryEntry
app.use(express.static(path.join(__dirname, "build")));

// Handle requests and respond with the React app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
