const Frame = require("./frame");
const Gameplay = require("./gameplay");
const ScoreCard = require("./scorecard");

const express = require("express");
const app = express();
const port = 3000;

console.log(`Server listening on localhost:${port}`);
app.listen(port);
