'use strict';

describe('Frame', function() {

  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame();
    game = jasmine.createSpyObj('game', ['takeTurn']);
  });

  it('knows that the maximum score is 10', function() {
    expect(frame.MAXIMUM_PINS).toEqual(10);
  });

  it('when player takes their turn the take turn method is called in game', function() {
    game.takeTurn(0, 0);
    expect(game.takeTurn).toHaveBeenCalledWith(0, 0);
  });

  // it('receives the number of pins knocked down in the second roll from game', function() {
  //   game.takeTurn(0, 0);
  //   expect(frame._secondRoll).toEqual(0);
  // });
});
