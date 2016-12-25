'use strict';

describe("Game", function(){
  var game;
  var scoreboard;

  beforeEach(function(){
    game = new Game();
    scoreboard = jasmine.createSpy('Scoreboard');
  });

  it("should initialize with a fram count of zero", function(){
    expect(game.frameCount).toEqual(0);
  });

  it("should initialize with a empty current score", function(){
    expect(game.currentScore).toEqual([]);
  });

  it("should initialize with a empty score", function(){
    expect(game.score).toEqual([]);
  });

  it("should initialize with a false rack of pins", function(){
    expect(game.rackedPins).toBe(false);
  });

  it("should initialize with a false bonus roll", function(){
    expect(game.bonusRoll).toEqual(false);
  });

  it("should initialize with a new Scoreboard", function() {
    expect(game.scoreboard).toEqual(new Scoreboard())
  });

  it("should return a frame count each time the pins are racked up", function(){
    game.rackUp();
    expect(game.frameCount).toEqual(1)
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

  it("should call return amount of pins knocked down in first throw", function(){
    game.rackUp();
    spyOn(game, 'firstRoll').and.returnValue(4);
    expect(game.scoreboard.scoreFirstRoll(game.firstRoll())).toEqual(4);
  });

  it("should throw an error if pins are not racked", function() {
    expect(function(){game.firstRoll();}).toThrowError("Cannot Roll, Pins are not yet racked!")
  });

  it("should return sweep complete as true", function(){
    game.rackUp();
    game.firstRoll();
    expect(game.sweepComplete).toBe(true);
  });

  it("should return the left over pins", function(){
    game.rackUp();
    spyOn(game, 'firstRoll').and.returnValue(2);
    game.pinSweep(game.firstRoll());
    expect(game.setUpPins).toEqual([0,1,2,3,4,5,6,7,8]);
  });

  it("should return the true when remaining pins are returned", function(){
    game.rackUp();
    game.firstRoll();
    expect(game.sweepComplete).toBe(true);
  });

  it("should return amount of pins knocked down in second throw", function(){
    game.rackUp();
    game.firstRoll();
    spyOn(game, 'secondRoll').and.returnValue(3);
    expect(game.scoreboard.scoreSecondRoll(game.secondRoll())).toEqual(3)
  });

  it("should return a bonus roll true only on the 10th frame and if a srike or spare was scored", function(){
    game.frameCount = 10;
    spyOn(game, 'secondRoll').and.returnValue(10);
    game.bonusThirdRoll();
    expect(game.bonusRoll).toEqual(true);
  });

  it("should return amount of pins knocked down in third roll", function(){
    game.bonusRoll = true;
    game.thirdRoll();
    spyOn(game, 'thirdRoll').and.returnValue(5)
    expect(game.scoreboard.scoreThirdRoll(game.thirdRoll())).toEqual(5)
  });
});
