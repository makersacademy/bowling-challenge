// Tests should be organized under appropriate describe blocks, with descriptive
// titles and should be DRY. They are unDry if they are repeating themselves in
// the test in a way that could be extracted). Can you understand exactly how to
// use the solution solely by reading the tests?

// Many solutions rely on a 'virtuous consumer' - i.e. they do not validate inputs
// or check for out of range values etc. In the bowling challenge this includes
// checking for odd corner cases such as the gutter game and the perfect game, and
// odd combinations of strikes and spares. But also defending against non-numeric
// or meaningless values being passed in to the engine.

'use strict';

describe('Game:', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with 10 pins', function(){
    expect(game.getCurrentPinsStanding()).toEqual(10);
  });

  it('starts frame status as "ready to play"', function(){
    expect(game.getCurrentFrameStatus()).toEqual('ready to play');
  });

  describe('frames available', function(){
    it('start with 10', function(){
      expect(game.getCurrentFramesLeft()).toEqual(10);
    });
    it('avaible can be deducted', function(){
      game.deductFrames();
      expect(game.getCurrentFramesLeft()).toEqual(9)
    });
  });

  describe('current frame', function(){
    it('starts on 0', function(){
      expect(game.getCurrentFrame()).toEqual(0);
    });

    it('can be updated', function(){
      game.updateCurrentFrame();
      expect(game.getCurrentFrame()).toEqual(1)
    });
  });

  describe('Player', function(){

    describe('starts with', function(){

      it('a score of 0', function(){
        expect(game.getCurrentPlayerScore()).toEqual(0);
      });

      it('a bonus of 0', function(){
        expect(game.getCurrentBonus()).toEqual(0);
      });
    });

    describe('can start a frame', function(){

      it('if frame status is "ready to play"', function(){
        game.startFrame();
        expect(game.getCurrentFramesLeft()).toEqual(9);
        expect(game.getCurrentFrame()).toEqual(1);
        expect(game.getCurrentFrameStatus()).toEqual('unavailable')
      });
    });
    describe('cannot start a frame', function(){

      it('if a frame is already being played', function(){
        game.startFrame();
        game.startFrame();
        expect(game.getCurrentFrameStatus()).toEqual('unavailable')
        expect(game.startFrame()).toContain('cannot start frame')
      });
    });
  });
});
