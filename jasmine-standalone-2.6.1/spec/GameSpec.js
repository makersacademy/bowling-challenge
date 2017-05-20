describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('start of game conditions', function(){
    it('starts on 0 points', function(){
      expect(game.viewScore()).toEqual(0);
    });
    it('starts on roll 0', function(){
      expect(game.viewRoll()).toEqual(0);
    });
    it('starts on frame 1', function(){
      expect(game.viewFrame()).toEqual(1);
    });
  });

  describe('moving to frame 2', function(){
    it('moves the frame 2 after roll 2', function(){
      for(var i=0; i<3; i++){
        game.rollBall();
      }
      expect(game.viewFrame()).toEqual(2);
    });
  });
  });
