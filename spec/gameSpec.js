describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#game frames and scores', function(){

      it('adds bowls scores to current round score',function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.currentFrame).toEqual([5,2]);
      });

      it('detects completed frame when 2 bowls are played', function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.frameComplete()).toEqual(true);
      });

      it('submit completed frame score to scoreboard',function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.scoreBoard).toEqual([[5,2]]);
      });
  });

  describe('strike and spare',function(){

      it('is strike when score is 10 on first bowl',function(){
        game.updateScore(10)
        console.log(game.currentFrame)
        expect(game.isAStrike()).toEqual(true);
      });

      it('is spare when sum of both scores is 10 and strike is not bowled',function(){
        game.updateScore(5)
        game.updateScore(5)
        expect(game.isASpare()).toEqual(true);
      })
  });


});