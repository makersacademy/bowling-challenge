describe('Features', function() {

  beforeEach(function() {
    scoresheet = new Scoresheet();
  });

  describe('Play a game', function() {
    it('displays result of a given frame/roll', function() {
      logRollResults([3,6])
      expect(scoresheet.frames[0].rolls[0]).toEqual(3);
      expect(scoresheet.frames[0].rolls[1]).toEqual(6);
    });
  });

  describe('Output display score of individual frame', function() {
    it('will not display if strike achieved and bonus not yet added (0/2 bonus rolls)', function() {
      logRollResults([10])
      expect(scoresheet.frameScoreDisplay(0)).toBe(null);
    });

    it('will not display if strike achieved and bonus not yet added (1/2 bonus rolls)', function() {
      logRollResults([10])
      logRollResults([10])
      expect(scoresheet.frameScoreDisplay(0)).toBe(null);
    });

    it('will display if strike achieved and bonus added (2/2 bonus rolls - both strikes)', function() {
      logRollResults([10])
      logRollResults([10])
      logRollResults([10])
      expect(scoresheet.frameScoreDisplay(0)).toEqual(30);
    });

    it('will display if strike achieved and bonus added (2/2 bonus rolls - one strike, one non-strike)', function() {
      logRollResults([10])
      logRollResults([10])
      logRollResults([4])
      expect(scoresheet.frameScoreDisplay(0)).toEqual(24);
    });

    it('will display if strike achieved and bonus added (2/2 bonus rolls - both non-strikes)', function() {
      logRollResults([10])
      logRollResults([6])
      logRollResults([4])
      expect(scoresheet.frameScoreDisplay(0)).toEqual(20);
    });

    it('will not display if spare achieved and bonus not yet added (0/1 bonus rolls)', function() {
      logRollResults([6,4])
      expect(scoresheet.frameScoreDisplay(0)).toBe(null);
    });

    it('will display if spare achieved and bonus added (1/1 bonus rolls)', function() {
      logRollResults([6,4])
      logRollResults([10])
      expect(scoresheet.frameScoreDisplay(0)).toEqual(20);
    });

    it('will display if both rolls of frame equal less than 10', function() {
      logRollResults([3,2])
      expect(scoresheet.frameScoreDisplay(0)).toEqual(5);
    });

    it('will display in final frame if first two rolls equal less than 10', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([3,2])
      expect(scoresheet.frameScoreDisplay(9)).toEqual(5);
    });

    it('will not display in final frame if strike achieved and bonus not yet added (0/2 bonus rolls)', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10])
      expect(scoresheet.frameScoreDisplay(9)).toBe(null);
    });

    it('will not display in final frame if strike achieved and bonus not yet added (1/2 bonus rolls)', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10,7])
      expect(scoresheet.frameScoreDisplay(9)).toBe(null);
    });

    it('will display in final frame if strike achieved and bonus added (2/2 bonus rolls)', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10,7,2])
      expect(scoresheet.frameScoreDisplay(9)).toEqual(19);
    });

    it('will not display in final frame if spare achieved and bonus not yet added (0/1 bonus rolls)', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([7,3])
      expect(scoresheet.frameScoreDisplay(9)).toBe(null);
    });

    it('will display in final frame if spare achieved and bonus added (1/1 bonus rolls)', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([7,3,4])
      expect(scoresheet.frameScoreDisplay(9)).toEqual(14);
    });
  });

  describe('End a frame', function() {
    it('will not end frame after one roll if strike is not achieved', function() {
      logRollResults([3])
      expect(scoresheet.currFrameOver()).toBe(false);
    });

    it('will end frame after one roll if strike is achieved', function() {
      logRollResults([10])
      expect(scoresheet.currFrameOver()).toBe(true);
    });

    it('will end frame after two rolls if strike is not achieved', function() {
      logRollResults([4,5])
      expect(scoresheet.currFrameOver()).toBe(true);
    });

    it('will allow three rolls in final frame if spare is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([5,5])
      expect(scoresheet.currFrameOver()).toBe(false);
    });

    it('will allow three rolls in final frame if strike is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10,0])
      expect(scoresheet.currFrameOver()).toBe(false);
    });
  });

  describe('End a game', function() {
    it('will only allow two rolls in final frame if strike or spare is not achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([2,3])
      expect(scoresheet.gameOver()).toBe(true);
    });

    it('will allow three rolls in final frame if spare is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([5,5])
      expect(scoresheet.gameOver()).toBe(false);
    });

    it('will allow three rolls in final frame if strike is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10,0])
      expect(scoresheet.gameOver()).toBe(false);
    });

    it('will end game after third roll in final frame if spare is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([5,5,0])
      expect(scoresheet.gameOver()).toBe(true);
    });

    it('will end game after third roll in final frame if strike is achieved', function() {
      for(var i = 0; i < 9; i++) {
        logRollResults([0,0]);
      };
      logRollResults([10,0,0])
      expect(scoresheet.gameOver()).toBe(true);
    });
  });

  var logRollResults = function(testResults) {
    frame = new Frame;
    for(var i = 0; i < testResults.length; i++) {
      frame.logRollResult(testResults[i]);
    };
    scoresheet.addFrame(frame);
  };

});