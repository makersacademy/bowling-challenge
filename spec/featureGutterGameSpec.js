'use strict';

describe('A gutter game', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling("Suzanne");
  });

  it("ends with a score of 0 when all rolls knocked over 0 pins", function() {
    for (var i = 0; i < 20; i++) {
      bowling.knockedDown(0);
    }
    expect(bowling.scoreSheet.length).toEqual(20);
    expect(bowling.scoreSheet[19]["pins"]).toEqual(0);
    expect(bowling.scoreSheet[19]["score"]).toEqual(0);
    expect(bowling.scoreSheet[19]["notes"]).toEqual("Bad luck");
    expect(bowling.totalScore).toEqual(0);
  });

});
