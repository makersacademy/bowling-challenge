
describe ("Game", function(){
  var game

  describe ('rollBall', function(){

    beforeEach(function(){
      mockFrame = jasmine.createSpy('mockFrame', { "frameScore": 5, "_rollsLeft": 0, "calculate": function() {} })
      // {
      //   frameScore: 5,
      //   _rollsLeft: 0,
      //   calculate: function() {
      //
      //   }
    //  }
     spyOn(mockFrame.calculate).andReturn(5)
    //  expect(mockFrame.calculate).toHaveBeenCalledWith(5)
      //console.log("I'm in the the beforeEach!"); //this prints out in the console when run TESTS, not app
      game = new Game(mockFrame);
    })

    it("calls _sendPointsToFrame on currentFrame attribute if there are still rolls left on that frame", function(){
      //Didn't mock frame class here as couldn't work out how to create spy for function which
      //has arguments. Calculate takes an argument.
      expect(game.rollBall(5)).toEqual(game._currentFrame.calculate(5));
    })

    it("calls to newFrame function if currentFrame has no rolls left, ensuring that the rolls are reset", function(){
       game.rollBall(3);
       expect(game._currentFrame.frameScore).toEqual(3) //this tests that it's not mockFrame because mockFrame doesn't know this method
    })

    it("calls to descreaseFrames function to decreases the frames left", function(){
      //is this the right way to test this? As it's a private method, I guessed that it is.
      //Otherwise, I would have created a new test for increaseFrames and tested it directly
      game.rollBall(2);
      expect(game._frameNumber).toEqual(2)
    })

    it("calls to total function to add frameScore to total after a frame is done", function(){
      game.rollBall(7);
      expect(game.totalScore).toEqual(5) //same as before, I didn't test private total method directly
    })

    it("checks if this is the 10th frame, prints a message to signal end of game", function(){
    //  spyOn(game, "_frameNumber").and.returnValue(11);
      game.rollBall(10)
      //after the above we're on the second frame
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(10)
      game.rollBall(8)
      game.rollBall(1)
      game.rollBall(1)
      //don't know how to test that the extra roll total is added, so I can't test if stike or spare etc....
      expect(game.message).toContain("Game over!")
    })
  })

  describe ("rollBall and sendBonuspoints, when context is Strike", function(){

    beforeEach(function(){
      mockFrame = jasmine.createSpy('mockFrame', { "isStrike": true, "_rollsLeft": 0})
      game = new Game(mockFrame);
    })

    it("checks if last round was strike, and changes doubleBothScoresNextRound to true if so", function(){
      game.rollBall(2);
      expect(game.double2).toEqual(true)
    })

    it ("sets the frame bonus counter to 2 if last frame was a strike", function(){
      game.rollBall(5);
      expect(game._currentFrame._bonusCounter).toEqual(1) //not great test as is testing actual bonusCounter
      //still not sure how to test this
    })
  })

  describe("rollBall and sendBonuspoints, when context is Spare", function(){

    beforeEach(function(){
      mockFrame = jasmine.createSpy('mockFrame', { "isSpare": true, "_rollsLeft": 0})
      game = new Game(mockFrame);
    })

    it ("sets the frame bonus counter to 1 if last frame was a spare", function(){
      game.rollBall(5)
      expect(game._currentFrame._bonusCounter).toEqual(0) //slightly vacuous test, and not great as testing actual
      //bonusCounter
    })

    it("checks if last round was spare, and changes doubleFirstScoreNextRound to true if so", function(){
      game.rollBall(1);
      expect(game.double1).toEqual(true)
    })
  })

});
