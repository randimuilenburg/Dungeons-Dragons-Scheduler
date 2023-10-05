// serailize your image to binary and send it through your api to mongo in server
// run this by using node scratch.js
// localhost:3000/api/users/1

const http = require("http");

// Define the URL you want to fetch
const url = "http://localhost:4000/api/users/1";

// Send an HTTP GET request to the specified URL
http
  .get(url, (response) => {
    let data = "";

    // Event handler for receiving data
    response.on("data", (chunk) => {
      data += chunk;
    });

    // Event handler for the end of the response
    response.on("end", () => {
      // 'data' now contains the response body
      console.log(data);
    });
  })
  .on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
