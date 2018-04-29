'use strict';

describe('Game', function() {
 var game;

 beforeEach(function(){
   game = new Game();
 });

  it('has empty frame by default', function() {
    expect(game.frames).toEqual([]);
  })

  describe('#currentFrame', function() {
    it('returns correct frame if no frames before', function() {
      var frame = game.currentFrame();
      expect(frame.frameNumber).toEqual(1);
      expect(game.frames.length).toEqual(1);
    });

    it('returns current frame if still can roll in a frame', function() {
      var frameFirst = new Frame(1);
      game.frames.push(frameFirst);
      var frameSecond = new Frame(2);
      game.frames.push(frameSecond);
      spyOn(frameSecond, 'canRoll')
      .and
      .callFake(function() {
        return true;
      });

      var currentFrame = game.currentFrame();
      expect(currentFrame).toEqual(frameSecond);
      expect(game.frames.length).toEqual(2);
    });

    it('returns current frame if can not roll in a frame', function() {
      var frameFirst = new Frame(1);
      game.frames.push(frameFirst);
      var frameSecond = new Frame(2);
      game.frames.push(frameSecond);
      spyOn(frameSecond, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });

      var currentFrame = game.currentFrame();
      expect(currentFrame.frameNumber).toEqual(3);
      expect(game.frames.length).toEqual(3);
    });
  });
});
