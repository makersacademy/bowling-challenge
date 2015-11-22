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
});
