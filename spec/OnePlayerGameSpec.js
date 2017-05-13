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

    describe('storeRoll', function() {
      it('results in call of updateBoxes on Game', function() {
	spyOn(onePlayerGame, 'updateBoxes');
	onePlayerGame.storeRoll(10);
	expect(onePlayerGame.updateBoxes).toHaveBeenCalled();
      });
    });
	
	
      
  });
}());
