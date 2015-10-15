describe("Game", function(){

  var game;
  var genericFrame;
  var firstFrame;
  var secondFrame;
  var thirdFrame;

  beforeEach(function() {
    genericFrame = jasmine.createSpy('genericFrame')
    genericFrame.prototype.setLastFrame = jasmine.createSpy('setLastFrame');
    genericFrame.prototype.isAwaitingBonus = jasmine.createSpy('isAwaitingBonus');

    frame = jasmine.createSpyObj('frame', ['roll',
      'isComplete',
      'isStrike',
      'isSpare',
      'isAwaitingBonus',
      'totalScore']);

    firstFrame = jasmine.createSpyObj('firstFrame', ['roll',
      'isComplete',
      'isStrike',
      'isSpare',
      'isAwaitingBonus']);

    secondFrame = jasmine.createSpyObj('secondFrame', ['roll',
      'isComplete',
      'isStrike',
      'isSpare',
      'isAwaitingBonus']);

    thirdFrame = jasmine.createSpyObj('thirdFrame', ['roll',
      'isComplete',
      'isStrike',
      'isSpare',
      'isAwaitingBonus']);

    game = new Game(genericFrame);
  });

  it("starts with 10 frames", function(){
    expect(game.frameArray.length).toEqual(10);
  });

  it("starts with a frame index set to zero", function(){
    expect(game.frameIndex).toEqual(0);
  });

  it("calls the last frame's setLastFrame function", function(){
    newGame = new Game(genericFrame);
    expect(newGame.frameArray[9].setLastFrame).toHaveBeenCalled();
  });

  it("only calls the setLastFrame function on one frame", function(){
    genericFrame.prototype.setLastFrame.calls.reset();
    newGame = new Game(genericFrame);
    expect(newGame.frameArray[9].setLastFrame.calls.count()).toEqual(1);
  });

  describe("#bowl", function(){

    beforeEach(function(){
      game.frameArray[0] = firstFrame;
    });

    it("selects the first frame and calls its #roll function with argument given", function(){
      game.bowl(6);
      expect(game.frameArray[0].roll).toHaveBeenCalledWith(6);
    });

    it("selects the first frame and calls its #roll function when no argument given", function(){
      game.bowl();
      expect(game.frameArray[0].roll).toHaveBeenCalled();
    });

    it("returns the result of the roll", function(){
      firstFrame.roll.and.returnValue(6)
      expect(game.bowl(6)).toEqual(6);
    });

    it("calls the frame's isComplete function after each roll", function(){
      game.bowl();
      expect(game.frameArray[0].isComplete).toHaveBeenCalled();
    });

    it("frame index increases by one if frame complete", function(){
      firstFrame.isComplete.and.returnValue(true)
      game.bowl(10);
      expect(game.frameIndex).toEqual(1);
    });

    it("frame index doesn't change if frame NOT complete", function(){
      firstFrame.isComplete.and.returnValue(false)
      game.bowl(6);
      expect(game.frameIndex).toEqual(0);
    });

    describe("#bonusUpdate", function(){

      beforeEach(function(){
        firstFrame.bonuses = [];
        game.frameArray[1] = secondFrame;
        secondFrame.bonuses = [];
        game.frameArray[2] = thirdFrame;
      });

      it("adds to previous frame bonus array if awaiting update", function(){
        firstFrame.isAwaitingBonus.and.returnValue(true);
        game.frameIndex = 1;
        secondFrame.roll.and.returnValue(6);
        game.bowl(6);
        expect(game.frameArray[0].bonuses).toEqual([6]);
      });

      it("adds to previous two frames bonus arrays if both awaiting update", function(){
        firstFrame.isAwaitingBonus.and.returnValue(true);
        firstFrame.bonuses = [10];
        secondFrame.isAwaitingBonus.and.returnValue(true);
        secondFrame.bonuses = [];
        game.frameIndex = 2;
        thirdFrame.roll.and.returnValue(6);
        game.bowl(6);
        expect(game.frameArray[0].bonuses).toEqual([10, 6]);
        expect(game.frameArray[1].bonuses).toEqual([6]);
      });

      it("doesn't add bonus if not awaiting bonus", function(){
        firstFrame.isAwaitingBonus.and.returnValue(false);
        firstFrame.bonuses = [6, 3];
        secondFrame.isAwaitingBonus.and.returnValue(false);
        secondFrame.bonuses = [];
        game.frameIndex = 2;
        thirdFrame.roll.and.returnValue(6);
        game.bowl(6);
        expect(game.frameArray[0].bonuses).toEqual([6, 3]);
        expect(game.frameArray[1].bonuses).toEqual([]);
      });

    });


  });

  describe("#totalAllFrames", function(){

    beforeEach(function() {
      frame.totalScore.and.returnValue(7)
      for (var i = 0; i < 10; i++) {
        game.frameArray[i] = frame;
      };

    })

    it("returns the sum of each frame's total score", function(){
      expect(game.totalAllFrames()).toEqual(70);
    });

  })

});