const express = require('express'),
      router = express.Router(),
      gameRecordController = require('../controllers/gameRecordController'),
      verifyToken = require('../controllers/verifyToken');

router.post('/new', verifyToken, gameRecordController.create_game_record);

router.get('/', verifyToken, gameRecordController.all);

module.exports = router;
