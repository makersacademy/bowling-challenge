describe("Game", function(){

  var game;
  var genericFrame;
  var firstFrame;
  var secondFrame;
  var thirdFrame;

  beforeEach(function() {
    genericFrame = jasmine.createSpy('genericFrame')
    genericFrame.prototype.setLastFrame = jasmine.createSpy('setLastFrame');

    firstFrame = jasmine.createSpyObj('firstFrame', ['firstRoll',
      'secondRoll',
      'spareUpdate',
      'strikeUpdate',
      'switchRandomManual']);

    secondFrame = jasmine.createSpyObj('secondFrame', ['firstRoll',
      'secondRoll',
      'spareUpdate',
      'strikeUpdate']);

    thirdFrame = jasmine.createSpyObj('thirdFrame', ['firstRoll',
      'secondRoll',
      'spareUpdate',
      'strikeUpdate']);

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
      firstFrame.rollsTaken = 0;
      game.frameArray[0] = firstFrame;
    });

    it("selects the first frame and calls its #firstRoll function", function(){
      game.bowl();
      expect(game.frameArray[0].firstRoll).toHaveBeenCalled();
    });

    it("returns the result of the first roll", function(){
      firstFrame.firstRoll.and.returnValue(6)
      expect(game.bowl()).toEqual(6);
    });

    it("frame index doesn't change when a strike isn't thrown", function(){
      firstFrame.firstRollScore = 6
      game.bowl();
      expect(game.frameIndex).toEqual(0);
    });

    it("frame index increases by one when a strike is thrown", function(){
      firstFrame.firstRollScore = 10;
      game.bowl();
      expect(game.frameIndex).toEqual(1);
    });

    describe("strike NOT thrown on first roll", function(){

      beforeEach(function(){
        firstFrame.firstRollScore = 6;
        firstFrame.rollsTaken = 1;
        game.frameArray[0] = firstFrame;
      });

      it("calls the first frame's #secondRoll function", function(){
        game.bowl();
        expect(game.frameArray[0].secondRoll).toHaveBeenCalled();
      });

      it("returns the result of the second roll", function(){
        firstFrame.secondRoll.and.returnValue(2)
        expect(game.bowl()).toEqual(2);
      });

      it("frame index increases by one following frame's second roll", function(){
        game.bowl();
        expect(game.frameIndex).toEqual(1);
      });

      describe("spare NOT thrown", function(){

        beforeEach(function(){
          secondFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
          game.frameIndex = 1
        });

        it("calls the next frames firstRoll function", function(){
          game.bowl();
          expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
        });

      });

      describe("spare thrown", function(){

        beforeEach(function(){
          secondFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
          game.frameIndex = 1
        });

        it("calls the second frames firstRoll function", function(){
          game.bowl();
          expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
        });

        it("calls the first frame's spareUpdate with the value of second frame's first roll", function(){
          secondFrame.firstRollScore = 4;
          game.bowl();
          expect(game.frameArray[0].spareUpdate).toHaveBeenCalledWith(4);
        });

      });

    });

    describe("strike IS thrown on frist roll", function(){

      beforeEach(function(){
        secondFrame.rollsTaken = 0;
        game.frameArray[1] = secondFrame;
        game.frameIndex = 1
      });

      it("calls the second frame's #firstRoll function", function(){
        game.bowl();
        expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
      });

    });

    describe("strike bonus", function(){

      describe("first frame strike", function(){

        beforeEach(function() {
          secondFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
          game.frameIndex = 1;
        });

        it("first roll of second frame doesn't call first frame's #strikeUpdate function", function(){
          game.bowl();
          expect(game.frameArray[0].strikeUpdate).not.toHaveBeenCalledWith()
        });

        it("second roll calls first frame's #strikeUpdate function with second's total", function(){
          secondFrame.rollsTaken = 1;
          secondFrame.totalScore = 8
          game.bowl();
          expect(game.frameArray[0].strikeUpdate).toHaveBeenCalledWith(8)
        });

      });

      describe("first frame strike, second frame strike", function(){

        beforeEach(function() {
          firstFrame.isStrike = true
          secondFrame.totalScore = 10;
          secondFrame.isStrike = true;
          thirdFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
          game.frameArray[2] = thirdFrame;
          game.frameIndex = 2;
        });

        it("third frame's first roll calls first frame's #strikeUpdate function with roll total plus 10", function(){
          thirdFrame.firstRollScore = 6
          game.bowl();
          expect(game.frameArray[0].strikeUpdate).toHaveBeenCalledWith(16)
        });

      });

    });

    describe("Last Frame", function(){

      beforeEach(function(){
        previousFrame = jasmine.createSpyObj('previousFrame', ['spareUpdate', 'strikeUpdate']);

        lastFrame = jasmine.createSpyObj('lastFrame', ['firstRoll',
          'secondRoll',
          'thirdRoll',
          'spareUpdate',
          'strikeUpdate']);
        game.frameArray[8] = previousFrame;
        game.frameArray[9] = lastFrame;
        game.frameIndex = 9;
      });

      it("throwing a strike with first roll doesn't change the frame index", function() {
        lastFrame.rollsTaken = 0;
        lastFrame.firstRollScore = 10;
        game.bowl();
        expect(game.frameIndex).toEqual(9);
      })

      it("the second roll doesn't change the frame index", function() {
        lastFrame.rollsTaken = 1;
        game.bowl();
        expect(game.frameIndex).toEqual(9);
      })

      it("calls third roll function if a strike was thrown", function() {
        lastFrame.rollsTaken = 2;
        lastFrame.isStrike = true;
        game.bowl();
        expect(game.frameArray[9].thirdRoll).toHaveBeenCalled();
      });

      it("calls third roll function if a spare was thrown", function() {
        lastFrame.rollsTaken = 2;
        lastFrame.isSpare = true;
        game.bowl();
        expect(game.frameArray[9].thirdRoll).toHaveBeenCalled();
      });

    });

  });

  describe("#totalAllFrames", function(){

    beforeEach(function() {
      frameScoreSeven = jasmine.createSpy('frameScoreSeven');
      frameScoreSeven.totalScore = 7
      for (var i = 0; i < 10; i++) {
        game.frameArray[i] = frameScoreSeven;
      };

    })

    it("returns the sum of each frame's total score", function(){
      expect(game.totalAllFrames()).toEqual(70);
    });

  })

  describe("MANUAL GAME", function(){

    beforeEach(function(){
      genericFrame.prototype.switchRandomManual = jasmine.createSpy('switchRandomManual');
    });

    it("can create a manual input game", function(){
      game.toggleManualRandomInput();
      expect(game.isManualGame).toBe(true);
    });

    it("is set as random game by default", function(){
      expect(game.isManualGame).toBe(false);
    });

    it("switches back to random when toggled twice", function(){
      game.toggleManualRandomInput();
      game.toggleManualRandomInput();
      expect(game.isManualGame).toBe(false);
    });

    it("calls the switchRandomManual function on all frames when made manual", function(){
      genericFrame.prototype.switchRandomManual.calls.reset();
      game.toggleManualRandomInput();
      expect(genericFrame.prototype.switchRandomManual.calls.count()).toEqual(10);
    });

    describe("#bowl", function(){

      beforeEach(function(){
        firstFrame.rollsTaken = 0;
        game.frameArray[0] = firstFrame;
        game.toggleManualRandomInput();
      });

      it("selects the first frame and calls its #firstRoll function with the score given", function(){
        game.bowl(7);
        expect(game.frameArray[0].firstRoll).toHaveBeenCalledWith(7);
      });

    });

  });

});