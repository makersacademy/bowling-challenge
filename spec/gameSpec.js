'use strict';

describe('Game', function() {

  var game;

  function testRolls(pins,turns) {
    for (var p = 0; p < turns; p++)
    game.roll(pins)
  };

  beforeEach(function() {
    game = new Game();
  });

  it('can score an entire game as 0', function() {
    testRolls(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can score one pin per frame', function() {
    testRolls(1, 20);
    expect(game.score()).toEqual(20);
  })

  it('grants a bonus bowl in frame 10', function() {
    testRolls(0, 18);
    game.roll(5);
    game.roll(5);
    game.roll(10);
    expect(game.bonus_roll).toBe(true);
    expect(game.score()).toEqual(20);
  })

  it('denies the bonus round', function() {
    for(var i = 0; i < 10; i++) {
      game.roll(9);
      game.roll(0);
    };
    expect(game.score()).toEqual(90);
    expect(game.bonus_roll).toBe(false);
  })

  it('scores a spare', function() {
    game.roll(5)
    game.roll(5)
    game.roll(9)
    testRolls(0,17)
    expect(game.score()).toEqual(28);
  })

  it('scores a strike', function() {
    game.roll(10);
    game.roll(5);
    game.roll(4);
    testRolls(0, 16);

    expect(game.score()).toEqual(28);
   })

   it('scores a perfect game', function() {
     testRolls(10,12);
     console.log(game.rolls)
     expect(game.score()).toEqual(300);
   })

});
