describe("Game", function() {

  it("if a player scores all strikes, they get a perfect game", function() {
    perfectGame = new Game([[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10, 10]]);
    expect(perfectGame.isPerfectGame()).toEqual(true);
  });

  it("if a player gets a perfect game, the score is 300", function() {
    perfectGame = new Game([[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10],[10, 10, 10]]);
    expect(perfectGame.calculateScore()).toEqual(300);
  })

  it("if a player hits no pins, they get a gutter game", function() {
    gutterGame = new Game([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(gutterGame.isGutterGame()).toEqual(true);
  });

  it("if a player has a gutter game, the score is 0", function() {
    gutterGame = new Game([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
    expect(gutterGame.calculateScore()).toEqual(0);
  });

});
