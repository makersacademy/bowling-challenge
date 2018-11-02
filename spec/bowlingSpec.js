'use strict';

describe("Bowling", function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts with a score of zero', function() {
    expect(bowling.returnScore()).toEqual(0)
  });

});
