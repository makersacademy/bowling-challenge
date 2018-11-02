'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpy('frame');
    game = new Game(frame);
  });

  it('creates a game', function() {
    expect(game).toBeDefined();
  });

  it('can record a roll', function() {
    expect(game.recordRoll(8)).toEqual(8);
  });

  it('consists of ten frames', function() {
    expect(game.frames.length).toEqual(10);
  });
});
