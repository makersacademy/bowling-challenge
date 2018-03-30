'use strict'

describe('Game', function() {
  var game;


  describe('When a game starts:', function() {
    beforeEach(function() {
      game = new Game();
    });

    it('Contains an empty scorecard.', function(){
     expect(game._scorecard).toEqual([]);
     });

  });

});
