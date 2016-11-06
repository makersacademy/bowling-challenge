'use strict';

describe("BowlingFrame", function() {
  var game;
  var frame;

  beforeEach(function() {
    frame = new BowlingFrame;
  });

  describe("Using #addScore", function(){
    it("can add a score of 3 to ball 1", function(){
      frame.addScore(3);
      expect(frame.first_ball).toEqual(3);
    });
    it("can add a score of 9 to ball 1", function(){
      frame.addScore(9);
      expect(frame.first_ball).toEqual(9);
    });
    it('should know that 10 is a strike', function(){
      frame.addScore(10);
      expect(frame.isStrike).toEqual(true);
    });

  });

  describe("Switching to ball 2", function(){
    it("switches on a 3", function(){
      frame.addScore(3);
      expect(frame.current_ball).toEqual('second');
    });
    it("doesn't switch on a 10", function(){
      frame.addScore(10);
      expect(frame.current_ball).toEqual('first');
      expect(frame.isFinished).toEqual(true);
    });
    it("should recognise a spare", function(){
      frame.addScore(3);
      frame.addScore(7);
      expect(frame.isSpare).toEqual(true);
    });
  });


});
