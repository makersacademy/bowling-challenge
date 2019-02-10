'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('a game always start with first frame', function () {
    expect(game.frameNumber).toEqual(1);
  });

  it('starts from zero score in a new game', function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  it('counts pins knocked down in a frame', function(){
    game.roll(5);
    game.roll(4);
    expect(game.getCurrentFrame()).toEqual([5,4]);
  });

  it('can only knock 10 pins maximum', function(){
    expect(function(){game.roll(11)}).toThrowError('You can only knock 10 pins in a roll.')
  });

  it('counts score after each roll', function (){
    game.roll(3);
    game.roll(4);
    expect(game.getTotalScore()).toEqual(7);
  });

  it('counts frame number', function () {
    game.newFrame()
    game.newFrame()
    expect(game.frameNumber).toEqual(3)
  });

  it('resets frame score in a new frame', function () {
    game.roll(10)
    game.newFrame()
    expect(game.getCurrentFrame()).toEqual([]);
  });

  it('allows only two rolls in each frame', function () {
    game.roll(1)
    game.roll(3)
    expect(function(){game.roll(2)}).toThrowError('You have already rolled twice, please start a new frame.')
  });

  it('lists knocked down pins for all rolls', function () {
    game.roll(0)
    game.roll(3)
    expect(game.rolls).toEqual([0,3]);
  });

  it('can roll three times at last frame', function () {
    game.frameNumber = 10
    game.roll(1)
    game.roll(2)
    game.roll(3)
    expect(function(){game.roll(1)}).toThrowError('You can only roll three times on the last frame')
  });

  describe('Counts bonuses', function () {
    it('is a strike', function () {
      game.roll(10)
      expect(game.isStrike()).toBe(true)
    });

    it('is a spare', function () {
      game.roll(5)
      game.roll(5)
      expect(game.isSpare()).toBe(true)
    });
  });

  it('save each frame ', function () {
    game.roll(10)
    game.endFrame()
    game.newFrame()
    game.roll(5)
    game.roll(5)
    game.endFrame()
    expect(game.frameLog).toEqual([[10],[5,5]]);
  });

  it('stores score of each frame ', function () {
    game.roll(10)
    game.endFrame()
    game.newFrame()
    game.roll(5)
    game.roll(5)
    game.endFrame()
    expect(game.frameScore).toEqual([10,10]);
  });

});
