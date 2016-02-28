describe('BowlingGame', function(){
  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  describe('#randomRoll', function(){
    it('returns a random number between 0 and 10', function(){
      var pins = game.randomRoll();
      expect(pins >= 0 && pins <= 10).toBeTruthy();
    });

    it('reduces the number of current pins', function(){
      var pins = game.randomRoll();
      expect(game.currentPins).toBe(10-pins);
    });
  });

  describe('#getFrame', function(){
    it('returns the frame number', function(){
      game.currentFrame = 5;
      expect(game.currenFrame()).toBe(5);
    });
  });

  describe('#isGameOver', function(){
    it('returns true when the game is over', function(){
      game.currentFrame = 11;
      expect(game.isGameOver()).toBe(true);
    });
  });

  describe('#roll', function(){
    it('sets a new frame if a strike is rolled', function(){
      var frame = game.currentFrame;
      game.roll(10);
      expect(game.currentFrame).toBe(frame + 1);
    });
    it('increases the roll number', function(){
      var rollNum = game.rollNumber;
      game.roll(5);
      expect(game.rollNumber).toBe(rollNum + 1);
    });
    it('sets a new frame if 2 rolls are played', function(){
      var frame = game.currentFrame;
      game.roll(5);
      game.roll(3);
      expect(game.currentFrame).toBe(frame + 1);
    });
    it('calls final frame method for 10th frame', function(){
      spyOn(game, "_finalFrame")
        game.currentFrame = 10;
      game.roll(3);
      expect(game._finalFrame()).toBeCalled();
    });
  });
});
