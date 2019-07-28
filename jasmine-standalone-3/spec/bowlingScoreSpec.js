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

  it("sums up the total score of the current frame", function() {
    scorer.insert(5);
    scorer.insert(4);
    expect(scorer.currentFrameScore()).toEqual(9);
  });

  describe("When spare", function() {
    it("accumulates score from next roll", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5);
      expect(scorer.currentFrameScore()).toEqual(15);
    });

    it("scores next frame including accumulated extra roll from previous", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5)
      expect(scorer.currentFrameScore()).toEqual(15);
      scorer.insert(5);
      expect(scorer.currentFrameScore()).toEqual(10);
    });
  });
});
