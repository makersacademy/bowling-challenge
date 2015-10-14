game = new BowlingScore();

var htmlWriter = function(score){
  if (_terminateInvalidScoreInput(score)) {return;};
  game.newRound(score);
  _writeFrameScores();
  _writeFrameTotals();
  _writeGameTotal();
  _fixFrameTenDisplay();
};

var _terminateInvalidScoreInput = function(score){
  return ((!!game.rawScores[0]) &&
    (!game.frameScores[game.frameScores.length - 1][1]) &&
    (game.frameScores[game.frameScores.length - 1][0] + score > 10) &&
    (game.frameScores[game.frameScores.length - 1][0] !== 10));
};

var _writeGameTotal = function(){
  $('#total_score').html(game.gameTotal);
};

var _writeFrameTotals = function(){
  for(var i = 1; i <= game.frameTotals.length; i++) {
    $('#f' + i.toString()).html(game.frameTotals[i-1]);
  };
};

var _writeFrameScores = function(){
  for(var i = 1; i <= game.frameScores.length; i++) {
    _writeFrameScoreCaseNoBonus(i);
    _writeFrameScoreCaseStrike(i);
    _writeFrameScoreCaseSpare(i);
  };
};

var _writeFrameScoreCaseNoBonus = function(i){
  if (game._isNoBonus(i-1)) {
    $('#f' + i.toString() + "r1").html(game.frameScores[i-1][0]);
    $('#f' + i.toString() + "r2").html(game.frameScores[i-1][1]);
  };
};

var _writeFrameScoreCaseStrike = function(i){
  if (game._isStrike(i-1)) {
    $('#f' + i.toString() + "r2").html('X');
  };
};

var _writeFrameScoreCaseSpare = function(i){
  if (game._isSpare(i-1)) {
    $('#f' + i.toString() + "r1").html(game.frameScores[i-1][0]);
    $('#f' + i.toString() + "r2").html('/');
  };
};

var _fixFrameTenDisplay = function(){
  _tenthFrameSpareDisplay();
  if (_tenthFrameIsStrike()){
    _tenthFrameStrikeXPlacement();
    _tenthFrameStrikeDisplay(_tenthFrameStrikeBonusPool());
  };
};

var _tenthFrameSpareDisplay = function (){
  if ($('#f10r2').html() === '/' && !!game.frameScores[10]){
      $('#f10r3').html(game.frameScores[10][0]);
  };
};

var _tenthFrameStrikeXPlacement = function (){
  $('#f10r2').html('');
  $('#f10r1').html('X');
};

var _tenthFrameIsStrike = function (){return $('#f10r2').html() === 'X'};

var _tenthFrameStrikeBonusPool = function (){
  if (!!game.frameScores[10] && !!game.frameScores[11]) {
    return _flattenArray([game.frameScores[10],game.frameScores[11]]);
  };
  if (!!game.frameScores[10] && !game.frameScores[11]) {
    return _flattenArray([game.frameScores[10]]);
  };
};

var _tenthFrameStrikeDisplay = function (bonusPool){
  if (!!bonusPool && bonusPool.length >= 2) {
      $('#f10r2').html(bonusPool[0]);
      $('#f10r3').html(bonusPool[1]);
  };
  if (!!bonusPool && bonusPool.length === 1) {
      $('#f10r2').html(bonusPool[0]);
  };
};

$(document).ready(function() {
  $(':button').click(function(){
    htmlWriter(Number(this.id.replace('btn', '')));
  });
});
