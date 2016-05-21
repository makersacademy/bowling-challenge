'use strict';

describe("Bowling", function(){
  var game;

  beforeEach(function(){
    game = new Bowling();
  });

  function rollMany(n, pins){
    for(var i = 0; i < n; i++){
      game.roll(pins);
    }
  }

  function rollSpare(){
    game.roll(5);
    game.roll(5);
  }

  function rollStrike(){
    game.roll(10);
  }

  it("handles gutter game", function(){
    rollMany(20,0);
    expect(game.totalScore()).toEqual(0);
  });

  it("handles all 1 game", function(){
    rollMany(20,1);
    expect(game.totalScore()).toEqual(20);
  });

  it("should handle one spare", function(){
    rollSpare();
    game.roll(5);
    rollMany(17,0)
    expect(game.totalScore()).toEqual(20);
  });

  it("should handle one strike",function(){
    rollStrike();
    game.roll(3);
    game.roll(3);
    rollMany(16,0);
    expect(game._frames[0].calculateBonus()).toEqual(6);
    expect(game.totalScore()).toEqual(22);
  });

  it("should handle the perfect game", function(){
    rollMany(12,10);
    expect(game.totalScore()).toEqual(300)
  });

  it("handle the last frame if it is a spare", function(){
    rollMany(9,10);
    rollSpare();
    rollStrike();
    expect(game.totalScore()).toEqual(275);
  });

  it("handle the last frame if it is neither strike or spare", function(){
    rollMany(9,10);
    game.roll(5);
    game.roll(4);
    expect(game.totalScore()).toEqual(263);
  });

});