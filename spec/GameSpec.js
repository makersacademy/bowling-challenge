describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it ('starts with 0 scores', function() {
    expect(game.total).toBe(0);
  });

  it ('sums the scores', function() {
    game.countFallenPins(8);
    expect(game.total).toBe(8);
  });

  it('has 10 frames', function() {
    expect(game.frames.length).toBe(10);
  });

  it ('has 2 rolls in each frame', function() {
    expect(game.frames[0].length).toBe(2);
  });

  // it ('counts scores in each frame', function() {
  //   game.frames[4][0] = 7;
  //   game.frames[4][1] = 2;
  //   expect(game.countFrameScores(5)).toBe(9);
  // })
  // it('has bonus when you spare', function() {
  //   game.frames[4][0] = 7;
  //   game.frames[4][1] = 3;
  //   game.frames[5][0] = 4;
  //   expect(game.countFrameScores(5)).toBe(14);
  // });

  it('has more bonus when you strike', function() {
    game.frames[4][0] = 10;
    game.frames[4][1] = 0;
    game.frames[5][0] = 4;
    game.frames[5][1] = 4;
    expect(game.countFrameScores(5)).toBe(18);
  });

});
