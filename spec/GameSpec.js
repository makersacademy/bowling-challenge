describe("Game", function(){

  var game;
  var genericFrame;
  var firstFrame;
  var secondFrame;

  beforeEach(function() {
    genericFrame = jasmine.createSpy('genericFrame');
    game = new Game(genericFrame);
  });

  it("starts with 10 frames", function(){
    expect(game.frameArray.length).toEqual(10);
  });

  it("starts with a frame index set to zero", function(){
    expect(game.frameIndex).toEqual(0);
  });

  describe("#bowl", function(){

    beforeEach(function(){
      firstFrame = jasmine.createSpyObj('firstFrame', ['firstRoll','secondRoll', 'spareUpdate']);
      firstFrame.rollsTaken = 0
      game.frameArray[0] = firstFrame

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
      firstFrame.firstRoll.and.returnValue(6);
      game.bowl();
      expect(game.frameIndex).toEqual(0);
    });

    it("frame index increases by one when a strike is thrown", function(){
      firstFrame.firstRoll.and.returnValue("Strike!");
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
          secondFrame = jasmine.createSpyObj('secondFrame', ['firstRoll']);
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
          firstFrame.isSpare = true;
          secondFrame = jasmine.createSpyObj('secondFrame', ['firstRoll']);
          secondFrame.firstRoll.and.returnValue(4)
          secondFrame.rollsTaken = 0;
          game.frameArray[1] = secondFrame;
          game.frameIndex = 1
        });

        it("calls the next frames firstRoll function", function(){
          game.bowl();
          expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
        });

        it("calls the previous frame's spareUpdate with the value of this frame's first roll", function(){
          secondFrame.firstRollScore = 4;
          game.bowl();
          expect(game.frameArray[0].spareUpdate).toHaveBeenCalledWith(4);
        });

      });

    });

    xdescribe("strike IS thrown on frist roll", function(){

      beforeEach(function(){
        firstFrame = jasmine.createSpyObj('firstFrame', ['secondRoll', 'spareUpdate']);
        firstFrame.firstRollScore = 10;
        firstFrame.rollsTaken = 1;
        firstFrame.pinsRemaining = 0;
        firstFrame.isStrike = true;
        firstFrame.totalScore = 10
        // firstFrame.secondRoll.and.returnValue(2)
        secondFrame = jasmine.createSpyObj('secondFrame', ['firstRoll']);
        game.frameArray[0] = firstFrame;
        game.frameArray[1] = secondFrame;
      });

      it("calls the second frame's #firstRoll function", function(){
        game.bowl();
        expect(game.frameArray[1].firstRoll).toHaveBeenCalled();
      });

      xit("returns the result of the second roll", function(){
        expect(game.bowl()).toEqual(2);
      });

      xit("frame index increases by one following frame's second roll", function(){
        game.bowl();
        expect(game.frameIndex).toEqual(1);
      });


    });

  });

});