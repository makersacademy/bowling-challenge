const express = require("express");
const cors = require("cors");
var path = require("path");

const app = express();
const port = 4567;

//middleware
app.use(cors());
app.use(express.json());
//two ways of setting public fowlers
app.use(express.static("client/src"));
app.use(express.static(path.join(__dirname, "client", "public")));

const testRoute = require("./routes/test");
const scoreCard = require("./routes/scoreCard");

app.use("/", testRoute);
app.use("/scoreCard", scoreCard);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
