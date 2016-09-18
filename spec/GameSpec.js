describe('A game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

    it('the starting score is displayed', function(){
      expect(game.currScore).toEqual(0);

    });

    it('starts with 10 frames', function(){
      expect(game.remainingFrames).toEqual(10);
    });

    });
