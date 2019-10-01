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

// Can this test be refactored as the next test frameLog tested this_frame implicitly
  it('counts pins knocked down in a frame', function(){
    game.roll(5);
    game.roll(4);
    expect(game._frame).toEqual([5,4]);
  });

  it('records pins knocked down in a frame', function(){
    game.roll(5);
    game.roll(4);
    game.endFrame();
    expect(game.frameLog[1]).toEqual([5,4]);
  });

  it('can only knock 10 pins maximum within a frame', function(){
    game.roll(6);
    expect(function(){game.roll(5)}).toThrowError('You can only knock 10 pins in a roll.')
  });

  it('counts score after each roll', function (){
    game.roll(3);
    game.roll(4);
    game.endFrame();
    expect(game.getTotalScore()).toEqual(7);
  });
  //
  it('counts frame number with new frames', function () {
    game.newFrame()
    game.newFrame()
    expect(game.frameNumber).toEqual(3)
  });

  it('clears current frame reecord for a new frame', function () {
    game.roll(1)
    game.roll(1)
    game.newFrame()
    expect(game.getCurrentFrame()).toEqual([]);
  });

  it('allows only two rolls in each frame', function () {
    game.roll(1)
    game.roll(3)
    expect(function(){game.roll(2)}).toThrowError('You have already rolled twice, please start a new frame.')
  });

  it('can roll three times in last frame if it was a strike', function () {
    game.frameNumber = 10
    game.roll(10)
    game.roll(2)
    game.roll(3)
    expect(function(){game.roll(1)}).toThrowError('You can only roll three times on the last frame if you had a strike')
  });
  it('cannot roll three times in last frame if no bonus', function () {
    game.frameNumber = 10
    game.roll(2)
    game.roll(3)
    expect(function(){game.roll(1)}).toThrowError('You cannot roll three times in the last frame if no bonus.')
  });
  //
  // it('save each frame ', function () {
  //   game.roll(1)
  //   game.roll(7)
  //   game.endFrame()
  //   game.newFrame()
  //   game.roll(3)
  //   game.roll(5)
  //   game.endFrame()
  //   expect(game.frameLog).toEqual([[1,7],[3,5]]);
  // });
  //
  it('stores score of each frame ', function () {
    game.roll(1)
    game.roll(7)
    game.endFrame()
    game.newFrame()
    game.roll(3)
    game.roll(5)
    game.endFrame()
    game.countBonus()
    expect(game.frameScore).toEqual([0,8,8]);
  });

  describe('Counts bonuses', function () {

    it('can check if previous frame is a strike', function () {
      game.roll(5)
      game.roll(5)
      game.endFrame()
      game.newFrame()

      game.roll(1)
      game.roll(4)
      game.endFrame()
      game.countBonus()

      expect(game._spareBonus()).toEqual(true)
      expect(game._strikeBonus()).toEqual(false)
      expect(game.getTotalScore()).toEqual(16)
    });

    it('can check if previous frame is a strike', function () {
      game.roll(10)
      game.endFrame()
      game.newFrame()

      game.roll(1)
      game.roll(4)
      game.endFrame()
      game.countBonus()

      expect(game._spareBonus()).toEqual(false)
      expect(game._strikeBonus()).toEqual(true)
      expect(game.getTotalScore()).toEqual(20)
    });

  });


});
