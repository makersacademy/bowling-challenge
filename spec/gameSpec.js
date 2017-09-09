"use strict";

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  describe('scoreCard', function(){

    it('holds scores for 10 frames and an extra ball', function(){
      expect(game.scoreCard[0]).toEqual([0, 0]);
      expect(game.scoreCard[9]).toEqual([0, 0]);
      expect(game.scoreCard[10]).toEqual([0]);
    });
  });

	// it("handles a gutter game", function() {
	// 	for (var i = 0; i < 20; i++) {
	// 		game.roll(0);
	// 	}
	// 	expect(game.score()).to.equal(0);
	// });

});
