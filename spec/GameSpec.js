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

  describe('when a strike is rolled', function(){
    beforeEach(function(){
      spyOn(game,"getRandomInt").and.returnValue(10);
    });
    it("should reset the frame", function(){
      game.roll();
      expect(game._noOfPins()).toEqual(10);
    });
    it('should give bonus points on the next frame', function(){
      game.roll;
      game.getRandomInt.isSpy = false;
      spyOn(game,"getRandomInt").and.returnValue(4);
      for(i=0;i<=1;i++){ game.roll; }
      expect(game.score).toEqual(28);
    });
  });


  describe('when a game is finished', function(){
    beforeEach(function(){
      spyOn(game,"getRandomInt").and.returnValue(5);
    });

    it('prints a message and reports your final score', function(){
      for(i=1; i<=19; i++){
        game.roll();
      }
      expect(game.roll()).toEqual("Your final score is " +game.score+ ".");
    });
  });
});
