describe('Game', function(){
  var game;

    beforeEach(function(){
      game = new Game();
    });

    describe('when a game starts', function(){
      it('should have 10 rounds', function(){
        expect(game.ROUNDS).toEqual(10);
      });

    });

});