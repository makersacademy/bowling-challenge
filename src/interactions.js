$( document ).ready(function() {
  var game = new Game();



  $('#1-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#1-1 :input").serializeArray()[0]["value"];
    game.frameOne.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#1-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#1-2 :input").serializeArray()[0]["value"];
    game.frameOne.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#2-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#2-1 :input").serializeArray()[0]["value"];
    game.frameTwo.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#2-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#2-2 :input").serializeArray()[0]["value"];
    game.frameTwo.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#3-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#3-1 :input").serializeArray()[0]["value"];
    game.frameThree.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#3-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#3-2 :input").serializeArray()[0]["value"];
    game.frameThree.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#4-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#4-1 :input").serializeArray()[0]["value"];
    game.frameFour.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#4-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#4-2 :input").serializeArray()[0]["value"];
    game.frameFour.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#5-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#5-1 :input").serializeArray()[0]["value"];
    game.frameFive.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#5-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#5-2 :input").serializeArray()[0]["value"];
    game.frameFive.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#6-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#6-1 :input").serializeArray()[0]["value"];
    game.frameSix.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#6-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#6-2 :input").serializeArray()[0]["value"];
    game.frameSix.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#7-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#7-1 :input").serializeArray()[0]["value"];
    game.frameSeven.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#7-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#7-2 :input").serializeArray()[0]["value"];
    game.frameSeven.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#8-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#8-1 :input").serializeArray()[0]["value"];
    game.frameEight.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#8-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#8-2 :input").serializeArray()[0]["value"];
    game.frameEight.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#9-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#9-1 :input").serializeArray()[0]["value"];
    game.frameNine.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.calculateBonusNine();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#9-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#9-2 :input").serializeArray()[0]["value"];
    game.frameNine.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.calculateBonusNine();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#10-1').on('submit', function(e){
    e.preventDefault();
    var data = $("#9-1 :input").serializeArray()[0]["value"];
    game.frameTen.firstRoll(parseInt(data));
    game.calculateBonusToEight();
    game.calculateBonusNine();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#10-2').on('submit', function(e){
    e.preventDefault();
    var data = $("#10-2 :input").serializeArray()[0]["value"];
    game.frameTen.secondRoll(parseInt(data));
    game.calculateBonusToEight();
    game.calculateBonusNine();
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

  $('#10-3').on('submit', function(e){
    e.preventDefault();
    var data = $("#10-3 :input").serializeArray()[0]["value"];
    game.frameTen.thirdRoll(parseInt(data));
    game.frameScores();
    game.gameScore();
    $('#score').text('Score - ' + game._gameScore)
  });

});
