'use strict';

describe('BowlingGame', function(){

  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  it("can roll gutter game", function(){
    rollMany(0,20);
    expect(game.score()).toBe(0);
  });

  it("can roll all ones", function(){
    rollMany(1,20);
    expect(game.score()).toBe(20);
  });

  var rollMany = function(pins, rolls) {
      for (var i = 0; i < rolls; i++) {
        game.roll(pins);
      }
  };


});
