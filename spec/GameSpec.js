'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game
    frame = jasmine.createSpyObj('frame', ['isComplete'])
    frame.isComplete.and.returnValue(true);
    frame.totalPoints = 5
  });

  it('can return the total points from all played frames', function(){
    game.play(frame);
    game.play(frame);
    expect(game.totalPoints()).toEqual(10);
  });

  it('starts with 0 completed frames', function() {
    expect(game.compelteFrames).toBeUndefined()
  });

  it('can record a completed frame', function() {
    game.play(frame);
    expect(game.completeFrames).toContain(frame);
  });

  it('can return the previous frame', function() {
    game.play(frame)
    expect(game.previousFrame()).toEqual(frame)
  });
});
