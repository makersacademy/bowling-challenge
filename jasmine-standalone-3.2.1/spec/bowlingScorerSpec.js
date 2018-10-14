describe("BowlingScorer", function() {

  beforeEach(function() {
    newGame = new BowlingScorer();
  });

  it("should return a score of 0 for all gutter balls", function() {
    for(var n = 0; n < 20; n++) {
      newGame.roll(0);
    }
    expect(newGame.score()).toEqual(0);
  });


  it("should return a score of 20 for all 1s", function() {
    for(var n = 0; n < 20; n++) {
      newGame.roll(1);
    }
    expect(newGame.score()).toEqual(20);
  });

  it("should be able to handle one spare", function() {
    newGame.roll(9);
    newGame.roll(1);
    for(var n = 0; n < 18; n++) {
      newGame.roll(1);
    }
    expect(newGame.score()).toEqual(29);
  });

  it("should be able to handle one strike", function() {
    newGame.roll(10);
    for(var n = 0; n < 18; n++) {
      newGame.roll(1);
    }
    expect(newGame.score()).toEqual(30);
  })

  it("can handle extra frame logic for perfect game", function() {
    for(var n = 0; n < 22; n++) {
    newGame.roll(10);
    }
    expect(newGame.score()).toEqual(300);
  })

  it("can handle extra frame logic for spare on 10th frame", function() {
    for(var n = 0; n < 19; n++) {
      newGame.roll(1);
    }
    newGame.roll(9);
    newGame.roll(1);
    expect(newGame.score()).toEqual(29);

  })
});
