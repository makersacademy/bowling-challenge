const Frame = require("./frame");
const Gameplay = require("./gameplay");
const ScoreCard = require("./scorecard");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const multer = require("multer"); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

const frames = {};
const game = new Gameplay();
const scoreCard = new ScoreCard();

const createFrames = () => {
  for (i = 0; i < 10; i++) {
    const frame = new Frame();
    frames[i + 1] = frame;
  }
};

createFrames();

app.get("/", (req, res) => {
  console.log(frames[game.currentFrame].getRemainingPins());
  res.render("scorecard", {
    layout: "index",
    scores: scoreCard.getBallScores(frames),
    currentFrame: game.currentFrame,
    currentBall: game.currentBall,
    remainingPins: frames[game.currentFrame].getRemainingPins(),
  });
});

app.post("/score", (req, res) => {
  const score = req.body.score;
  console.log(score);
  frames[game.currentFrame].setBallScore(game.currentBall, req.body.score);

  if (game.checkContinue(frames)) {
    game.setNextBall(frames);
  }

  res.redirect("/");
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
