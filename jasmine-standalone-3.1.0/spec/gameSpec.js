'use strict';

describe('Game', function() {
  var game;
  var gameSpecHelper;

  beforeEach(function(){
    game = new Game();
    gameSpecHelper = new GameSpecHelper();
  });

  it('has empty frame by default', function() {
    expect(game.frames).toEqual([]);
  })

  it('can be played', function() {
    var rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
    for (var i = 0; i < rolls.length; i++) {
      game.roll(rolls[i]);
    }
    expect(game.totalScore()).toEqual(133);
    expect(game.isGameOver()).toBe(true);
  });

  describe('#nextRollScoreLimit', function() {
    it('returns correct score limit when\
    current frame has no rolls', function() {
      var frame = new Frame(1);
      game.frames.push(frame);
      expect(game.nextRollScoreLimit()).toEqual(GameMaximumRollScore);
    });

    it('returns correct score limit when\
    current frame already has one roll', function() {
      var frame = new Frame(1);
      game.frames.push(frame);
      game.roll(5);
      expect(game.nextRollScoreLimit()).toEqual(GameMaximumRollScore - 5);
    });

    it('returns correct score limit when\
    its extra roll', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return false;
      });
      expect(game.nextRollScoreLimit()).toEqual(GameMaximumRollScore);
    });
  });

  describe('#isGameOver', function() {
    it('returns true if no more rolls possible', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });

      expect(game.isGameOver()).toBe(true);
    });

    it('returns false if more rolls possible', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 5);
      var lastFrame = createdFrames[4];
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });

      expect(game.isGameOver()).toBe(false);
    });

    it('returns false if some rolls are awaiting bonus', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return true;
      });
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });

      expect(game.isGameOver()).toBe(false);
    });

    it('returns false if last frame still can be rolled', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return true;
      });

      expect(game.isGameOver()).toBe(false);
    });
  });

  describe('#currentFrame', function() {
    it('returns last frame if it is awaiting bonus', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return true;
      });
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });

      var currentFrame = game.currentFrame();
      expect(currentFrame.frameNumber).toEqual(lastFrame.frameNumber);
    });

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

  describe('#roll', function() {
    it('adds extra roll', function() {
      var createdFrames = gameSpecHelper.pushFramesToTheGame(game, 10);
      var lastFrame = createdFrames[9];
      spyOn(lastFrame, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(lastFrame, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return true;
      });

      var roll = game.roll(3);
      expect(lastFrame.bonusRolls).toEqual([roll]);
    })

    it('adds bonus roll to the frame awaiting\
    bonus', function() {
      var frameFirst = new Frame(1);
      game.frames.push(frameFirst);
      spyOn(frameFirst, 'canRoll')
      .and
      .callFake(function() {
        return false;
      });
      spyOn(frameFirst, 'isAwaitingBonus')
      .and
      .callFake(function() {
        return true;
      });

      var roll = game.roll(3);
      expect(frameFirst.bonusRolls).toEqual([roll]);
    })

    it('adds roll to the frame', function() {
      var roll = game.roll(3);
      expect(game.frames.length).toEqual(1);
      expect(game.frames[0].rolls[0]).toEqual(roll);
    });

    it('returns correct roll score, roll frame\
    number and roll number', function() {
      var frameFirst = new Frame(1);
      game.frames.push(frameFirst);
      var frameSecond = new Frame(2);
      game.frames.push(frameSecond);
      spyOn(frameSecond, 'canRoll')
      .and
      .callFake(function() {
        return true;
      });

      var rollFirst = game.roll(3);
      expect(rollFirst.score).toEqual(3);
      expect(rollFirst.frameNumber).toEqual(2);
      expect(rollFirst.rollNumber).toEqual(1);

      var rollSecond = game.roll(4);
      expect(rollSecond.score).toEqual(4);
      expect(rollSecond.frameNumber).toEqual(2);
      expect(rollSecond.rollNumber).toEqual(2);
    });
  });

  // describe('#totalScore', function() {
  //   it('returns total score', function() {
  //
  //   });
  // });
});
