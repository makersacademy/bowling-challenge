'use strict';

describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should initialize with a constant of pin setup", function(){
    expect(game.PINS).toContain(0,1,2,3,4,5,6,7,8,9,10)
  });

  it("should initialize with a fram count of zero", function(){
    expect(game.frameCount).toEqual(0);
  });

  it("should initialize with no pins set up", function(){
    expect(game.setUpPins).toEqual([]);
  });

  it("should initialize with a empty current score", function(){
    expect(game.currentScore).toEqual([]);
  });

  it("should initialize with a empty score", function(){
    expect(game.score).toEqual([]);
  });

  it("should initilize with a sweep function returning false", function(){
    expect(game.sweep).toBe(false);
  });

  it("should re-rack the pins between each round if frame count is less than ", function(){
    game.frameCount = 1;
    game.rackUp();
    expect(game.setUpPins).toContain(0,1,2,3,4,5,6,7,8,9,10);
  });

  it("should throw an error if frame count is more then ten", function(){
    game.frameCount = 12;
    expect(function(){game.rackUp();}).toThrowError("Game Over! Please start a new game")
  });

  it("should return amount of pins knocked down - excluding a strike", function(){
    game.rackUp();
    spyOn(game, 'firstRoll').and.returnValue(4);
    expect(game.firstRoll()).toEqual(4);
  });

  it("should return X when 10 pins are knocked down", function(){
    game.rackUp();
    spyOn(game, "firstRoll").and.returnValue(10);
    expect(game.firstRoll()).toEqual(10);
  });

  it("should return the left over pins", function(){
    game.rackUp();
    game.currentScore = [9];
    game.pinSweep();
    console.log(game.setUpPins);
    expect(game.setUpPins).toEqual([0,1]);
  });

  it("should return the true when remaing pins are returned", function(){
    game.rackUp();
    game.currentScore = ['X'];
    game.pinSweep();
    expect(game.sweep).toBe(false);
  });


});
