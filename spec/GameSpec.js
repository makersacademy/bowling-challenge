describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it ('starts with 0 scores', function() {
    expect(game.total).toBe(0);
  });

  // it ('sums the scores', function() {
  //   game.countFallenPins(8);
  //   expect(game.total).toBe(8);
  // });

  it ('has 11 frames', function() {
    expect(game.frames.length).toBe(11);
  });

  it ('has 2 rolls in each frame', function() {
    expect(game.frames[0].length).toBe(2);
  });

  // it ('counts scores in each frame', function() {
  //   game.frames[4][0] = 7;
  //   game.frames[4][1] = 2;
  //   expect(game.countFrameScores(5)).toBe(9);
  // })
  it ('has bonus when you spare', function() {
    game.frames[4][0] = 7;
    game.frames[4][1] = 3;
    game.frames[5][0] = 4;
    game.frames[5][1] = 5;
    expect(game.countFrameScores(5)).toBe(14);
  });

  it ('has more bonus when you strike', function() {
    game.frames[4][0] = 10;
    game.frames[4][1] = 0;
    game.frames[5][0] = 4;
    game.frames[5][1] = 4;
    expect(game.countFrameScores(5)).toBe(18);
  });

  it ('has more bonus when you strik consecutively', function() {
    game.frames[4][0] = 10;
    game.frames[4][1] = 0;
    game.frames[5][0] = 10;
    game.frames[5][1] = 0;
    game.frames[6][0] = 10;
    game.frames[6][1] = 0;
    expect(game.countFrameScores(5)).toBe(30);
  });

  it ('has no bonus when the frame score is less than 10', function() {
    game.frames[4][0] = 7;
    game.frames[4][1] = 2;
    game.frames[5][0] = 4;
    expect(game.countFrameScores(5)).toBe(9);
  })

  it ('can have a bonus roll in 10th frame when you spare', function() {
    game.frames[9][0] = 9;
    game.frames[9][1] = 1;
    game.frames[10][0] = 8;
    game.frames[10][1] = 0;
    expect(game.countFrameScores(10)).toBe(18);
  })

  it ('can have a bonus roll in 10th frame when you strike', function() {
    game.frames[9][0] = 9;
    game.frames[9][1] = 1;
    game.frames[10][0] = 7;
    // set frames[10][1] to 0!!!
    game.frames[10][1] = 0;
    expect(game.countFrameScores(10)).toBe(17);
  })

  it ('sums the scores', function() {
    game.frames[0][0] = 10;
    game.frames[0][1] = 0;
    game.frames[1][0] = 3;
    game.frames[1][1] = 4;
    game.frames[2][0] = 8;
    game.frames[2][1] = 2;
    game.frames[3][0] = 7;
    game.frames[3][1] = 2;
    expect(game.addScores(3)).toBe(41);
  });

  it ('sums the scores correctly when there are consecutive strikes', function() {
    game.frames[0][0] = 10;
    game.frames[0][1] = 0;
    game.frames[1][0] = 10;
    game.frames[1][1] = 0;
    game.frames[2][0] = 10;
    game.frames[2][1] = 0;
    game.frames[3][0] = 9;
    game.frames[3][1] = 1;
    expect(game.addScores(3)).toBe(79);
  })


});
