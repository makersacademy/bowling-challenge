'use strict';

describe("Game", function(){
  var game;
  var scoreboard;

  beforeEach(function(){
    game = new Game();
    scoreboard = new Scoreboard();
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

  it("should initialize with a sweep function returning false", function(){
    expect(game.sweep).toBe(false);
  });

  it("should initialize with a false rack of pins", function(){
    expect(game.rackedPins).toBe(false);
  });

  it("should initialize with a new Scoreboard", function() {
    expect(game.scoreboard).toEqual(new Scoreboard())
  });

  it("should re-rack the pins between each round if frame count is less than ten", function(){
    game.frameCount = 1;
    game.rackUp();
    expect(game.setUpPins).toContain(0,1,2,3,4,5,6,7,8,9,10);
  });

  it("should re-rack the pins and return rackedpins to be true between each round if frame count is less than ten", function(){
    game.frameCount = 1;
    game.rackUp();
    expect(game.rackedPins).toBe(true);
  });

  it("should throw an error if frame count is more then ten", function(){
    game.frameCount = 12;
    expect(function(){game.rackUp();}).toThrowError("Game Over! Please start a new game")
  });

  it("should return amount of pins knocked down in first throw- excluding a strike", function(){
    spyOn(game, 'firstRoll').and.returnValue(4);
    expect(game.firstRoll()).toEqual(4);
  });

  it("should return X when 10 pins are knocked down in first throw", function(){
    spyOn(game, "firstRoll").and.returnValue(10);
    expect(game.firstRoll()).toEqual(10);
  });

  it("should return the left over pins", function(){
    game.rackUp();
    game.currentScore = [9];
    game.firstRoll();
    expect(game.setUpPins).toEqual([0,1]);
  });

  it("should return the true when remaining pins are returned", function(){
    game.currentScore = ['X'];
    game.firstRoll();
    expect(game.sweep).toBe(true);
  });

  it("should return amount of pins knocked down in second throw", function(){
    game.currentScore = [4];
    game.pinSweep();
    spyOn(game, 'secondRoll').and.returnValue(3);
    expect(game.secondRoll()).toEqual(3)
  });

  it("should return the frame count to zero", function(){
    game.newGame();
    expect(game.frameCount).toEqual(0);
  });

  it("should calculate the current score", function() {
    game.currentScore = [3, 4];
    expect(game.currentRoundScore()).toContain(7);
  });

  it("should increase frame Count when there are two scores in current score", function() {
    game.currentScore = [3, 4];
    game.currentRoundScore();
    game.increaseFrameCount();
    expect(game.frameCount).toEqual(1);
  });

  it("should return the current total", function() {
    game.currentScore = [5,2];
    game.currentRoundScore();
    game.runningTotal();
    game.currentScore = [3,6];
    game.currentRoundScore();
    game.runningTotal();
    expect(game.runningTotal()).toEqual(16);
  });

});
