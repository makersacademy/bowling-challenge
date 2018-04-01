'use strict'

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when a game starts:', function() {
    it('contains an empty scorecard', function(){
     expect(game._scorecard).toEqual([]);
     });
  });

});
