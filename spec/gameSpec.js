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
      game.updateScore(player);
      player.bowl(9);
      game.updateScore(player);
      expect(game.frames[1]).toEqual([8,9])
    });

    it('updates the correct frame', function(){
      player.bowl(9)
      game.updateScore(player);
      player.bowl(8)
      game.updateScore(player);
      player.bowl(7)
      game.updateScore(player);
      expect(game.frames[1]).toEqual([9,8])
      expect(game.frames[2]).toEqual([7,0])
    });

  });

  describe('#totalScore', function(){

    it('Tally\'s the total score', function(){
      player.bowl(9)
      game.updateScore(player);
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
});
