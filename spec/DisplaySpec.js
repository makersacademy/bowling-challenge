'use strict';

describe('Display:', function() {

  var game;

  beforeEach(function() {
    game = new Scorecard();
  });

  xdescribe('Display:', function() {

    it('_display holds correct symbols for 0, spare, and strike', function() {
      game.throw(10);
      game.throw(0);
      game.throw(10);
      game.throw(4);
      expect(game._display).toEqual(["", "X", "-", "/", 4])
    });
  });
});