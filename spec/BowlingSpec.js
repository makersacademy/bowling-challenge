'use strict'

describe('Bowling Scoreboard', function() {

  let game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('Returns 0 for a game of all zeros (gutter)', function() {
    rollMany(0, 20);
    // for (let i = 0; i < 20; i++) {
    //   game.roll(0);
    // }
    expect(game.score()).toEqual(0);
  });

  it('Returns 20 for a game of all ones', function() {
    rollMany(1, 20);
    // for (let i = 0; i < 20; i++) {
    //   game.roll(1);
    // }
    expect(game.score()).toEqual(20);
  });

  it('Returns the correct score when spare is rolled', function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);

    expect(game.score()).toEqual(16);
  });


  it('Returns the correct score for strike', function() {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(0, 17);

    expect(game.score()).toEqual(14);
  });

  it('Returns the correct score for a perfect game (300)', function() {
    rollMany(10, 12);

    expect(game.score()).toEqual(300);
  });

  it('Returns the correct score for a random game', function() {
    game.roll(3);
    game.roll(6);
    game.roll(10);
    game.roll(10)
    game.roll(4);
    game.roll(6);
    game.roll(2);
    rollMany(4, 13);
    expect(game.score()).toEqual(111);
  });

  function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

})
