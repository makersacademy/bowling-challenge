(function() {
  'use strict';
  describe('OnePlayerGame', function() {
    var OnePlayerGame = OnePlayerGameFile.OnePlayerGame;
    var onePlayerGame;

    beforeEach(function() {
      onePlayerGame = new OnePlayerGame();
    });

    it('has a method "storeRoll"', function() {
      expect(onePlayerGame.storeRoll()).toBe(1);
    });
  });
}());
