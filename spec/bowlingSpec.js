'use strict';

describe("Bowling", function() {
  var bowling

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts with a score of zero', function() {
    expect(bowling.returnScore()).toEqual(0)
  });

  it('adds the score of a bowl', function() {
    bowling.bowl(5)
    expect(bowling.returnScore()).toEqual(5)
  })

});
