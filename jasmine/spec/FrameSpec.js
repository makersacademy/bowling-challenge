'use strict';

describe("Frame", function() {

  var frame1
  var frame2
  var frame3

  beforeEach(function(){
    // strike frame
    frame1 = new Frame(10)
    // spare frame
    frame2 = new Frame(5,5)
    // neither strike or spare
    frame3 = new Frame(3,3)
  });

  describe("Upon instantiating", function() {

    it("is defined", function() {
      expect(frame1).toBeDefined();
    });

    it("assigns .isStrike to true if score1 equals 10", function() {
      expect(frame1.isStrike).toBeTruthy();
    });

    it("assigns .isStrike to false if score1 is not equal to 10", function() {
      expect(frame2.isStrike).toBeFalsy();
    });

    it("assigns .isSpace to true if score1 and score2 add to make 10", function() {
      expect(frame2.isSpace).toBeFalsy();
    });

    it("assigns .isSpace to false if score1 plus score2 are not equal to 10", function() {
      expect(frame2.isSpace).toBeFalsy();
    });

  });

});
