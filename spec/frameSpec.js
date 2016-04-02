'use strict';

describe("Frame", function(){
  var frame;
  var i;

  beforeEach(function(){
    frame  = new Frame();
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

  describe("#bonus", function() {
    it("returns open bonus status", function(){
      frame.firstRoll(3)
      frame.secondRoll(3)
      frame.checkBonus()
      expect(frame.bonus).toEqual("open");
    });

    it("returns spare bonus status", function(){
      frame.firstRoll(7)
      frame.secondRoll(3)
      frame.checkBonus()
      expect(frame.bonus).toEqual("spare");
    });

    it("returns strike bonus status", function(){
      frame.firstRoll(10)
      frame.checkBonus()
      expect(frame.bonus).toEqual("strike");
    });
  });
});
