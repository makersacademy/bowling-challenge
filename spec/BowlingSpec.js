describe('Game', function() {
  var game;
  
  beforeEach(function() {
    game = new Game();
  });
  
  describe('at start of a new game', function () {
    it('play begins at frame 1', function() {
      expect(game.frame).toEqual(1);   
    });  

    it('play begins at frame ball 1', function() {
      expect(game.frameBall).toEqual(1);   
    });  
    
    it('player has a frame score of 0', function() {
      expect(game.score).toEqual(0);   
    }); 
    
    it('player has a total score of 0', function() {
      expect(game.score).toEqual(0);   
    });  
    
    it('player has a maximum of 22 rolls available', function() {
      expect(game.rolls).toEqual(22);   
    });  
    
    it('all 10 pins are set up ready to play', function() {
      expect(game.pinsInPlay).toContain(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);   
    });     
  });  
  
  describe('when playing', function () {
    it('player can roll a ball', function() {
      game.rollBall();
      expect(game.rolls).toEqual(21);
      expect(game.frameBall).toEqual(2);
    });  
   
    it('knows how many pins have been knocked down', function() {
      game.hitPin(2);
      game.hitPin(4);
      game.hitPin(7);
      expect(game.pinsInPlay).toContain(1, 3, 5, 6, 8, 9, 10)
      expect(game.knockedDown).toContain(2, 4, 7)
    });
 
    it('can calculate a players score', function() {
      game.hitPin(2);
      game.hitPin(4);
      game.hitPin(7);
      expect(game.frameScore).toEqual(3)
    });
    
    it('knows if player has rolled a gutter ball', function() {
      game.hitPin(2);
      game.hitPin(4);
      game.hitPin(7);
      expect(game.frameScore).toEqual(3)
      game.hitPin(0);
      expect(game.frameScore).toEqual(3)
    }); 
    
    it('knows if player has rolled a spare', function() {
      game.rollBall();
      game.hitPin(1);
      game.hitPin(2);
      game.hitPin(3);
      expect(game.frameScore).toEqual(3)
      expect(game.frameBall).toEqual(2)      
      game.rollBall();
      game.hitPin(4);
      game.hitPin(5);
      game.hitPin(6);
      game.hitPin(7);
      game.hitPin(8);
      game.hitPin(9);
      game.hitPin(10);
      expect(game.frameScore).toEqual(10)
      expect(game.frameBall).toEqual(3)      
    }); 
    
    it('knows if player has rolled a strike', function() {
      game.hitPin(1);
      game.hitPin(2);
      game.hitPin(3);
      game.hitPin(4);
      game.hitPin(5);
      game.hitPin(6);
      game.hitPin(7);
      game.hitPin(8);
      game.hitPin(9);
      game.hitPin(10);
      expect(game.frameScore).toEqual(10)
    });     
  });   
});