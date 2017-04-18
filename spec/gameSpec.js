'use strict';

describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it("responds to a Score method", function(){
    expect(game.Score).not.toBeUndefined()
  });

  it("has a rolling total", function(){
    expect(game.Score).toEqual(0);
  });

  it("can Bowl a ball and return a value between 1 & 10", function(){
    expect(game.Bowl()).toBeLessThan(11);
  });

  it("Score takes rolls into account", function(){
    spyOn(Math,'random').and.returnValue(0.2);
    (game.Bowl());    
    expect(game.Score).toEqual(3);
  });

  it("expect Game to have a FrameCount method", function(){
    expect(game.FrameCount).not.toBeUndefined()
  });

  it("needs a BowlCount in order to record FrameCount", function(){
    game.Bowl();
    expect(game.BowlCount).toBe(1);
  });

  it("FrameCount is set to 0 as default", function(){
    expect(game.FrameCount).toEqual(0);
  });

});
