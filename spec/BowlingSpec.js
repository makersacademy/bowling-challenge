'use strict';

describe('Bowling app does the following', function() {
  var game;

  beforeEach(function() {
    game =  new Game();
  })

  it('starts with a score of zero', function() {
    expect(game.score).toEqual(0);
  });

  it('starts with an empty holder for frames', function(){
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

})
