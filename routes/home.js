const router = require("express").Router();

router.route("/").get((req, res) => {
  res.redirect("/scoreCard");
});

module.exports = router;
