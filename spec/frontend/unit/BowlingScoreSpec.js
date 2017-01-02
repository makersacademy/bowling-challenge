"use strict";

describe("Bowling Game: ",function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should have score = 0 when the game starts",function(){
    expect(game.getTotal()).toEqual(0);
  });

  it("should store the number of pins knocked down by each roll",function(){
    game.roll(4);
    expect(game.rolls[0]).toEqual(4);
  });

  it("should be gutter game when game is over the total score is 0",function(){
    for(var i = 0; i < 20; i++){
      game.roll(0);
    };
    expect(game.getTotal()).toEqual(0);
  });

  xit("should be perfect game when there are 12 strikes",function(){
    for(var i = 0; i < 12; i++){
      game.roll(10);
    }
    expect(game.getTotal()).toEqual(300);
  });

  it("should return the total score when the game is over(no strike nor spare)",function() {
    for(var i = 0; i < 20; i++){
      game.roll(4);
    }
    expect(game.getTotal()).toEqual(80);
  });

});
