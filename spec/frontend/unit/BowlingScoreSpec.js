"use strict";

describe("Bowling Game: ",function(){
  var game;

  this.rollMulti = function(game,nRolls,pins) {
    for(var i = 0; i < nRolls; i++){
      game.roll(pins);
    }
  }

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
    this.rollMulti(game,20,0);
    expect(game.getTotal()).toEqual(0);
  });

  xit("should be perfect game when there are 12 strikes",function(){
    this.rollMulti(game,12,10);
    expect(game.getTotal()).toEqual(300);
  });

  it("should return the total score when the game is over(no strike nor spare)",function() {
    this.rollMulti(game,20,4);
    expect(game.getTotal()).toEqual(80);
  });

});
