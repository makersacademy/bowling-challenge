"use strict";

describe("Bowling Game: ",function(){
  var game;

  var rollMulti = function(game,nRolls,pins) {
    for(var i = 0; i < nRolls; i++){
      game.roll(pins);
    }
  }

  beforeEach(function(){
    game = new Game();
  });

  it("should have 0 score when the game starts",function(){
    expect(game.getTotal()).toEqual(0);
  });

  it("should not have any pin knocked down when the game starts", function(){
    expect(game.rolls).toEqual([]);
  });

  it("should store the number of pins knocked down by each roll",function(){
    game.roll(4);
    expect(game.rolls[0]).toEqual(4);
  });

  it("should be gutter game the total score is 0",function(){
    rollMulti(game,20,0);
    expect(game.getTotal()).toEqual(0);
  });

  it("should be perfect game when there are 12 strikes",function(){
    rollMulti(game,12,10);
    expect(game.getTotal()).toEqual(300);
  });

  describe("no strike nor spare", function(){

    it("should return the total score", function(){
      rollMulti(game,18,0);
      game.roll(4);
      game.roll(5);
      expect(game.getTotal()).toEqual(9);
    });

  });

});
