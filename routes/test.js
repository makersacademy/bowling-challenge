const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("HELLO FROM THE SERVER");
});

module.exports = router;
