// var Game = require('../src/Game');

describe ('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('has a zero score by default', function() {
    rollMany(0, 0)
    expect(game.currentScore()).toEqual(0);
  });


  it ('tests for guttergame (0 score from 20 games)', function(){
    rollMany(20, 0)
    expect(game.currentScore()).toEqual(0);
  });

  it ('tests for all fours', function(){
    rollMany(20, 4)
    expect(game.currentScore()).toEqual(80);
  });



  function rollMany(x, pins) {
    for (var i = 0; i < x; i ++) {
      game.roll(pins)};
  };

});