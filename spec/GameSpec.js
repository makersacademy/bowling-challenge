
describe ("Game", function(){
  var frame
  var game
  var mockFrame

  beforeEach(function(){
    game = new Game();
    frame = new Frame(); ///necessary?

  })

  describe ('rollBall', function(){

    it("calls _sendPointsToFrame on currentFrame attribute if there are still rolls left on that frame", function(){
      //Didn't mock frame class here as couldn't work out how to create spy for function which
      //has arguments. Calculate takes an argument.

      // mockFrame = jasmine.createSpy('mockFrame', {
      //    "_rollsLeft": 1,
      //    "calculate(userInput)": 5,
      //  })
      //
      // game = new Game(mockFrame)
      expect(game.rollBall(5)).toEqual(game._currentFrame.calculate(5));
    })

    it("calls to newFrame function if currentFrame has no rolls left, ensuring that the rolls are reset", function(){

       mockFrame = jasmine.createSpy('mockFrame', { "_rollsLeft": 0})
       game = new Game(mockFrame)
       game.rollBall(3);
       expect(game._currentFrame.frameScore).toEqual(3) //this tests that it's not mockFrame because mockFrame doesn't know this method
    })

    it("calls to descreaseFrames function to decreases the frames left", function(){
      //is this the right way to test this? As it's a private method, I guessed that it is.
      //Otherwise, I would have created a new test for increaseFrames and tested it directly
      mockFrame = jasmine.createSpy('mockFrame', {"_rollsLeft":0})
      game = new Game(mockFrame)
      game.rollBall(2);
      expect(game._frameNumber).toEqual(2)
    })

    it("calls to total function to add frameScore to total after a frame is done", function(){

      mockFrame = jasmine.createSpy('mockFrame', {"frameScore": 5, "_rollsLeft": 0})
      game = new Game(mockFrame)
      game.rollBall(7);
      expect(game.totalScore).toEqual(5) //same as before, I didn't test private total method directly
    })

    it("checks if last round was strike, and changes doubleBothScoresNextRound to true if so", function(){

      mockFrame = jasmine.createSpy('mockFrame', {"isStrike": true, "_rollsLeft": 0})
      game = new Game(mockFrame)
      game.rollBall(2);
      expect(game.doubleBothScoresNextRound).toEqual(true)
    })
    it("checks if last round was spare, and changeds doubleFirstScoreNextRound to true if so", function(){
      mockFrame = jasmine.createSpy('mockFrame', {"isSpare": true, "_rollsLeft": 0})
      game = new Game(mockFrame)
      game.rollBall(1);
      expect(game.doubleFirstScoreNextRound).toEqual(true)
    })
  })

//I don't know if this is how I should test sendpointstoframe or if I should test it via roll method.
  describe("sendBonuspoints", function(){
    it ("sets the frame bonus counter to 2 if last frame was a strike", function(){
      mockFrame = jasmine.createSpy('mockFrame', {"isStrike": true, "_rollsLeft": 0})
      game = new Game(mockFrame)
      game.rollBall(5);
      expect(game._currentFrame._bonusCounter).toEqual(1) //not great test as is testing actual bonusCounter
      //still not sure how to test this
    })

    it ("sets the frame bonus counter to 1 if last frame was a spare", function(){
      mockFrame = jasmine.createSpy('mockFrame', {"isSpare": true, "_rollsLeft": 0})
      game = new Game(mockFrame)
      game.rollBall(5)
      expect(game._currentFrame._bonusCounter).toEqual(0) //slightly vacuous test, and not great as testing actual
      //bonusCounter
    })
  })
});
