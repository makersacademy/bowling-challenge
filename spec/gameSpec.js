describe ('Game', function() {
  var game;

  beforeEach(function(){

    game = new Game(Frame)
    game.nextFrame();
    game.nextFrame();

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
      expect(game.frameScore()).toContain(5);
    })

    it('should save the score of bowl 2 and return total', function(){
      game.firstBowlPins(5)
      game.secondBowlPins(2)
      expect(game.frameScore()).toContain(7)
    })
    
    describe('strike', function (){

      it('should know how to calculate a single strike', function () {
        spyOn(game, 'frameScore').and.returnValue(['X',9])
        expect(game.scoreCalculator()).toEqual(28)
      })

      it('should know how to calculate a double strike', function () {
        spyOn(game, 'frameScore').and.returnValue([4,'X','X',4])
        expect(game.scoreCalculator()).toEqual(46)
      })

      it('should know how to calculate a tripe strike', function () {
        spyOn(game, 'frameScore').and.returnValue(['X','X','X',5])
        expect(game.scoreCalculator()).toEqual(75)
      })

      it('should know how to calculate with max stikres', function () {
        spyOn(game, 'frameScore').and.returnValue([5,'X','X','X','X',5])
        expect(game.scoreCalculator()).toEqual(75)
      })
    })
  })
})