'use strict';

describe('Bowling', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("starts with a total score of 0", function() {
    expect(bowling.totalScore).toEqual(0);
  });

  

});
