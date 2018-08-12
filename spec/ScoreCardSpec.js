"use strict";

var scorecard;

beforeEach(function () {
  scorecard = new ScoreCard();
});

describe("#rolls", function () {
  it("returns an array of all rolls so far for the current game", function () {
    expect(scorecard.rolls).toEqual([]);
  });
});

describe("#frame_scores", function () {
  it("returns an array of all frame scores so far for the current game", function () {
    expect(scorecard.rolls).toEqual([]);
  });
});

describe("#current_roll", function() {

  it("initiates at 1", function () {
    expect(scorecard.current_roll).toEqual(1);
  });

  describe("on the first roll of a frame", function() {

    it("increases by 1 if not a strike", function () {
      scorecard.enter_roll(7);
      expect(scorecard.current_roll).toEqual(2);
    });

    it("increases by 2 if strike", function () {
      scorecard.enter_roll(10);
      expect(scorecard.current_roll).toEqual(3);
    });

  });

  describe("on the second roll of a frame", function () {

    it("increases by 1 if less than 10 pins knocked down", function () {
      scorecard.enter_roll(0);
      scorecard.enter_roll(7);
      expect(scorecard.current_roll).toEqual(3);
    });


    it("also increases by 1 if ten pins knocked down", function () {
      scorecard.enter_roll(0);
      scorecard.enter_roll(10);
      expect(scorecard.current_roll).toEqual(3);
    });

    it("throws an error if last roll + current roll > 10 pins", function () {
      scorecard.enter_roll(7);
      expect(function() { scorecard.enter_roll(8) }).toThrowError("Can not knock more than 10 pins in a single frame");
    });

  });

});

// frames will work the same way up until last frame, in which current_frame will be 10 anyway
describe("#current_frame", function() {
  it("initiates at 1", function () {
    expect(scorecard.current_frame).toEqual(1);
  });
  it("if no strike on first round, changes after next roll", function () {
    scorecard.enter_roll(7);
    expect(scorecard.current_frame).toEqual(1);
    scorecard.enter_roll(2);
    expect(scorecard.current_frame).toEqual(2);
  });
  it("if strike on first round, changes immediately", function () {
    scorecard.enter_roll(10);
    expect(scorecard.current_frame).toEqual(2);
  })
})

describe("#enter_roll", function () {
  it("adds the new roll to the 'rolls' array", function() {
    scorecard.enter_roll(4);
    scorecard.enter_roll(5);
    expect(scorecard.rolls).toEqual([4, 5]);
  });
});

describe("#last_frame_was_strike", function () {
  it("returns true if last frame was a strike", function () {

  });
  it("returns false if last frame was not a strike", function () {

  });
  it("returns false if last frame was a spare", function () {

  });
});

describe("#two_frames_ago_was_strike", function () {
  it("returns true if two frames ago was a strike", function () {

  });
  it("returns false if two frames ago was not a strike", function () {

  });
  it("returns false if two frames ago was a spare", function () {

  });
});

describe("#last_frame_was_spare", function () {
  it("returns true if last frame was a spare", function () {

  });
  it("returns false if last frame was not a spare", function () {

  });
  it("returns false if last frame was a strike", function () {

  });
});
