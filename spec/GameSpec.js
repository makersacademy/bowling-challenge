'use strict';

describe("Game", function() {

    var game;
    var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("has a new frame at the start", function() {
    expect(game.currentFrame).toEqual(new Frame());
  });

  it("has an empty record of frames played", function() {
    expect(game.frames).toEqual([]);
  });

  it("has a total score for the game", function() {
    expect(game.totalScore).toEqual(0);
  });

  describe("bowl", function(){

    it("bowling a ball calculates a score", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      game.bowl();
      expect(game.totalScore).toEqual(4)
    });

  });

  describe("addFrame", function() {

    it("adds a frame", function(){
      game.addFrame(frame)
      expect(game.frames).toContain(frame)
    });

  });

});
