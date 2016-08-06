describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('A game starts in frame 1', function(){
    expect(game.getFrameNumber()).toEqual(1);
  });

  it('A game is initialized with currentPins empty', function(){
    expect(game.getCurrentPins()).toEqual([]);
  });

  it('A game is initialized with a multiplier of "none" (no spare of strike in previous frame)', function(){
    expect(game.getMultiplier()).toEqual("none");
  });

  it('A game is initialized with a total score of 0', function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  // Test using spies:
  // describe('#calculateMultiplier', function(){
  //   it('evaluates to "strike" if a strike has been bowled', function(){
  //   });
  //   it('evaluates to "spare" if a spare has been bowled', function(){
  //   });
  //   it('evaluates to "none" if neither a strike nor a spare has bowled', function(){
  //   });
  // });

  describe('#playGame', function(){
    it('', function(){

    });
  });

  describe('#addScore', function(){
    it('Adds frame score to the total score', function(){
      game.addScore(5);
      expect(game.getTotalScore()).toEqual(5);
    });
  });

});
