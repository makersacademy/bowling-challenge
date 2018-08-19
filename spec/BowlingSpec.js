'use strict';
describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("A gutter game has a zero score", function(){
    rollMultiple(20,0);
    expect(game.score()).toEqual(0);
  });

  it("All ones scores 20", function(){
    rollMultiple(20,1);
    expect(game.score()).toEqual(20);
  });

  it ("A single spare test, followed by 3, results in score 16", function() {
    rollSpare();
    game.roll(3);
    rollMultiple(17,0);
    expect(game.score()).toEqual(16);
  });

  it ("A single strike test, followed by two rolls of 3, results in score 22", function() {
    rollStrike();
    game.roll(3);
    game.roll(3);
    rollMultiple(16,0);
    expect(game.score()).toEqual(22);
  });

// Helper functions - transfer to helper file

  function rollMultiple(rolls, pins) {
    for(var i = 0; i < rolls; i += 1) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
