describe ('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it ('starts with 0 scores', function() {
    expect(game.total).toBe(0);
  });

  it ('has internally 12 frames', function() {
    expect(game.frames.length).toBe(12);
  });

  it ('has 2 rolls in each frame', function() {
    expect(game.frames[0].length).toBe(2);
  });

  it ('stores the number of fallen pins in each roll', function() {
    game.setScores(1, 1, 7);
    expect(game.frames[0][0]).toBe(7);
  })

  it ('can check if you spare', function() {
    game.setScores(1, 1, 8);
    game.setScores(1, 2, 2);
    expect(game.isSpare(1)).toBe(true);
  })

  it ('can check if you spare', function() {
    game.setScores(1, 1, 8);
    game.setScores(1, 2, 1);
    expect(game.isSpare(1)).toBe(false);
  })

  it ('can check if you strike', function() {
    game.setScores(1, 1, 10);
    expect(game.isStrike(1)).toBe(true);
  })

  it ('counts scores in each frame', function() {
    game.setScores(1, 1, 7);
    game.setScores(1, 2, 2);
    expect(game.countFrameScores(1)).toBe(9);
  })

  it ('has bonus when you spare', function() {
    game.setScores(1, 1, 7);
    game.setScores(1, 2, 3);
    game.setScores(2, 1, 4);
    expect(game.countFrameScores(1)).toBe(14);
  });

  it ('has more bonus when you strike', function() {
    game.setScores(1, 1, 10);
    game.setScores(2, 1, 4);
    game.setScores(2, 2, 4);
    expect(game.countFrameScores(1)).toBe(18);
  });

  it ('has more bonus when you strik consecutively', function() {
    game.setScores(1, 1, 10);
    game.setScores(2, 1, 10);
    game.setScores(3, 1, 10);
    expect(game.countFrameScores(1)).toBe(30);
  });

  it ('can have a bonus roll in 10th frame when you spare', function() {
    game.setScores(10, 1, 9);
    game.setScores(10, 2, 1);
    game.setScores(11, 1, 8);
    expect(game.countFrameScores(10)).toBe(18);
  })

  it ('can have a bonus roll in 10th frame when you strike', function() {
    game.setScores(10, 1, 10);
    game.setScores(10, 2, 10);
    game.setScores(11, 1, 3);
    expect(game.countFrameScores(10)).toBe(23);
  })

  it ('can have a bonus roll in 10th frame when you strike', function() {
    game.setScores(10, 1, 10);
    game.setScores(10, 2, 10);
    game.setScores(11, 1, 10);
    expect(game.countFrameScores(10)).toBe(30);
  })

  it ('sums the scores', function() {
    game.setScores(1, 1, 10);
    game.setScores(2, 1, 3);
    game.setScores(2, 2, 4);
    game.setScores(3, 1, 8);
    game.setScores(3, 2, 2);
    game.setScores(4, 1, 7);
    expect(game.addScores(3)).toBe(41);
  });

  it ('sums the scores correctly when there are consecutive strikes', function() {
    game.setScores(1, 1, 10);
    game.setScores(2, 1, 10);
    game.setScores(3, 1, 10);
    game.setScores(4, 1, 9);
    game.setScores(4, 2, 1);
    expect(game.addScores(3)).toBe(79);
  })

  it ('sums the scores of 10 frames', function() {
    game.setScores(1, 1, 1);
    game.setScores(1, 2, 4);
    game.setScores(2, 1, 4);
    game.setScores(2, 2, 5);
    game.setScores(3, 1, 6);
    game.setScores(3, 2, 4);
    game.setScores(4, 1, 5);
    game.setScores(4, 2, 5);
    game.setScores(5, 1, 10);
    game.setScores(6, 1, 0);
    game.setScores(6, 2, 1);
    game.setScores(7, 1, 7);
    game.setScores(7, 2, 3);
    game.setScores(8, 1, 6);
    game.setScores(8, 2, 4);
    game.setScores(9, 1, 10);
    game.setScores(10, 1, 2);
    game.setScores(10, 2, 8);
    game.setScores(11, 1, 6);
    expect(game.addScores(10)).toBe(133);
  })

  it ('sums the scores of 10 frames with 1 strike in the 10th frame', function() {
    game.setScores(1, 1, 1);
    game.setScores(1, 2, 4);
    game.setScores(2, 1, 4);
    game.setScores(2, 2, 5);
    game.setScores(3, 1, 6);
    game.setScores(3, 2, 4);
    game.setScores(4, 1, 5);
    game.setScores(4, 2, 5);
    game.setScores(5, 1, 10);
    game.setScores(6, 1, 0);
    game.setScores(6, 2, 1);
    game.setScores(7, 1, 7);
    game.setScores(7, 2, 3);
    game.setScores(8, 1, 6);
    game.setScores(8, 2, 4);
    game.setScores(9, 1, 10);
    game.setScores(10, 1, 10);
    game.setScores(11, 1, 8);
    game.setScores(11, 2, 1);
    expect(game.addScores(10)).toBe(144);
  })

  it ('sums the scores of 10 frames with 2 strikes in the 10th frame', function() {
    game.setScores(1, 1, 1);
    game.setScores(1, 2, 4);
    game.setScores(2, 1, 4);
    game.setScores(2, 2, 5);
    game.setScores(3, 1, 6);
    game.setScores(3, 2, 4);
    game.setScores(4, 1, 5);
    game.setScores(4, 2, 5);
    game.setScores(5, 1, 10);
    game.setScores(6, 1, 0);
    game.setScores(6, 2, 1);
    game.setScores(7, 1, 7);
    game.setScores(7, 2, 3);
    game.setScores(8, 1, 6);
    game.setScores(8, 2, 4);
    game.setScores(9, 1, 10);
    game.setScores(10, 1, 10);
    game.setScores(11, 1, 10);
    game.setScores(12, 1, 1);
    expect(game.addScores(10)).toBe(148);
  })

  it ('sums the scores of 10 frames with 3 strikes in the 10th frame', function() {
    game.setScores(1, 1, 1);
    game.setScores(1, 2, 4);
    game.setScores(2, 1, 4);
    game.setScores(2, 2, 5);
    game.setScores(3, 1, 6);
    game.setScores(3, 2, 4);
    game.setScores(4, 1, 5);
    game.setScores(4, 2, 5);
    game.setScores(5, 1, 10);
    game.setScores(6, 1, 0);
    game.setScores(6, 2, 1);
    game.setScores(7, 1, 7);
    game.setScores(7, 2, 3);
    game.setScores(8, 1, 6);
    game.setScores(8, 2, 4);
    game.setScores(9, 1, 10);
    game.setScores(10, 1, 10);
    game.setScores(11, 1, 10);
    game.setScores(12, 1, 10);
    expect(game.addScores(10)).toBe(157);
  })

  it ('has max scores of 300', function() {
    game.setScores(1, 1, 10);
    game.setScores(2, 1, 10);
    game.setScores(3, 1, 10);
    game.setScores(4, 1, 10);
    game.setScores(5, 1, 10);
    game.setScores(6, 1, 10);
    game.setScores(7, 1, 10);
    game.setScores(8, 1, 10);
    game.setScores(9, 1, 10);
    game.setScores(10, 1, 10);
    game.setScores(11, 1, 10);
    game.setScores(12, 1, 10);
    expect(game.addScores(10)).toBe(300);
  })

});
