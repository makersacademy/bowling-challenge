function Game() {

  var _player = 'Hugo';
  var _score = 0;

  Game.prototype.player = function() {
    return _player;
  };

  Game.prototype.score = function() {
    return _score;
  };



}
