"use strict";

describe("Bowling Game: ", function(){
  var game;

  var rollMulti = function(game,nBalls,pins) {
    for(var i = 0; i < nBalls; i++){
      game.roll(pins);
    }
  }

  beforeEach(function(){
    game = new Game();
  });

  it("should have 0 score when the game starts", function(){
    expect(game.getTotal()).toEqual(0);
  });

  it("should not have any pin knocked down when the game starts", function(){
    expect(game.rolls).toEqual([]);
  });

  it("should store the number of pins knocked down by each roll", function(){
    game.roll(4);
    expect(game.rolls[0]).toEqual(4);
  });

  it("gutter game", function(){
    rollMulti(game,20,0);
    expect(game.getTotal()).toEqual(0);
  });

  it("perfect game", function(){
    rollMulti(game,12,10);
    expect(game.getTotal()).toEqual(300);
  });

  it("all spares", function(){
    for(var i = 0; i < 20; i++){
      game.roll(5);
    }
    game.roll(4);
    expect(game.getTotal()).toEqual(149);
  });

  it("one spare", function(){
    game.roll(7);
    game.roll(3);
    game.roll(2);
    rollMulti(game,17,0);
    expect(game.getTotal()).toEqual(14);
  });
  describe("no strike nor spare", function(){

    it("should total the score", function(){
      rollMulti(game,18,0);
      game.roll(4);
      game.roll(5);
      expect(game.getTotal()).toEqual(9);
    });

  });

});
