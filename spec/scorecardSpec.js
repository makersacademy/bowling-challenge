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

    beforeEach(function() {
      scorecard.addRoll(5);
      scorecard.addRoll(5);
    });
    
    it("adds next roll twice to currentScore", function() {
      scorecard.addRoll(2);
      scorecard.addRoll(3);

      expect(scorecard.currentScore).toEqual(17);
    });

  });

  describe("when user gets a stike", function() {

    beforeEach(function() {
      scorecard.addRoll(10);
    });
    
    it("will move on to next frame", function() {
      expect(scorecard.frame).toEqual(2);
    });

    it("sets strike to true", function() {
      expect(scorecard.strike).toEqual(true);
    });

    it("adds the next two rolls to currentScore", function() {
      scorecard.addRoll(2);
      scorecard.addRoll(3);

      expect(scorecard.currentScore).toEqual(20);
    });

  });

  describe("when user enters a number higher than 10", function() {

    it("throws an error", function() {
      expect(function() {
        scorecard.addRoll(12);
      }).toThrowError("This is 10-pin bowling, not 12-pin bowling!");
    });

  });

});