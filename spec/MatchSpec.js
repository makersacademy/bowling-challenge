describe("Match", function() {

  beforeEach(function() {
    match = new Match(Frame);
  });

  it("should have the following:", function() {
    expect(match._framesComplete).toEqual(0);
    expect(match._NOOFFRAMES).toEqual(10);
    expect(match._matchComplete).toEqual(false);
  });

  it("should make first frame complete if a strike", function() {
    match.play("X");
    expect(match._frames[0].isComplete()).toEqual(true);
  });

  it("should add second frame and complete it after two strikes", function() {
    match.play("X");
    match.play("X");
    expect(match._frames[1].isComplete()).toBe(true);
  });

  it("shouldnt add another frame if the match is complete", function() {
    for (i = 1; i <= 12; i++) {
      match.play("X");
    }
    expect(match._matchComplete).toEqual(true);
    expect(function(){match.play("X");}).toThrow(new Error('Invalid play - this match is complete'));
  });
  it("should be able to get the score", function() {
    for (i = 1; i <= 12; i++) {
      match.play("X");
    }
    console.log(match);
    expect(match.score()).toEqual(120);
  });

});
