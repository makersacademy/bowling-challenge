describe ('Game', function() {
  var game;
  var frame;

  beforeEach(function(){
    frame = jasmine.createSpyObj('frame', ['totalStrike'])

    game = new Game(Frame)

    
    game.firstBowlPins(5)
    game.secondBowlPins(2)
    game.firstBowlPins(10)
    game.firstBowlPins(10)
    game.firstBowlPins(10)
    game.firstBowlPins(5)
    game.secondBowlPins(5)
    game.firstBowlPins(10)
    game.firstBowlPins(3)
    game.secondBowlPins(7)
    game.firstBowlPins(2)
    game.secondBowlPins(7)
  


  })

  describe('#name', function() {

    it ('should know about the players name', function() {
      game.name('Factory')
      expect(game.currentPlayer).toEqual('Factory')
    })
  })
  
  xdescribe('nextFrame', function(){
    it('should throw an error if there are 10 frames and the game is normal', function(){
      game.isGameComplete()=jasmine.createSpy("isGameComokete() spy").andReturn(true);
        expect(function() {game.nextFrame()}).toThrow('the game is complete')
    })
  })

  describe('#currentFrame', function(){
    it('should return the current frame', function(){
      expect(game.currentFrame()).toEqual(game.currentGame[7])
    })
  })

  describe('#score', function() {

    it('should save the score of bowl 2 and return total', function(){
      expect(game.score()).toContain(7)
    })
    
    describe('strike', function (){

      it('should pass the next two bowls', function () {
        expect(game.score()).toContain(25)
      })

      it('should not crash if the next frame is not played yet', function() {
        expect(game.score()).toContain(9)
      })

      it('should work with a double strike', function () {
        expect(game.score()).toContain(20)
      })

      it('should work with 4 strikes', function () {
        expect(game.score()).not.toContain(40)
      })
    })

    describe('#spare', function() {

      it('should pass only the first bowl to bonus', function() {
        expect(game.total()).toEqual(143)
      })
    })
  })
})