'use strict';


describe('Game', function() {
  var game;
  var frames = [];

  beforeEach(function() {
    game = new Game();
  });


  it('can roll', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(game._roll()).toEqual(5)
  });


  it('has a standard frame with two rolls', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(game._oneFrame()).toEqual([5,5])
  });
});
