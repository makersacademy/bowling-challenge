const express = require('express'),
      router = express.Router(),
      gameRecordController = require('../controllers/gameRecordController');

router.post('/new', gameRecordController.create_game_record);

router.get('/', gameRecordController.all);

module.exports = router;
