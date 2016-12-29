'user strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should start at 0", function() {
    expect(bowling.score).toEqual(0);
  });

  it("should start at 1", function() {
    expect(bowling.frame).toEqual(1);
  })

  it("should not increment until end of frame", function() {
    bowling.enter_score(1);
    expect(bowling.score).toEqual(0);
  })

  it("should show score at end of the frame", function() {
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(2);
  })

  it("should increase frame by 1 every second time score is entered", function() {
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.frame).toEqual(2);
  })

  it("seventh go frame should be 4", function() {
    bowling.enter_score(1);
    bowling.enter_score(1);
    bowling.enter_score(1);
    bowling.enter_score(1);
    bowling.enter_score(1);
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.frame).toEqual(4);
  })

  it("should start as an empty array", function() {
    expect(bowling.running_total).toEqual([]);
  })

  it("should store scores in an array", function() {
    bowling.enter_score(1);
    expect(bowling.running_total).toEqual([1]);
  })

  it("should store multiple scores in an array", function() {
    bowling.enter_score(1);
    bowling.enter_score(2);
    expect(bowling.running_total).toEqual([1,2]);
  })

  it("should skip to next frame if there is a strike", function() {
    bowling.enter_score(10);
    expect(bowling.frame).toEqual(2)
  });

  it("should change last_strike to true", function() {
    bowling.enter_score(10);
    expect(bowling.unscored_strikes).toEqual(1)
  });

  it("should double score of next frame after a strike", function() {
    bowling.enter_score(10);
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(14)
  });

  it("should return 1 after 1 strike", function() {
    bowling.enter_score(10);
    expect(bowling.unscored_strikes).toEqual(1)
  })

  it("strike counter should reset after player does not score a strike", function() {
    bowling.enter_score(10);
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.unscored_strikes).toEqual(0)
  });

  it("strike counter should increment when multiple strikes are scored in a row", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    expect(bowling.unscored_strikes).toEqual(2)
  });

  it("should correctly multiply scores if multiple strikes are scored", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(21)
  });

  it("should give the correct score after multiple strikes are scored", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(35)
  })

  it("score should be 30 when three strikes are scored in a row", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    expect(bowling.score).toEqual(30)
  })

  it("score should be 60 when four strikes are scored in a row", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    expect(bowling.score).toEqual(60)
  })

  it("score should be 180 when eight strikes are scored in a row", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    expect(bowling.score).toEqual(180)
  })

  it("score should be 300 when ten strikes are scored in a row", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    expect(bowling.score).toEqual(300)
  })
  it("score should be 225 when this is scored", function() {
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(10);
    bowling.enter_score(1);
    bowling.enter_score(2);
    bowling.enter_score(5);
    bowling.enter_score(3);
    expect(bowling.score).toEqual(225)
  })

  it("score should be equal to 43 when this is entered", function() {
    bowling.enter_score(7);
    bowling.enter_score(2);
    bowling.enter_score(10);
    bowling.enter_score(6);
    bowling.enter_score(3);
    bowling.enter_score(5);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(43)
  })

  it("should should equal to 22 after a 9,1,5,2 is scored", function() {
    bowling.enter_score(9);
    bowling.enter_score(1);
    bowling.enter_score(5);
    bowling.enter_score(2);
    expect(bowling.score).toEqual(22)
  })

  it("should should equal to 36 after a 10,5,5,2,2 is scored", function() {
    bowling.enter_score(10);
    bowling.enter_score(5);
    bowling.enter_score(5);
    bowling.enter_score(2);
    bowling.enter_score(2);
    expect(bowling.score).toEqual(36)
  })

  it("should correctly score when a strike follows a half strike", function() {
    bowling.enter_score(6);
    bowling.enter_score(4);
    console.log(bowling.unscored_half_strike)
    bowling.enter_score(10);
    expect(bowling.score).toEqual(20)
  })


});
