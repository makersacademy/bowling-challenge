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
    game.firstBowlPins(1)
    game.secondBowlPins(5)

  })

  describe('#name', function() {

    it ('should know about the players name', function() {
      game.name('Factory')
      expect(game.currentPlayer).toEqual('Factory')
    })
  })
  
  describe('#newFrame', function(){

    it('should know the current frame', function(){
      expect(game.currentFrame()).toEqual(game.currentGame[5])
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
        expect(game.score()).toContain(6)
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
        expect(game.total()).toEqual(99)
      })
    })
  })
})