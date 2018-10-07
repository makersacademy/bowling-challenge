'use strict';

describe('Game',function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame',['rolls']);
  });

  it('starts with no frames by default', function(){
    expect(game.frames).toEqual([]);
  });

  describe('adding frames', function(){
    it('can add a frame to a game', function(){
      game.addFrame(frame)
      expect(game.frames).toEqual([frame]);
    });

    it('can add more than frame to a game', function(){
      game.addFrame(frame)
      game.addFrame(frame)
      expect(game.frames).toEqual([frame, frame]);
    });

    it('does not add more than 10 frames to a game', function(){
      for (var i = 0; i < 10; i++) {
        game.addFrame(frame);
      };
      expect(function(){game.addFrame(frame)}).toThrowError('This game already has ten frames');
    });
  });
});
