"use strict";

describe("Bowling Score Calculation: ",function(){
  var game;
  
  beforeEach(function(){
    game = new Game();
  });

  it("Score should be 0 when the game starts",function(){
    expect(game.getTotal()).toEqual(0);
  });

});
