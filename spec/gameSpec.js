describe ('Game', function() {
  var game;

  beforeEach(function(){

    game = new Game
    game.nextFrame(Frame);
    game.nextFrame(Frame);

  })

  describe('#name', function() {

    it ('should know about the players name', function() {
      game.name('Factory')
      expect(game.currentPlayer).toEqual('Factory')
    })
  })
  
  describe('#newFrame', function(){
    
    it('should initialize a new frame', function(){
      expect(game.currentGame.length).toEqual(2)
    })

    it('should have an array containing multiple frames', function() {
      expect(game.currentGame[1]).toEqual(new Frame)
    })

    it('should know the current frame', function(){
      expect(game.currentFrame()).toEqual(game.currentGame[1])
    })
  })

  describe('#score', function() {
    it('should save the score of bowl 1', function(){
      game.firstBowlPins(5)
      expect(game.frameScores()).toContain(5);
    })

    it('should save the score of bowl 2', function(){
      game.secondBowlPins(2)
      expect(game.frameScores()).toContain(7)
    })
  })

})