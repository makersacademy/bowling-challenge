const Frame = require("./frame");
const Gameplay = require("./gameplay");
const ScoreCard = require("./scorecard");
const handlebars = require("express-handlebars");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
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

const createFrames = () => {
  for (i = 0; i < 10; i++) {
    const frame = new Frame();
    frames[i + 1] = frame;
  }
};

createFrames();

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/:frame/:ball/:score", (req, res) => {
  res.send(
    `Frame: ${req.params["frame"]}<br />Ball: ${req.params["ball"]}<br />Score: ${req.params["score"]}`
  );
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
