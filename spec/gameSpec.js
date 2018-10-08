'use strict';

describe('Game',function(){
  var game;
  var frame;
  var frame2;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame',['totalScore']);
    frame2 = jasmine.createSpyObj('frame2',['totalScore']);
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

  describe('total game score', function(){
    it('returns total score of current game', function(){
      game.addFrame(frame);
      frame.totalScore.and.returnValue(6)
      expect(game.totalGameScore()).toEqual(6)
    });

    it('returns total score of current game', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.totalScore.and.returnValue(6)
      frame2.totalScore.and.returnValue(7)
      expect(game.totalGameScore()).toEqual(13)
    });
  });
});
