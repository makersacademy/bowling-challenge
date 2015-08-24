describe('Game', function() {
  var game;
  
  beforeEach(function() {
    game = new Game();
  });
  
  describe('at start of a new game', function () {
    it('play begins at frame 1', function() {
      expect(game.frame).toEqual(1);   
    });  

    it('play begins at ball 1', function() {
      expect(game.ball).toEqual(1);   
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
  
  describe('play', function () {
    it('lets player roll a ball', function() {
 
    });  
   
  }); 
  
});