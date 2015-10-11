
$(document).ready(function() {
  var game = new BowlingScore();

  $('#btn0').click(function() {
    game.addNewRollScore(0);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
    $('#round1').text('0');
  });

  $('#btn1').click(function() {
    game.addNewRollScore(1);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
    $('#round1').text('1');
  });

  $('#btn2').click(function() {
    game.addNewRollScore(2);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn3').click(function() {
    game.addNewRollScore(3);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn4').click(function() {
    game.addNewRollScore(4);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn5').click(function() {
    game.addNewRollScore(5);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn6').click(function() {
    game.addNewRollScore(6);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn7').click(function() {
    game.addNewRollScore(7);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn8').click(function() {
    game.addNewRollScore(8);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn9').click(function() {
    game.addNewRollScore(9);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

  $('#btn10').click(function() {
    game.addNewRollScore(10);
    console.log('raw', game.rawScores);
    game.makeFrameScores();
    console.log('frame', game.frameScores);
    game.addNewBonusScore();
    console.log('bonus', game.bonusScores);
    game.makeRoundScores();
    console.log('round', game.roundScores);
    game.makeGameScore();
    console.log('game', game.gameScore);
  });

});
