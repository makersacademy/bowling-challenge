describe('Game', function (){
  var game;
  var player;

  beforeEach(function(){
    game = new Game;
    player = new Player;
  });

  describe('Initializing', function(){
    it('initiated with a frames hash of length 10', function(){
      expect(Object.keys(game.frames).length).toBe(10)
    });

    it('initiated with a total score of 0', function(){
      expect(game.totalScore).toBe(0)
    });

    it('initiated on the first frame', function(){
      expect(game.frame).toBe(1)
    })
  });

  describe('#updateScore', function(){

    it('updates frame based on player\'s downed pins and turn', function(){
      player.bowl(8);
      game.update(player);
      player.bowl(9);
      game.update(player);
      expect(game.frames[1]).toEqual([8,9])
    });

    it('updates the correct frame', function(){
      player.bowl(9)
      game.update(player);
      player.bowl(8)
      game.update(player);
      player.bowl(7)
      game.update(player);
      expect(game.frames[1]).toEqual([9,8])
      expect(game.frames[2]).toEqual([7,0])
    });

    it('adds 2nd turn\'s score to next frame if 1st turn is a strike', function(){
      player.bowl(10);
      game.update(player);
      player.bowl(9);
      game.update(player);
      expect(game.frames[2]).toEqual([9,0])
    });

  });

  describe('#updateScoreOnTenthFrame', function(){

    it('adds score to frame ten', function(){
      game.frame = 10;
      player.bowl(8);
      game.update(player);
      player.bowl(1);
      game.update(player);
      expect(game.frames[10]).toEqual([8,1,0]);
    });

    it('adds score to total score', function(){
      game.frame = 10;
      player.bowl(10);
      game.update(player);
      expect(game.totalScore).toBe(10);
    });

  });

  describe('#tallyScore', function(){

    it('Tally\'s the total score', function(){
      player.bowl(9)
      game.update(player);
      expect(game.totalScore).toBe(9)
    });
  });

  describe('#nextFrame', function(){

    it('Moves the game to the next frame', function(){
      game.nextFrame();
      game.nextFrame();
      expect(game.frame).toBe(3)
    });
  });

  describe('#updateFrame', function(){

    it('goes to next frame after two bowls', function(){
      player.turn = 0;
      game.updateFrame(player);
      expect(game.frame).toBe(2);
    });
  });

  describe('#strikeCheck', function(){

    it('goes to next frame if strike is scored', function(){
      player.bowl(10);
      game.update(player);
      game.strikeCheck();
      expect(game.frame).toBe(2)
    });
  });

  describe('#addBonuses', function(){

    it('adds bonus scores to bonusPoints for strike', function(){
      player.bowl(10);
      game.update(player);
      player.bowl(6);
      game.update(player);
      player.bowl(2);
      game.update(player);
      expect(game.bonusPoints).toEqual(8)
    });

    it('adds bonus scores to bonusPoints for spare', function(){
      player.bowl(4);
      game.update(player);
      player.bowl(6);
      game.update(player);
      player.bowl(2);
      game.update(player);
      player.bowl(5);
      game.update(player);
      expect(game.bonusPoints).toEqual(2)
    });
  });

  describe('#isGameOver', function(){

    it('returns true if game is over', function(){
      game.frame = 10;
      player.bowl(8);
      game.update(player);
      player.bowl(1);
      game.update(player);
      expect(game.isGameOver(player)).toBe(true)
    });
  });
});
