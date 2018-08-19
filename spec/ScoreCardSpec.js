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

  describe("special conditions", function () {

    describe("single strike", function () {
      it("does not update until the next non-strike", function () {
        scorecard.enter_roll(10);
        expect(scorecard.frame_scores).toEqual([]);
      });
      it("adds only one score of 20 if spare next", function () {
        scorecard.enter_roll(10);
        scorecard.enter_roll(6);
        scorecard.enter_roll(4);
        expect(scorecard.frame_scores).toEqual([20]);
      });
      it("adds both scores if not spare or strike next", function () {
        scorecard.enter_roll(10);
        scorecard.enter_roll(6);
        scorecard.enter_roll(3);
        expect(scorecard.frame_scores).toEqual([19, 9]);
      });
    });

    describe("double strike", function () {
      it("only adds one score of 30 if strike next", function () {
        scorecard.enter_roll(10);
        scorecard.enter_roll(10);
        scorecard.enter_roll(10);
        expect(scorecard.frame_scores).toEqual([30]);
      });
      it("adds two scores if spare next", function () {
        scorecard.enter_roll(10);
        scorecard.enter_roll(10);
        scorecard.enter_roll(7);
        scorecard.enter_roll(3);
        expect(scorecard.frame_scores).toEqual([27, 20]);
      });
      it("adds two scores if neither spare nor strike next", function () {
        scorecard.enter_roll(10);
        scorecard.enter_roll(10);
        scorecard.enter_roll(7);
        scorecard.enter_roll(2);
        expect(scorecard.frame_scores).toEqual([27, 19, 9]);
      });
    });

    describe("spare", function () {
      it("adds a score of 20 if a strike next", function () {
        scorecard.enter_roll(8);
        scorecard.enter_roll(2);
        scorecard.enter_roll(10);
        expect(scorecard.frame_scores).toEqual([20]);
      });
      it("adds a score of 10 + next roll as soon as it occurs", function () {
        scorecard.enter_roll(8);
        scorecard.enter_roll(2);
        scorecard.enter_roll(7);
        expect(scorecard.frame_scores).toEqual([17]);
      });
    });

  });

});

describe("#current_roll", function() {

  it("initiates at 1", function () {
    expect(scorecard.current_roll).toEqual(1);
  });

  describe("on the first roll of a frame", function () {
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
  it("is true if last frame was a strike", function () {
    scorecard.enter_roll(10);
    expect(scorecard.last_frame_was_strike).toBe(true);
  });
  it("is false if last frame was not a strike", function () {
    scorecard.enter_roll(3);
    scorecard.enter_roll(5);
    expect(scorecard.last_frame_was_strike).toBe(false);
  });
  it("is false if last frame was a spare", function () {
    scorecard.enter_roll(3);
    scorecard.enter_roll(7);
    expect(scorecard.last_frame_was_strike).toBe(false);
  });
});

describe("#two_frames_ago_was_strike", function () {
  it("is true if two frames ago was a strike", function () {
    scorecard.enter_roll(10);
    scorecard.enter_roll(3);
    scorecard.enter_roll(5);
    expect(scorecard.two_frames_ago_was_strike).toBe(true);
  });
  it("is false if two frames ago was not a strike", function () {
    scorecard.enter_roll(4);
    scorecard.enter_roll(4);
    scorecard.enter_roll(3);
    scorecard.enter_roll(5);
    expect(scorecard.two_frames_ago_was_strike).toBe(false);

  });
  it("is false if two frames ago was a spare", function () {
    scorecard.enter_roll(4);
    scorecard.enter_roll(6);
    scorecard.enter_roll(3);
    scorecard.enter_roll(5);
    expect(scorecard.two_frames_ago_was_strike).toBe(false);
  });
});

describe("#last_frame_was_spare", function () {
  it("is true if last frame was a spare", function () {
    scorecard.enter_roll(4);
    scorecard.enter_roll(6);
    expect(scorecard.last_frame_was_spare).toBe(true);
  });
  it("is false if last frame was not a spare", function () {
    scorecard.enter_roll(4);
    scorecard.enter_roll(5);
    expect(scorecard.last_frame_was_spare).toBe(false);
  });
  it("is false if last frame was a strike", function () {
    scorecard.enter_roll(10);
    expect(scorecard.last_frame_was_spare).toBe(false);
  });
});
