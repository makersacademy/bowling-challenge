'use strict';

describe("Frame", function(){
  var frame;
  var spareFrame;
  var strikeFrame;
  var normalFrame;
  var i;

  beforeEach(function(){
    frame  = new Frame();
    spareFrame = new Frame();
    spareFrame.roll1 = 5;
    spareFrame.roll2 = 5;
    strikeFrame = new Frame();
    strikeFrame.roll1 = 10;
    normalFrame = new Frame();
    normalFrame.roll1 = 5;
    normalFrame.roll2 = 4;
  });

  it('roll 1 is initially 0', function(){
    expect(frame.roll1).toEqual(0);
  });

  it('roll 2 is initially 0', function(){
    expect(frame.roll2).toEqual(0);
  });

  describe("#firstRoll", function() {
    it("changes the score for roll1", function(){
      frame.firstRoll(5)
      expect(frame.roll1).toEqual(5);
    });
  });

  describe("#secondRoll", function() {
    it("changes the score for roll2", function(){
      frame.secondRoll(3)
      expect(frame.roll2).toEqual(3);
    });
  });

  describe("#total", function() {
    it("sets the score of the frame", function(){
      frame.firstRoll(7)
      frame.secondRoll(3)
      expect(frame.total()).toEqual(10);
      })
  });

  describe("#_isStrike", function() {
    it("frame isn't a strike",function(){
      frame.firstRoll(8);
      expect(frame._isStrike()).toEqual(false);
    });

    it("frame is a strike", function(){
      frame.firstRoll(10);
      expect(frame._isStrike()).toEqual(true);
    });
  });

  describe("#_isSpare", function() {
    it("frame isn't a spare", function(){
      frame.firstRoll(8);
      frame.secondRoll(1)
      expect(frame._isSpare()).toEqual(false);
    });

    it("frame isn't a spare", function(){
      frame.firstRoll(8);
      frame.secondRoll(2)
      expect(frame._isSpare()).toEqual(true);
    });
  });

  describe("#score", function() {
    it("scores an open frame", function(){
      expect(normalFrame.score(strikeFrame, strikeFrame)).toEqual(9);
    })

    it("scores a spare frame", function(){
      expect(spareFrame.score(strikeFrame, strikeFrame)).toEqual(20);
    })

    it("scores a strike frame", function(){
      expect(strikeFrame.score(spareFrame, strikeFrame)).toEqual(20);
    })

    it("scores two Stikes in a row", function(){
      expect(strikeFrame.score(strikeFrame, strikeFrame)).toEqual(30)
    })

    it("scores the first frame", function(){
      expect(normalFrame.score(undefined, undefined)).toEqual(9)
    })

    it("scores the second frame", function(){
      expect(strikeFrame.score(strikeFrame, undefined)).toEqual(20)
    })


  });

});
