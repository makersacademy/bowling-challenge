describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.frame).toEqual(1);
     expect(game.currentFrame).toEqual(1);
  });
     it('starts a game at bowl 1', function() {
      expect(game.currentBowl).toEqual(1);
    });
     it('has 10 pins for each frame', function() {
      expect(game.bowlingPins).toEqual(10);
    });
     describe('Bowl', function() {
      it('decrese the bowlingPins by number of pins', function() {
        game.bowl(3);
        expect(game.bowlingPins).toEqual(7);
      });
       it('currentBowl increases by 1', function() {
        game.bowl(3);
        expect(game.currentBowl).toEqual(2);
      });
       it('increases currentFrame by 1 after second bowl', function() {
        game.bowl(3);
        game.bowl(4);
        expect(game.currentFrame).toEqual(2);
      });
    });

    describe('calculate the bowling score', function() {
    it('adds the bowl score to the score total', function() {
      game.bowl(3);
      game.bowl(4);
      expect(game.bowlingScore).toEqual(7);
    });
  });
});
