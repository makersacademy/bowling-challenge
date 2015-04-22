//Don't need cookies if gonna refresh on every page game to new game
game = new BowlingGame();
refreshCookie(game);

function inputScore(){
  // if input is not number tell user

  //Limit to score 0-10 (make text red otherwise and disable button)
  if(parseInt($('#score-input-field').val())<0
  ||  parseInt($('#score-input-field').val())>10
  ||  parseInt($('#score-input-field').val()) + game.frames[game.currentFrame-1] > 10
  ||  isNaN(parseInt($('#score-input-field').val()))) {
      $('#score-input-field').css( "color", "red" );
  }
  else{
  $('#score-input-field').css( "color", "black" );
  game.enterScore(parseInt($('#score-input-field').val()));
  $('#score-input-field').val('');
  refreshTable();
  };
};

function refreshTable() {
  for(i=0;i<10;i++){
    // $('#frame-'+(i+1)).text($.cookie('frame'+(i+1))); //from cookie
      $('#frame-'+(i+1)).text(game.frames[i]);
  };
};

function refreshCookie(game) {
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


//Some of this stuff still coming back as strings
function getGameFromCookie() {
  game = new BowlingGame();
  game.currentFrame = parseInt($.cookie('currentFrame'));
  game.secondRollOnFrame = ($.cookie('secondRollOnFrame') === 'true');
  if($.cookie('strikeFrame') === 'null') {game.strikeFrame = null;}
  else {game.strikeFrame =parseInt($.cookie('strikeFrame'));}; //need to double check this
  game.takingStrikeBonus = $.cookie('takingStrikeBonus');
  game.strikeBonusRolls = parseInt($.cookie('strikeBonusRolls'));
  game.strikeFrame2 = $.cookie('strikeFrame2');
  game.takingStrikeBonus2 = $.cookie('takingStrikeBonus2');
  game.strikeBonusRolls2 = parseInt($.cookie('strikeBonusRolls2'));
  game.spareFrame = $.cookie('spareFrame');
  game.takingSpareBonus = $.cookie('takingSpareBonus');
  game.gameOver = $.cookie('gameOver');
  game.tenthFrameRollCount = parseInt($.cookie('tenthFrameRollCount'));
  for(i=0;i<10;i++){
    game.frames[i] = parseInt($.cookie('frame'+(i+1)));
  }
  return game
};

function enterScore() {
  syncTable();
  $('#frame-10').text('Hola');
};

function syncTable() {};
