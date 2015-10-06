describe("Game", function(){

  var game;
  var genericFrame;
  var firstFrame;
  var secondFrame;
  var thirdFrame;

  beforeEach(function() {
    genericFrame = jasmine.createSpy('genericFrame');
    firstFrame = jasmine.createSpyObj('firstFrame', ['firstRoll',
      'secondRoll',
      'spareUpdate',
      'strikeUpdate']);

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

  describe("#bowl", function(){

    beforeEach(function(){
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

  });

});