describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#game frames and scores', function(){

      it('adds updateScores scores to current frame score',function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.currentFrame).toEqual([5,2]);
      });

      it('detects completed frame when 2 updateScores are played', function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.frameComplete()).toEqual(true);
      });

      it('submit completed frame score to scoreboard',function(){
        game.updateScore(5)
        game.updateScore(2)
        expect(game.scoreBoard).toEqual([[5,2]]);
      });

      it('detects final frame',function(){
        game.frameIndex = 9;
        expect(game.isFinalFrame()).toEqual(true);
      })

  });

  describe('strike and spare',function(){

      it('is strike when score is 10 on first updateScore',function(){
        game.updateScore(10)
        expect(game.isAStrike()).toEqual(true);
      });

      it('is spare when sum of both scores is 10 and strike is not updateScoreed',function(){
        game.updateScore(5)
        game.updateScore(5)
        expect(game.isASpare()).toEqual(true);
      })
  });

  describe('gutter game', function(){

    it('scoreboard has ten 0 scores',function(){
      for(i=1; i<=20;i++){game.updateScore(0)};
        expect(game.totalScore).toEqual(0);
    })
  })


});