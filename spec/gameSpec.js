describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#game rounds and scores', function(){

      it('adds bowls scores to current round score',function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.roundScore).toEqual([5,2]);
      });

      it('calculate current round score',function(){
        game.updateScore(5)
        game.updateScore(2)
        game.calculateTotalScore();
        expect(game.totalScore).toEqual(7);
      });

      it('current round updates once a round is complete',function(){
        game.updateScore(5)
        game.updateScore(2)
        game.roundComplete();
        expect(game.currentRound).toEqual(2);
      })
  });
})