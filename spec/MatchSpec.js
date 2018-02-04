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
    expect(match.score()).toEqual(300);
  });

  it("should add bonus to previous game", function() {
    match.play("X");
    match.play("X");
    expect(match.score()).toEqual(30);
  });
  it("should score a typical match properly", function() {
    match.play("X"); // 1  10  9 19
    match.play("3"); // 2
    match.play("6"); // 2   9  0 28
    match.play("4"); // 3
    match.play("4"); // 3   8  0 36
    match.play("X"); // 4  10 10 56
    match.play("3"); // 5
    match.play("/"); // 5  10  3 69
    match.play("3"); // 6
    match.play("2"); // 6   5  0 74
    match.play("-"); // 7
    match.play("X"); // 7  10  4 88
    match.play("4"); // 8
    match.play("4"); // 8   8  0 96
    match.play("X"); // 9  10 15 121
    match.play("X"); // 10 10  0 131
    match.play("5"); // 10  5  0 136
    match.play("4"); // 10  4  0 140
    expect(match.score()).toEqual(140);
  });
  it("should score a gutter game properly", function() {
    for (i = 1; i <= 20; i++) {
      match.play("-");
    }
    expect(match.score()).toEqual(0);
  });
});
