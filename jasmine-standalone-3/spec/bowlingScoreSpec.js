'use strict';

describe('Bowling Score', function(){

  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
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
    expect(scorer.totalScore()).toEqual(14)
  });

  it("shows score of current frame", function() {
    for (var i = 0; i < 4; i++) {
      scorer.insert(2);
    }
    expect(scorer.scoreOfCurrentFrame()).toEqual(4)
  });

  it("accumulates score of spare after strike", function() {
    scorer.insert(10);
    scorer.insert(5);
    scorer.insert(5);
    scorer.insert(4);
    scorer.insert(3);
    expect(scorer.totalScore()).toEqual(41);
  })

  describe("When spare", function() {
    it("accumulates score from next roll", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5);
      expect(scorer.totalScore()).toEqual(20);
    });

    it("scores next frame including accumulated extra roll from previous", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5)
      scorer.insert(4);
      expect(scorer.totalScore()).toEqual(24);
    });

    it("accumulates scores of 2 consecutive spares", function() {
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(5);
      scorer.insert(4);
      scorer.insert(3);
      expect(scorer.totalScore()).toEqual(36);
    });
  });

  describe("When strike", function() {
    it("marks current frame as complete", function() {
      scorer.insert(10);
      scorer.insert(5);
      scorer.insert(4);
      expect(scorer.pins).toEqual([[10],[5,4]]);
    });

    it("accumulates scores of 2 rolls after", function() {
      scorer.insert(10);
      scorer.insert(4);
      scorer.insert(3);
      expect(scorer.totalScore()).toEqual(24);
    });

    it("accumulates scores of 2 consecutive strikes", function() {
      scorer.insert(10);
      scorer.insert(10);
      scorer.insert(3);
      scorer.insert(4);
      expect(scorer.totalScore()).toEqual(47);
    })

    it("accumulates scores of 4 consecutive srikes", function() {
      scorer.insert(10);
      scorer.insert(10);
      scorer.insert(10);
      scorer.insert(10);
      scorer.insert(5);
      scorer.insert(4);
      expect(scorer.totalScore()).toEqual(113);
    })
  });
});
