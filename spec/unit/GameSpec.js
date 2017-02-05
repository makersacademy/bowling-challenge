describe("Game", function(){
  var game

  beforeEach(function(){
    frameSpy = jasmine.createSpyObj('frame', ['bowl'])
    scorecardSpy = jasmine.createSpyObj('scorecard', ['addToScore'])
    game = new Game(frameSpy, scorecardSpy)
  })

  describe("#bowl", function(){
    it("bowls a ball and adds the score to the scorecard", function(){
      game.bowl()
      expect(frameSpy.bowl).toHaveBeenCalled();
      expect(scorecardSpy.addToScore).toHaveBeenCalled();
    });
  });
})
