
$(document).ready(function() {
  var game = new BowlingScore();

  $('#btn0').click(function() {
    game.addNewRollScore(0);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i <= 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn1').click(function() {
    game.addNewRollScore(1);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn2').click(function() {
    game.addNewRollScore(2);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn3').click(function() {
    game.addNewRollScore(3);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn4').click(function() {
    game.addNewRollScore(4);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn5').click(function() {
    game.addNewRollScore(5);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn6').click(function() {
    game.addNewRollScore(6);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn7').click(function() {
    game.addNewRollScore(7);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn8').click(function() {
    game.addNewRollScore(8);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    // console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn9').click(function() {
    game.addNewRollScore(9);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

  $('#btn10').click(function() {
    game.addNewRollScore(10);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    // game.addNewBonusScore();
    // console.log('bonus', game.bonusScores);
    // game.makeRoundScores();
    // console.log('round', game.roundScores);
    // game.makeGameScore();
    // console.log('game', game.gameScore);
    for (var i = 1; i < 21; i += 1) {
      $('#round' + i).text(game.rawScores[i-1]);
    };
  });

});
