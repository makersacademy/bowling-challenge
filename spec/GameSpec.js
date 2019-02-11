'use strict';

describe("Game", function() {

  var game;
  var currentFrame;

  beforeEach(function() {
    game = new Game();
  });

  // FEATURE TEST #1
  it("gutter game score is zero", function() {
    expect(game.finalScore()).toEqual(0);
  });

  // FEATURE TEST #2
  it("1 point per frame equals 10", function() {
    for (var i = 1; i <= 10; i++) {
    game.recordFrame(1);
    }
    expect(game.finalScore()).toEqual(10);
  });
      // UNIT TEST 1
      it("can record the score of a frame", function (){
        game.recordFrame(1);
        expect(game.frameResults.pop()).toEqual(1);
      });

  // FEATURE TEST #3
  it("1 point per roll equals 20", function() {
    for (var i = 1; i <= 10; i++) {
        // currentFrame = new Frame();
        // currentFrame.recordRoll(1)
        // currentFrame.recordRoll(1)
        // game.recordFrame(currentFrame.score());
        currentFrame = jasmine.createSpyObj('frame',['recordRoll', 'score']);
        // currentFrame.recordRoll.and.returnValue(1);
        // currentFrame.recordRoll.and.returnValue(1);
        currentFrame.score.and.returnValue(2)
        game.recordFrame(currentFrame.score());
    }
    expect(game.finalScore()).toEqual(20);
  });

  // FEATURE TEST #4
  it("10 strikes equals 200", function() {
    for (var i = 1; i <= 10; i++) {
        currentFrame = new Frame();
        currentFrame.recordRoll(10)
        game.recordFrame(currentFrame.score());
    }
    expect(game.finalScore()).toEqual(200);
  });


});
