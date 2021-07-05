'use strict';

describe('Bowling', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling("Suzanne");
  });

  it("starts with a total score of 0", function() {
    expect(bowling.totalScore).toEqual(0);
  });

  it("starts with an empty score sheet", function(){
    expect(bowling._currentFrame()).toEqual(1);
    expect(bowling._currentRoll()).toEqual(1);
    expect(bowling._currentPins()).toEqual("");
    expect(bowling._currentScore()).toEqual("");
    expect(bowling._currentNotes()).toEqual("");
  });

  it("adds note of 'Bad luck' if no pins are knocked down", function() {
    bowling.knockedDown(0)
    expect(bowling.scoreSheet[0]["notes"]).toEqual("Bad luck");
  });

  describe("on the first frame and first roll", function() {
    it("can add number of pins knocked down to the scoreheet", function() {
      bowling.knockedDown(3);
      expect(bowling.scoreSheet[0]["pins"]).toEqual(3);
    });

    it("moves on to the next roll after the turn has been taken", function() {
      bowling.knockedDown(3);
      expect(bowling._currentFrame()).toEqual(1);
      expect(bowling._currentRoll()).toEqual(2);
      expect(bowling._currentPins()).toEqual("");
      expect(bowling._currentScore()).toEqual("");
      expect(bowling._currentNotes()).toEqual("");
    });
  });

  describe("on the first frame and second roll", function() {
    it("adds the new total score to the score sheet once second roll has been taken", function() {
      bowling.knockedDown(3);
      expect(bowling._currentScore()).toEqual("");
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[1]["score"]).toEqual(7);
    });
  });

  describe("strike", function() {

    beforeEach(function() {
      bowling.knockedDown(10);
    });

    it("skips forward to next frame", function() {
      console.log(bowling._currentFrame());
      expect(bowling._currentFrame()).toEqual(2);
      expect(bowling._currentRoll()).toEqual(1);
    });

    it("adds a note of 'Strike'", function() {
      expect(bowling.scoreSheet[0]["notes"]).toEqual("Strike");
    });

    it("adds the bonus score after the next frame is complete", function() {
      expect(bowling.scoreSheet[0]["score"]).toEqual("");
      bowling.knockedDown(3);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[1]["score"]).toEqual(17);
      expect(bowling.scoreSheet[1]["notes"]).toEqual("Strike: 10 pins plus bonus of 7 from next frame (rolls 1 and 2 from frame 2)");
    });

    it("adds the new total score after next frame is complete", function() {
      bowling.knockedDown(3);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[3]["score"]).toEqual(24);
    });
  });

  describe("spare", function() {

    beforeEach(function() {
      bowling.knockedDown(4);
      bowling.knockedDown(6);
    });

    it("adds the bonus score after the next roll is complete", function() {
      expect(bowling.scoreSheet[1]["score"]).toEqual("");
      expect(bowling.scoreSheet[1]["notes"]).toEqual("Spare");
      bowling.knockedDown(3);
      expect(bowling.scoreSheet[1]["score"]).toEqual(13);
      expect(bowling.scoreSheet[1]["notes"]).toEqual("Spare: 10 pins plus bonus of 3 from next roll (roll 1 frame 2)");
    });

    it("adds the new total score after next frame is complete", function() {
      bowling.knockedDown(3);
      expect(bowling.scoreSheet[1]["score"]).toEqual(13);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet[3]["score"]).toEqual(21);
    });
  });

  describe("10th frame", function() {

    beforeEach(function() {
      expect(bowling.scoreSheet.length).toEqual(20);
      for (var i = 0; i < 18; i++) {
        bowling.knockedDown(4);
      };
    });

    it("adds a third roll if a strike is rolled", function() {
      bowling.knockedDown(10);
      expect(bowling.scoreSheet.length).toEqual(21);
    });

    it("adds a third roll if a spare is rolled", function() {
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet.length).toEqual(21);
    });

    it("does not exceed 3 rolls total when strike", function() {
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[19]["score"]).toEqual(92);
      bowling.knockedDown(10);
      expect(bowling._currentScore()).toEqual(102);
      expect(bowling.scoreSheet.length).toEqual(21);
    });

    it("does not exceed 3 rolls total when spare", function() {
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet[19]["score"]).toEqual("");
      bowling.knockedDown(8);
      expect(bowling.scoreSheet[19]["score"]).toEqual(90);
      expect(bowling._currentScore()).toEqual(98);
      expect(bowling.scoreSheet.length).toEqual(21);
    });
  });
});
