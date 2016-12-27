'user strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should start at 0", function() {
    // var bowling = new Bowling();
    expect(bowling.score).toEqual(0);
  });

  it("should start at 1", function() {
    expect(bowling.frame).toEqual(1);
  })

  it("should increment by the amount entered", function() {
    bowling.enter_score(1);
    expect(bowling.score).toEqual(1);
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
    expect(bowling.last_strike).toEqual(true)
  });

  it("should double score of next frame after a strike", function() {
    bowling.enter_score(10);
    console.log(bowling.first_go);
    bowling.enter_score(1);
    bowling.enter_score(1);
    expect(bowling.score).toEqual(14)
    console.log(bowling.running_total)
  });

  it("should return 1 after 1 strike", function() {
    bowling.enter_score(10);
    expect(bowling.strikes_in_a_row).toEqual(1)
  })

  it("strike counter should reset after player does not score a strike", function() {
    bowling.enter_score(10);
    bowling.enter_score(1);
    expect(bowling.strikes_in_a_row).toEqual(0)
  });
});
