const router = require("express").Router();

router.route("/").get((req, res) => {
  res.res.sendFile(index);
});

module.exports = router;
