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
    expect(game.getScore()).toEqual(0);
  });

  it('can score one pin per frame', function() {
    testRolls(1, 20);
    expect(game.getScore()).toEqual(20);
  })

  it('grants a bonus bowl in frame 10', function() {
    testRolls(0, 18);
    game.roll(5);
    game.roll(5);
    game.roll(10);
    expect(game.bonus_roll).toBe(true);
    expect(game.getScore()).toEqual(20);
  })

  it('denies the bonus round', function() {
    for(var i = 0; i < 10; i++) {
      game.roll(9);
      game.roll(0);
    };
    expect(game.getScore()).toEqual(90);
    expect(game.bonus_roll).toBe(false);
  })

  it('scores a spare', function() {
    game.roll(5)
    game.roll(5)
    game.roll(9)
    testRolls(0,17)
    expect(game.getScore()).toEqual(28);
  })

  it('scores a strike', function() {
    game.roll(10);
    game.roll(5);
    game.roll(4);
    testRolls(0, 16);

    expect(game.getScore()).toEqual(28);
   })

   it('scores a perfect game', function() {
     testRolls(10,12);
     expect(game.getScore()).toEqual(300);
   })

   it('scores a strikeless and spareless game', function() {
     testRolls(3, 2)
     testRolls(3, 2)
     testRolls(3, 2)
     testRolls(4, 2)
     testRolls(3, 2)
     testRolls(3, 2)
     testRolls(2, 1)
     testRolls(6, 1)
     testRolls(3, 2)
     testRolls(1, 2)
     testRolls(3, 2)
     expect(game.getScore()).toEqual(60);
   })

   it('scores a game which includes spares', function() {
     testRolls(5, 2)
     testRolls(5, 2)
     testRolls(5, 2)
     testRolls(4, 2)
     testRolls(5, 2)
     testRolls(5, 2)
     testRolls(3, 2)
     testRolls(3, 2)
     testRolls(5, 2)
     testRolls(3, 2)
     expect(game.getScore()).toEqual(111);
   })

   it('scores a game which inclues strikes and spares', function() {
     testRolls(10, 1)
     testRolls(4, 2)
     testRolls(3, 2)
     testRolls(2, 2)
     testRolls(10, 1)
     testRolls(2, 2)
     testRolls(3, 2)
     testRolls(5, 2)
     testRolls(2, 2)
     testRolls(3, 2)
     expect(game.getScore()).toEqual(82)
   })
   it('scores consecutive strikes', function() {
     testRolls(10, 3)
     testRolls(4, 2)
     testRolls(3, 2)
     testRolls(3, 2)
     testRolls(2, 1)
     testRolls(6, 1)
     testRolls(3, 2)
     testRolls(1, 2)
     testRolls(3, 2)
     expect(game.getScore()).toEqual(114)
   })
})
