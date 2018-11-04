'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can score an entire game as 0', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    };
    expect(game.score()).toEqual(0);
  });

  it('can score one pin per frame', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(1);
    };
    expect(game.score()).toEqual(20);
  })

  it('grants a bonus bowl in frame 10', function() {
    for(var i = 0; i < 18; i++) {
      game.roll(0);
    };
    game.roll(5);
    game.roll(5);
    console.log(game.score());
    game.roll(10);
    expect(game.score()).toEqual(20);
    expect(game.bonus_frame).toBe(true);
  })

  it('denies the bonus round', function() {
    for(var i = 0; i < 10; i++) {
      game.roll(9);
      game.roll(0);
    };
    expect(game.score()).toEqual(90);
    expect(game.bonus_frame).toBe(false);
  })
});
