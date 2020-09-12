const router = require("express").Router();

router.route("/").get((req, res) => {
  res.sendFile("index.html");
});

module.exports = router;
