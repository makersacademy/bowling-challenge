'use strict';

describe('A perfect game', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling("Suzanne");
  });

  it("ends with a score of 300 when all rolls are strikes", function() {
    for (var i = 0; i < 20; i++) {
      bowling.knockedDown(10);
    }
    expect(bowling.scoreSheet.length).toEqual(21);
    expect(bowling._currentScore()).toEqual(300);
    expect(bowling.totalScore).toEqual(300);
  });

});
