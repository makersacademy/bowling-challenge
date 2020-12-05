describe("Game", function() {

  var myGame;
  var frame1;
  var frame2;
  var frame3;

  beforeEach(function() {
    myGame = new Game()

    frame1 = jasmine.createSpyObj(
      "Frame",
      ["isStrike", "isSpare", "pinsKnocked", "getTotalScore", "inputRollScore", "addScore", "currentRollNumber", "pointsForStrike", "pointsForSpare"],
    );

    frame2 = jasmine.createSpyObj(
      "Frame",
      ["isStrike", "isSpare", "pinsKnocked", "getTotalScore", "inputRollScore", "addScore", "currentRollNumber", "pointsForStrike", "pointsForSpare"],
    );

    frame3 = jasmine.createSpyObj(
      "Frame",
      ["isStrike", "isSpare", "pinsKnocked", "getTotalScore", "inputRollScore", "addScore", "currentRollNumber", "pointsForStrike", "pointsForSpare"],
    );
  });

  it("Starts with frame number of 0", function() {
    expect(myGame.currentFrameNumber()).toEqual(0);
  });

  it("Correcttly adds up rolling score", function() {
    jasmine.getEnv().allowRespy(true);
    spyOn(frame1, 'isStrike').and.returnValue(false);
    spyOn(frame1, 'isSpare').and.returnValue(false);
    spyOn(frame1, 'getTotalScore').and.returnValue(5);
    spyOn(frame2, 'isStrike').and.returnValue(false);
    spyOn(frame2, 'isSpare').and.returnValue(false);
    spyOn(frame2, 'getTotalScore').and.returnValue(7);
    myGame.newFrame(frame1);
    myGame.updateScore();
    myGame.newFrame(frame2);
    myGame.updateScore();
    expect(myGame.getRunningScore()).toEqual(12);
  });

  describe("Adding three frames to game", function() {

    beforeEach(function() {
      myGame.newFrame(frame1);
      myGame.newFrame(frame2);
      myGame.newFrame(frame3);
    });

    it("Returns the correct frame number after 0", function() {
      expect(myGame.currentFrameNumber()).toEqual(3);
    });

    it("Returns the correct current frame object", function() {
      expect(myGame.currentFrameObject()).toBe(frame3);
    });

    it("#knocked causes the current frame object to receive message to update pins", function() {
      myGame.knocked(3);
      expect(frame3.inputRollScore).toHaveBeenCalledWith(3);
    });

    it("Correctly updates the score when no strikes or spares", function() {
      jasmine.getEnv().allowRespy(true);
      spyOn(frame1, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isStrike').and.returnValue(false);
      spyOn(frame3, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isSpare').and.returnValue(false);
      spyOn(frame3, 'pinsKnocked').and.returnValue(3);

      myGame.updateScore();

      expect(frame1.addScore).not.toHaveBeenCalled();
      expect(frame2.addScore).not.toHaveBeenCalled();
      expect(frame3.addScore).toHaveBeenCalledWith(3);
    });

    it("Correctly updates the score when previous frame was a strike", function() {
      jasmine.getEnv().allowRespy(true);
      spyOn(frame1, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isStrike').and.returnValue(true);
      spyOn(frame3, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isSpare').and.returnValue(false);
      spyOn(frame3, 'pinsKnocked').and.returnValue(7);
      spyOn(frame3, 'pointsForStrike').and.returnValue(7);

      myGame.updateScore();

      expect(frame1.addScore).not.toHaveBeenCalled();
      expect(frame2.addScore).toHaveBeenCalledWith(7);
      expect(frame3.addScore).toHaveBeenCalledWith(7);
    });

    it("Correctly updates the score when previous frame was a spare", function() {
      jasmine.getEnv().allowRespy(true);
      spyOn(frame1, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isStrike').and.returnValue(false);
      spyOn(frame3, 'isStrike').and.returnValue(false);
      spyOn(frame2, 'isSpare').and.returnValue(true);
      spyOn(frame3, 'pinsKnocked').and.returnValue(8);
      spyOn(frame3, 'pointsForSpare').and.returnValue(4);

      myGame.updateScore();

      expect(frame1.addScore).not.toHaveBeenCalled();
      expect(frame2.addScore).toHaveBeenCalledWith(4);
      expect(frame3.addScore).toHaveBeenCalledWith(8);
    });

    it("Correctly updates the score current and previous two frames are strikes", function() {
      jasmine.getEnv().allowRespy(true);
      spyOn(frame1, 'isStrike').and.returnValue(true);
      spyOn(frame2, 'isStrike').and.returnValue(true);
      spyOn(frame3, 'isStrike').and.returnValue(true);
      spyOn(frame2, 'isSpare').and.returnValue(false);
      spyOn(frame3, 'pinsKnocked').and.returnValue(10);
      spyOn(frame3, 'pointsForStrike').and.returnValue(10);

      myGame.updateScore();

      expect(frame1.addScore).toHaveBeenCalledWith(10);
      expect(frame2.addScore).toHaveBeenCalledWith(10);
      expect(frame3.addScore).toHaveBeenCalledWith(10);
    });
  });
})
