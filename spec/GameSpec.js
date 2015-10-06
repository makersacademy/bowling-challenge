describe("Game", function(){

  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpy('frame');
    game = new Game(frame);
  });

  it("starts with 10 frames", function(){
    expect(game.frameArray.length).toEqual(10);
  });

  it("starts with a frame index set to zero", function(){
    expect(game.frameIndex).toEqual(0);
  });

  describe("#bowl", function(){

    beforeEach(function(){
      frame = jasmine.createSpyObj('frame', ['firstRoll']);
      frame.rollsTaken = 0
      for (var i = 0; i < 10; i++) {
        game.frameArray[i] = frame;
      };

    });

    it("selects the first frame and calls its #firstRoll function", function(){
      game.bowl();
      expect(game.frameArray[0].firstRoll).toHaveBeenCalled();
    });

    describe("strike NOT thrown on frist roll", function(){

      beforeEach(function(){
        firstFrame = jasmine.createSpyObj('firstFrame', ['secondRoll']);
        firstFrame.firstRollScore = 6;
        firstFrame.rollsTaken = 1;
        firstFrame.pinsRemaining = 4;
        firstFrame.isStrike = false;
        firstFrame.totalScore = 6
        game.frameArray[0] = firstFrame;
      });

      it("calls the first frame's #secondRoll function", function(){
        game.bowl();
        expect(game.frameArray[0].secondRoll).toHaveBeenCalled();
      });

      it("frame index increases by one following frame's second roll", function(){
        game.bowl();
        expect(game.frameIndex).toEqual(1);
      });

      xdescribe("spare NOT thrown", function(){

        beforeEach(function(){
          firstFrame.secondRollScore = 2;
          firstFrame.rollsTaken = 2;
          firstFrame.pinsRemaining = 2;
          firstFrame.isSpare = false;
          firstFrame.totalScore = 8
          secondFrame = jasmine.createSpyObj('secondFrame', ['firstRoll']);
          secondFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
        });

        it("#bowl calls the next frames firstRoll function", function(){
          game.bowl();
          expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
        });

      });

    });


  });

});