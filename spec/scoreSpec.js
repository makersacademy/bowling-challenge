describe("score", function(){
  var frame_1;
  var frame_2;
  var frame_3;
  var frame_4;
  var frame_5;
  var frame_6;
  var frame_7;
  var frame_8;
  var frame_9;
  var frame_10;

  var game;

  beforeEach(function(){
    frame_1 = new Frame;
    frame_2 = new Frame;
    frame_3 = new Frame;
    frame_4 = new Frame;
    frame_5 = new Frame;
    frame_6 = new Frame;
    frame_7 = new Frame;
    frame_8 = new Frame;
    frame_9 = new Frame;
    frame_10 = new Frame;
    game = new Game;
    spyOn(game,'getFrames').and.returnValue([frame_1,frame_2,frame_3,frame_4,frame_5,frame_6,frame_7,frame_8,frame_9,frame_10])
  })

  describe("#scoreGameTotal", function(){
    it("scores a set of frames without any multipliers", function(){
      spyOn(frame_1,'getBalls').and.returnValue([5,0])
      spyOn(frame_1,'pinsDown').and.returnValue(5)
      spyOn(frame_2,'getBalls').and.returnValue([0,6])
      spyOn(frame_2,'pinsDown').and.returnValue(6)
      expect(score.scoreGameTotal(game)).toEqual(11)
    })

    it("applies spares", function(){
      spyOn(frame_1,'getBalls').and.returnValue([5,5])
      spyOn(frame_1,'pinsDown').and.returnValue(10)
      spyOn(frame_2,'getBalls').and.returnValue([1,1])
      spyOn(frame_2,'pinsDown').and.returnValue(2)
      expect(score.scoreGameTotal(game)).toEqual(13)
    });

    it("applies strikes", function(){
      spyOn(frame_1,'getBalls').and.returnValue([10])
      spyOn(frame_1,'pinsDown').and.returnValue(10)
      spyOn(frame_1,'isStrike').and.returnValue(true)
      spyOn(frame_2,'getBalls').and.returnValue([1,1])
      spyOn(frame_2,'pinsDown').and.returnValue(2)
      expect(score.scoreGameTotal(game)).toEqual(14)
    });
  });
  describe("#scoreBoard",function(){
    it("applies strikes consecutavely", function(){
      spyOn(frame_1,'getBalls').and.returnValue([10])
      spyOn(frame_1,'pinsDown').and.returnValue(10)
      spyOn(frame_1,'isStrike').and.returnValue(true)
      spyOn(frame_2,'getBalls').and.returnValue([10])
      spyOn(frame_2,'pinsDown').and.returnValue(10)
      spyOn(frame_2,'isStrike').and.returnValue(true)
      spyOn(frame_3,'getBalls').and.returnValue([10])
      spyOn(frame_3,'pinsDown').and.returnValue(10)
      spyOn(frame_3,'isStrike').and.returnValue(true)
      expect(score.scoreBoard(game)[0]).toEqual(30)
    });
    it("returns NaN when it can't calculate yet ",function(){
      spyOn(frame_1,'getBalls').and.returnValue([5,5])
      spyOn(frame_1,'pinsDown').and.returnValue(10)
      spyOn(frame_2,'getBalls').and.returnValue([])
      spyOn(frame_2,'pinsDown').and.returnValue(0)
      expect(score.scoreBoard(game)[0]).toEqual(NaN)
    })
  })
  describe("#running total",function(){
    it("has a running total",function(){
      spyOn(frame_1,'getBalls').and.returnValue([1,1])
      spyOn(frame_2,'getBalls').and.returnValue([1,1])
      spyOn(frame_1,'pinsDown').and.returnValue(2)
      spyOn(frame_2,'pinsDown').and.returnValue(2)
      expect(score.runningTotal(game)[1]).toEqual(4)
    })
  })
});
