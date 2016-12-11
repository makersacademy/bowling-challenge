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

  // it('receives the number of pins knocked down in the first and second roll from game', function() {
  //
  // });

});
