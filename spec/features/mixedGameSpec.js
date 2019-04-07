describe('consistent 4 game', function() {
  it('should show score of 80 after 20 rolls of 4', function() {
    game = new Game
    for (i = 1; i <= 20; i++){
      game.roll(4);
    };
    expect(game.totalScore()).toEqual(80);
  })
  it('should show game is complete after these 20 rolls of 4', function() {
    game = new Game
    for (i = 1; i <= 20; i++){
      game.roll(4);
    };
    expect(game.isInPlay).toEqual(false);
  })
});

describe('varied game', function() {
  it('should show score of 148 after mixed rolls', function() {
    game = new Game
    game.roll(4);
    game.roll(5);
    game.roll(3);
    game.roll(7);
    game.roll(4);
    game.roll(5);
    game.roll(10);
    game.roll(8);
    game.roll(1);
    game.roll(9);
    game.roll(1);
    game.roll(7);
    game.roll(2);
    game.roll(10);
    game.roll(10);
    game.roll(8);
    game.roll(2);
    game.roll(4);
    expect(game.totalScore()).toEqual(148);
    expect(game.isInPlay).toEqual(false);
  })
  it('should show score of 166 after mixed rolls', function() {
    game = new Game
    game.roll(9);
    game.roll(0);
    game.roll(6);
    game.roll(4);
    game.roll(8);
    game.roll(2);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(6);
    game.roll(2);
    game.roll(5);
    game.roll(3);
    game.roll(0);
    game.roll(5);
    game.roll(10);
    game.roll(10);
    game.roll(4);
    expect(game.totalScore()).toEqual(166);
    expect(game.isInPlay).toEqual(false);
  })
  it('should show score of 110 after mixed rolls', function() {
    game = new Game
    game.roll(9);
    game.roll(1);
    game.roll(5);
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(4);
    game.roll(6);
    game.roll(3);
    game.roll(7);
    game.roll(2);
    game.roll(8);
    game.roll(4);
    game.roll(4);
    game.roll(6);
    game.roll(2);
    game.roll(1);
    game.roll(0);
    game.roll(10);
    game.roll(1);
    game.roll(9);
    expect(game.totalScore()).toEqual(110);
    expect(game.isInPlay).toEqual(false);
  })
});
