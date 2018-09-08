describe("Scorecard", function () {

  var scorecard;

  beforeEach(function () {
    scorecard = new Scorecard();
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

        beforeEach(function() {
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

  });



});