'use strict;'

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('user can roll a gutter game', function(){
    rollTracker(0, 20);
    expect(game.score()).toBe(0);
  });

  it('user can roll single hits', function(){
    rollTracker(1, 20);
    expect(game.score()).toBe(20);
  });

  it('user can roll a spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollTracker(0, 17);
    expect(game.score()).toBe(16);
  });

  it('user can roll a strike', function(){
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollTracker(0, 16);
    expect(game.score()).toBe(24);
  });

  it('user can roll a perfect game', function() {
    rollTracker(10, 12); // 10 pins, 12 times.
    expect(game.score()).toBe(300);
  });

  var rollTracker = function(pins, rolls){
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };
});
