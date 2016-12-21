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
});
