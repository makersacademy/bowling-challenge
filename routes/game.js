const express = require('express'),
      router = express.Router(),
      gameController = require('../controllers/gameController');

router.get('/play', gameController.play_show);

router.post('/play', gameController.play);

module.exports = router;
