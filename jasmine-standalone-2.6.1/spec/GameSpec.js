describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('start of game conditions', function(){
    it('starts on 0 points', function(){
      expect(game.viewScore()).toEqual(0);
    });
  });
  });
