"use strict";

describe("Bowling Game: ",function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should have score 0 when the game starts",function(){
    expect(game.getTotal()).toEqual(0);
  });

  it("should store the number of pins knocked down by each roll",function(){
    game.roll(4);
    expect(game.rolls[0]).toEqual(4);
  });

});
