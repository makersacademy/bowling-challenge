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

  describe('#calculateMultiplier', function(){
    it('evaluates to "strike" if a strike has been bowled', function(){
      expect(game.calculateMultiplier([10,0])).toEqual("strike");
    });
    it('evaluates to "spare" if a spare has been bowled', function(){
      expect(game.calculateMultiplier([3,7])).toEqual("spare");
    });
    it('evaluates to "none" if neither a strike nor a spare has bowled', function(){
      expect(game.calculateMultiplier([1,1])).toEqual("none");
    });
  });

  describe('#bowlFrame', function(){
    it('Updates the total score', function(){
      spyOn(Math, "random").and.returnValue(0.99);
      game.bowlFrame();
      expect(game.getTotalScore()).toEqual(10);
    });
    it('Updates the frameNumber after each bowl', function(){
      game.bowlFrame();
      expect(game.getFrameNumber()).toEqual(2);
    });
  });

  describe('#addScore', function(){
    it('Adds frame score to the total score', function(){
      game.addScore(5);
      expect(game.getTotalScore()).toEqual(5);
    });
  });

});
