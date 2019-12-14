'use strict';


describe("Bowling", function() {

  var bowling

  beforeEach(function(){
    bowling = new Bowling();
  });

  it("has a total score", function() {
    bowling.score = [1, 5]
    console.log(bowling.total())
    expect(bowling.total()).toEqual(6)
  });

  describe("#roll", function() {
    it("adds the roll to the score", function() {
      bowling.roll(5)
      expect(bowling.score).toContain(5)
    });

  });

});