'use strict';

describe("Bowling", function() {
  var game

  beforeEach(function() {
    game = new Bowling();
  });

  it("Rolls a score of 2 per frame", function(){
     rollMany(1, 20);
     expect(game.score()).toEqual(20);
  });

  it("Can roll gutterGame", function(){
     rollMany(0, 20);
     expect(game.score()).toEqual(0);
  });

  it('Can roll a spare (adds a bonus 3 to final score)', function(){
     game.roll(5);
     game.roll(5);
     game.roll(2);
     rollMany(0,17);
     expect(game.score()).toBe(14);
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };


});
