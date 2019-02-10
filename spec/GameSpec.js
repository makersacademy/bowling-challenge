'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('there is no frame by default', function () {
    expect(game.frameNumber).toEqual(0);
  });

  it('starts from zero score in a new game', function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  it('counts pins knocked down in a frame', function(){
    game.roll(5);
    game.roll(4);
    expect(game.getCurrentFrame()).toEqual([5,4]);
  });

  it('counts score after each roll', function (){
    game.roll(5);
    game.roll(4);
    expect(game.getTotalScore()).toEqual(9);
  });

  it('counts frame number', function () {
    game.newFrame()
    expect(game.frameNumber).toEqual(1)
  });

  it('resets frame score in a new frame', function () {
    game.roll(10)
    game.newFrame()
    expect(game.getCurrentFrame()).toEqual([]);
  });

  it('allows only two rolls in each frame', function () {
    game.newFrame()
    game.roll(1)
    game.roll(3)
    expect(function(){game.roll(2)}).toThrowError('You have already rolled twice, please start a new frame.')
  });

  it('lists knocked down pins for all rolls', function () {
    game.roll(1)
    game.roll(3)
    expect(game.rolls).toEqual([1,3]);
  });

  it('can roll three times at last frame', function () {
    game.frameNumber = 10
    game.roll(1)
    game.roll(2)
    game.roll(3)
    expect(function(){game.roll(1)}).toThrowError('You can only roll three times on the last frame')
  });

});
