'use strict';

describe('Bowling app does the following', function() {
  var game;

  beforeEach(function() {
    game =  new Game();
  })

  it('starts with a score of zero', function() {
    expect(game.score).toEqual(0);
  });

  it('starts with a selection of empty frames', function(){
    expect(game.frames).toEqual({});
  });

  it('adds a score to an array for each frame', function() {
    game.bowl(8)
    expect(game.bowlCount).toEqual([8]);
    });

  it('can push multiple scores to an array', function() {
    game.bowl(4)
    game.bowl(6)
    expect(game.bowlCount).toEqual([4, 6])
  })

  it('throws an error if you try to enter a score greater than 10',
function() {
  expect(function() { game.bowl(11) } ).toThrow("You can't enter a score greater than 10.")
})

  it('throws an error if you try to enter more than 21 scores',
function() {
game.bowlCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6,
7, 8, 9, 10, 1]
expect(function() { game.bowl(6); } ).toThrow("The game is complete.");
})

it('Each bowl increase the roll count by one', function() {
  game.bowl(1)
  expect(game.rollCount).toEqual(1)
})

it('sets isStrike to true if you roll a 10', function(){
  game.bowl(10);
  expect(game.isStrike).toEqual(true);
})

it('set isSpare to true if combined score of two rolls is 10', function() {
  game.bowl(6);
  game.bowl(4);
  expect(game.isSpare).toEqual(true);
})

})
