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

  it('has previous set to open', function(){
    expect(frame.previous).toEqual("open")
  });

  it('has previous set to open', function(){
    expect(frame.twoPrevious).toEqual("open")
  });

  it('previous can be set as spare', function(){
    var frame = new Frame("spare")
    expect(frame.previous).toEqual("spare")
  });

  it('previous can be set as strike', function(){
    var frame = new Frame("strike")
    expect(frame.previous).toEqual("strike")
  });

  it('2previous can be set as strike', function(){
    var frame = new Frame(undefined, "spare")
    expect(frame.twoPrevious).toEqual("spare")
  });

  it('2previous can be set as strike', function(){
    var frame = new Frame(undefined, "strike")
    expect(frame.twoPrevious).toEqual("strike")
  });

  it('2previous and previous can be set as strike', function(){
    var frame = new Frame("strike", "strike")
    expect(frame.previous).toEqual("strike")
    expect(frame.twoPrevious).toEqual("strike")
  });

  it('2previous and previous can be set as spare', function(){
    var frame = new Frame("spare", "spare")
    expect(frame.previous).toEqual("spare")
    expect(frame.twoPrevious).toEqual("spare")
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
      expect(frame.bonus).toEqual("open");
    });

    it("returns spare bonus status", function(){
      frame.firstRoll(7)
      frame.secondRoll(3)
      expect(frame.bonus).toEqual("spare");
    });

    it("returns strike bonus status", function(){
      frame.firstRoll(10)
      expect(frame.bonus).toEqual("strike");
    });
  });

  describe("#setScore", function() {
    it("sets the score of the frame", function(){
    frame.setScore(30)
    expect(frame.score).toEqual(30);
    })
  });


});
