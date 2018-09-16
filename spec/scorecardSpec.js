describe("Scorecard", function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
    scorecard.start();
  });

  describe("addRoll", function () {

    it("adds a roll to the currentFrame", function () {
      scorecard.addRoll(6);
      expect(scorecard.currentFrame).toContain(6);
    });

    describe("when 2 rolls have been added", function () {

      beforeEach(function () {
        scorecard.addRoll(6);
        scorecard.addRoll(1);
      });

      it("adds the sum of the current frame to currentScore", function () {
        expect(scorecard.currentScore).toEqual(7);
      });

      it("currentFrame is pushed into currentGame", function () {
        expect(scorecard.currentGame).toContain([6, 1]);
      });

      it("clears the currentFrame", function () {
        expect(scorecard.currentFrame).toEqual([]);
      });

      it("increases the frame count by 1", function () {
        expect(scorecard.frame).toEqual(2);
      });

      describe("if they equal 10", function () {

        beforeEach(function () {
          scorecard.addRoll(5);
          scorecard.addRoll(5);
        });

        it("sets wasLastFrameSpare to true", function () {
          expect(scorecard.wasLastFrameSpare()).toEqual(true);
        });
      });

    });

  });

  describe("when user gets a spare", function () {

    beforeEach(function () {
      scorecard.addRoll(5);
      scorecard.addRoll(5);
    });

    it("adds next roll twice to currentScore", function () {
      scorecard.addRoll(2);
      scorecard.addRoll(3);

      expect(scorecard.currentScore).toEqual(17);
    });

  });

  describe("when user gets a stike", function () {
    beforeEach(function () {
      scorecard.addRoll(10);
    });

    it("will move on to next frame", function () {
      expect(scorecard.frame).toEqual(2);
    });

    it("sets strike to 2", function () {
      expect(scorecard.strike).toEqual(2);
    });

    it("adds the next two rolls to currentScore", function () {
      scorecard.addRoll(2);
      scorecard.addRoll(3);

      expect(scorecard.currentScore).toEqual(20);
    });

  });

  describe("on the last frame", function () {

    beforeEach(function () {
      for (var i = 1; i <= 18; i++) {
        scorecard.addRoll(3);
      }
    });

    describe("if the user gets a spare", function () {

      it("will give them a bonus turn", function () {
        scorecard.addRoll(9);
        scorecard.addRoll(1);
        scorecard.addRoll(6);

        expect(scorecard.currentScore).toEqual(70);
      });

    });

    describe("if the user gets a strike", function () {

      it("will give them a bonus turn", function () {
        scorecard.addRoll(10);
        scorecard.addRoll(1);
        scorecard.addRoll(6);

        expect(scorecard.currentScore).toEqual(71);
      });

    });

  });

  describe("user bowls the perfect game", function () {

    beforeEach(function () {
      for (var i = 1; i <= 21; i++) {
        scorecard.addRoll(10);
      }
    });

    it("score will equal 300", function () {
      expect(scorecard.currentScore).toEqual(300);
    });

  });

  describe("user bowls a gutter game", function () {
    beforeEach(function () {
      for (var i = 1; i <= 20; i++) {
        scorecard.addRoll(0);
      }
    });

    it("score will be 0", function () {
      expect(scorecard.currentScore).toEqual(0);
    });
  });

  describe("when user enters a number higher than 10", function () {

    it("throws an error", function () {
      expect(function () {
        scorecard.addRoll(12);
      }).toThrowError("This is 10-pin bowling, not 12-pin bowling!");
    });

  });

  describe("when user enters more than 10 in a single frame", function () {

    it("throws an error", function() {
      scorecard.addRoll(7);

      expect(function () {
        scorecard.addRoll(7);
      }).toThrowError("Stop cheating...there aren't even that many pins!");
    });

  });

});