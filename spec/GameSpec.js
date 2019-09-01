"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("stores total score in one game", function() {
    expect(game.totalScore).toEqual(0);
  });

  it("stores current frame", function() {
    expect(game.current_frame).toEqual(0);
  });

  it("stores first bowl", function() {
    expect(game.bowlOne).toEqual(0);
  });

  it("stores second bowl", function() {
    expect(game.bowlTwo).toEqual(0);
  });

  it("stores input value to bowlOne", function(){
    game.bowlOne = 5;
    expect(game.bowlOne).toEqual(5);
  })

  it("stores input value to bowlTwo", function(){
    game.bowlOne = 5;
    expect(game.bowlOne).toEqual(5);
  })

  it("adds sum of first bowl and second bowl to frame", function(){
    game.bowlOne = 5;
    game.bowlTwo = 4;
    game.addFrameScore();
    expect(game.frames[Object.keys(game.frames)[game.current_frame]]).toEqual(9);
  })

  it("resets bowl one and bowl two back to 0 for next round", function(){
    game.bowlOne = 5;
    game.bowlTwo = 4;
    game.resetBowls();
    expect(game.bowlOne).toEqual(0);
    expect(game.bowlTwo).toEqual(0);
  })

  it("sets max number for pins allowed on the second bowl based on 10 pins", function(){
    game.pins = 4;
    game.setPinsRange();
    expect(game.bowlTwo).toEqual(6);
  })


});