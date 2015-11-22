describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('when a new game starts', function(){
    it('should only have 10 rounds', function(){
      expect(game.NO_OF_ROUNDS).toEqual(10);
    });
  });

  describe('when the ball is rolled',function(){
    it('will move on to the next round after 2 rolls',function(){
      for(i=0;i<=2;i++){
        game.roll();
      }
      expect(game.round).toEqual(2);
    });

    it('the game should score on the amount of pins hit', function(){
      game.roll();
      expect(game.score).toEqual(10 - game._noOfPins());
    });

    it('resets the frame after each round', function(){
      for(i=0;i<=1;i++){
        game.roll();
      }
      expect(game._noOfPins()).toEqual(10);
    });
  });
});
