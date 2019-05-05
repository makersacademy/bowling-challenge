"use strict";

describe("Game", function() {

  var game;
  var standardFrame;
  var strikeFrame;

  beforeEach(function(){
    game = new Game();
    standardFrame = jasmine.createSpyObj('frame', ['score', 'calculateScore']);
    strikeFrame = jasmine.createSpyObj('frame', ['score', 'calculateScore']);
  });

  it("can add a frame to the frames array", function() {
    game.addFrame(standardFrame);
    expect(game.frames.length).toEqual(1);
  });

  it("can return the totalscore for the game", function() {
    strikeFrame.score.and.returnValue(19);
    standardFrame.score.and.returnValue(9);
    game.addFrame(strikeFrame);
    game.addFrame(standardFrame);
    expect(game.gameScore).toBe(28);
  });

});
