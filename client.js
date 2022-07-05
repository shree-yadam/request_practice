const request = require("request");

request("https://www.google.com", (error, response, body) => {
  console.log("error: ", error);
  console.log("status code: ", response && response.statusCode);
  console.log("body: ", body);
});