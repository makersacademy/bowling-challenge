const router = require("express").Router();
var path = require("path");

router.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/scoreCard.html"));
});

module.exports = router;
