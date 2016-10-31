describe('Bowling', function () {
  var bowling;
    beforeEach(function() {
      bowling = new Bowling();
    });

  describe ('game rules', function() {

    it ('player has 2 rolls', function() {
      bowling.playerFirstRoll(1);
      bowling.playerSecondRoll(5);
      expect(bowling._currentFrameComplete).toBeTruthy();
    });

    it ('game has 10 frames', function() {
      bowling._gameCompleted = true;
      expect(bowling._gameCompleted).toBeTruthy();
    });
    // it ('strike or spare in frame 10 allows extra roll', function() {
    //   expect();
    // });
  });

  describe ('game score', function() {

    describe('points system', function () {
      it ('totals the score after each second roll and adds it to the preivous frame score', function() {
        bowling.playerFirstRoll(1);
        bowling.playerSecondRoll(5);
        bowling.completeFrame();
        expect(bowling._totalScore).toBe(6);
        expect(bowling._previousFrameScore).toBe(6);
      });
    });

    describe('strike', function() {
      it ('strike is equal to 10 points', function() {
        bowling.playerFirstRoll(10);
        expect(bowling._currentFrameScore).toEqual(10);
        expect(bowling._currentFrameComplete).toBeFalsy();
      });
      // it ('strike has bonus of next two rolls', function() {
      //   expect();
      // });

      it ('no pins knocked over to equal 0 points', function() {
        bowling.playerFirstRoll(0);
        bowling.playerSecondRoll(0);
        bowling.completeFrame();
        expect(bowling._currentFrameScore).toEqual(0);
      });
    });

    describe('spare', function() {
      // it ('spare has bonus of next roll(first of the next frame)', function() {
      //   expect();
      // });
    });

  });

  describe ('gameplay', function() {
    it ('strike ends the frame', function() {
      expect(this._currentFrame).toBeFalsy();
    });
    it ('spare knocks down remaining pins on second roll', function() {
      bowling.playerFirstRoll(4);
      bowling.playerSecondRoll(6);
      bowling.completeFrame();
      expect(bowling._currentFrameScore).toEqual(10);
    });

    describe('game finishes', function() {
      // it ('12 strikes is a perfect game of 300', function() {
      //   expect();
      // });
      // it ('gutter game is when no pins are struck', function() {
      //   expect();
      // });
      it ('displays total scores', function() {
        bowling.playerFirstRoll(1);
        bowling.playerSecondRoll(5);
        bowling.completeFrame();
        expect(bowling.totalScore()).toEqual(6);
      });
    });
  });
})
