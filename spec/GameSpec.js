describe ('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('can keep score of one roll', function() {
    game.roll(3);
    rollMany(19, 0);
    expect(game.currentScore()).toEqual(3);
  });

  it ('tests for guttergame (0 score from 20 rolls)', function(){
    rollMany(20, 0);
    expect(game.currentScore()).toEqual(0);
  });

  it ('tests for all fours', function(){
    rollMany(20, 4);
    expect(game.currentScore()).toEqual(80);
  });

  it ('tests for a spare', function (){
    rollSpare();
    game.roll(2);
    rollMany(17, 0);
    expect(game.currentScore()).toEqual(14);
  });

  it ('test for a strike', function (){
    rollStrike();
    game.roll(4);
    game.roll(4);
    rollMany(16, 0);
    expect(game.currentScore()).toEqual(26);
  });

  it ('tests for a perfect game - 12 strikes', function(){
    rollMany(20, 10);
    expect(game.currentScore()).toEqual(300);
  });

  function rollMany(x, pins) {
    for (var i = 0; i < x; i ++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike(){
    game.roll(10);
  }

});
