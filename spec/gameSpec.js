'use strict';

describe('Game',function(){
  var game;
  var frame;
  var frame2;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame',['totalFrameScore', 'isASpare', 'isAStrike']);
    frame2 = jasmine.createSpyObj('frame2',['totalFrameScore', 'isASpare', 'isAStrike', 'pinsFirstRoll']);
    self = jasmine.createSpyObj('self', ['frameBonus'])
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

  describe('current game score', function(){
    it('returns total score of game even though only one roll', function(){
      game.addFrame(frame);
      frame.totalFrameScore.and.returnValue(6)
      expect(game.frameBonus).toHaveBeenCalled
      expect(game.currentGameScore()).toEqual(6)
    });

    it('returns total score of game (no bonuses implied)', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.totalFrameScore.and.returnValue(6)
      frame2.totalFrameScore.and.returnValue(7)
      expect(game.frameBonus).toHaveBeenCalled
      expect(game.currentGameScore()).toEqual(13)
    });

    it('returns total score of game with bonuses implied', function() {
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.totalFrameScore.and.returnValue(10)
      frame.isASpare.and.returnValue(true)
      frame2.totalFrameScore.and.returnValue(7)
      frame2.pinsFirstRoll.and.returnValue(3)
      expect(game.currentGameScore()).toEqual(20)
    });

  });

  describe('frameBonus', function(){
    it('returns bonus of current frame when not strike or spare', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(false)
      frame.isAStrike.and.returnValue(false)
      expect(game.frameBonus(frame)).toEqual(0)
    });

    it('returns bonus of current frame when strike', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(false)
      frame.isAStrike.and.returnValue(true)
      frame2.totalFrameScore.and.returnValue(8)
      expect(frame2.totalFrameScore()).toHaveBeenCalled
      expect(game.frameBonus(frame)).toEqual(8)
    });

    it('returns bonus of current frame when spare', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(true)
      frame.isAStrike.and.returnValue(false)
      frame2.pinsFirstRoll.and.returnValue(7)
      expect(frame2.pinsFirstRoll()).toHaveBeenCalled
      expect(game.frameBonus(frame)).toEqual(7)
    });
  });

});
