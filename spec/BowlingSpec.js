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

  it("Can roll gutter game", function(){
     rollMany(0, 20);
     expect(game.score()).toEqual(0);
  });

  it('Can roll a spare (adds a bonus value of 3rd ball thrown)', function(){
     game.roll(5);
     game.roll(5);
     game.roll(2);
     rollMany(0,17);
     expect(game.score()).toBe(14);
  });

  it('Can roll a Strike ', function(){
    game.roll(10);
    game.roll(8);
    game.roll(1);
    rollMany(0,16);
    expect(game.score()).toBe(28);
  });

  it('can roll perfect game'), function(){
    game.rollMany(10,22);
    expect(game.score()).toBe(300);
  });



  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };


});
