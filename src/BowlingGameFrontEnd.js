game = new BowlingGame();
toCookie(game);

function toCookie(game) {
  for(i=0;i<10;i++){
    $.cookie('frame'+(i+1), game.frames[i])
  }
  $.cookie('currentFrame', game.currentFrame);
  $.cookie('secondRollOnFrame', game.secondRollOnFrame);
  $.cookie('strikeFrame', game.strikeFrame);
  $.cookie('takingStrikeBonus', game.takingStrikeBonus);
  $.cookie('strikeBonusRolls', game.strikeBonusRolls);
  $.cookie('strikeFrame2', game.strikeFrame2);
  $.cookie('takingStrikeBonus2', game.takingStrikeBonus2);
  $.cookie('strikeBonusRolls2', game.strikeBonusRolls2);
  $.cookie('spareFrame', game.spareFrame);
  $.cookie('takingSpareBonus', game.takingSpareBonus);
  $.cookie('gameOver', game.gameOver);
  $.cookie('tenthFrameRollCount', game.tenthFrameRollCount);
};

function getGameFromCookie() {
  game = new BowlingGame();
  game.currentFrame = $.cookie('currentFrame');
  game.secondRollOnFrame = $.cookie('secondRollOnFrame');
  game.strikeFrame = $.cookie('strikeFrame');
  game.takingStrikeBonus = $.cookie('takingStrikeBonus');
  game.strikeBonusRolls = $.cookie('strikeBonusRolls');
  game.strikeFrame2 = $.cookie('strikeFrame2');
  game.takingStrikeBonus2 = $.cookie('takingStrikeBonus2');
  game.strikeBonusRolls2 = $.cookie('strikeBonusRolls2');
  game.spareFrame = $.cookie('spareFrame');
  game.takingSpareBonus = $.cookie('takingSpareBonus');
  game.gameOver = $.cookie('gameOver');
  game.tenthFrameRollCount = $.cookie('tenthFrameRollCount');
  for(i=0;i<10;i++){
    game.frames[i] = $.cookie('frame'+(i+1));
  }
};

function enterScore() {
  syncTable();
  $('#frame-10').text('Hola');
};

function syncTable() {};
