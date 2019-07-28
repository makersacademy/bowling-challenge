'use strict';

describe('Bowling Score', function(){

  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it('shows pins', function() {
    expect(scorer.showPins(7)).toEqual(7);
  });

  it('stores pins in an array', function() {
    scorer.insert(7);
    expect(scorer.pins).toContain([7]);
  });

  it("stores each frame in it's own subarray", function() {
    for (var i = 0; i < 4; i++) {
      scorer.insert(2);
    }
    expect(scorer.pins).toEqual([[2,2],[2,2]]);
  });

  it("sums up the total score", function() {
    scorer.insert(5);
    scorer.insert(4);
    scorer.insert(3);
    scorer.insert(2);
    expect(scorer.currentScore()).toEqual(14)
  });

  it("shows score of current frame", function() {
    for (var i = 0; i < 4; i++) {
      scorer.insert(2);
    }
    expect(scorer.currentFrameScore()).toEqual(4)
  });

  describe("When spare", function() {
    it("accumulates score from next roll", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5);
      expect(scorer.currentScore()).toEqual(20);
    });

    it("scores next frame including accumulated extra roll from previous", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5)
      expect(scorer.currentScore()).toEqual(20);
      scorer.insert(4);
      expect(scorer.currentFrameScore()).toEqual(9);
    });
  });

  describe("When strike", function() {
    it("marks current frame as complete", function() {
      scorer.insert(10);
      scorer.insert(5);
      scorer.insert(4);
      expect(scorer.pins).toEqual([[10],[5,4]]);
    });
  });
});
