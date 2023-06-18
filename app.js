const Frame = require("./frame");
const Gameplay = require("./gameplay");
const ScoreCard = require("./scorecard");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "X"];
  const remainingPins = frames[game.currentFrame].getRemainingPins() + 1;
  const buttonsToShow = buttons.slice(0, remainingPins);

  res.render("scorecard", {
    layout: "index",
    scores: scoreCard.getGameScores(frames),
    checkContinue: game.checkContinue(frames),
    buttonsToShow: buttonsToShow,
    totalScore: game.getFinalScore(frames),
  });
});

app.post("/score", (req, res) => {
  let input = req.body.score;
  let currentFrame = game.currentFrame;
  game.processCurrentBall(frames[currentFrame], input);
  scoreCard.updatePendingBonuses(frames, currentFrame);
  if (game.checkContinue(frames)) {
    game.setNextBall(frames);
  }

  res.redirect("/");
});

app.get("/reset", (req, res) => {
  createFrames();
  game.reset();
  res.redirect("/");
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
