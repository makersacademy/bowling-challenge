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
  });

  it('adds the score of a round (2 bowls)', function() {
    bowling.bowl(5)
    bowling.bowl(4)
    expect(bowling.returnScore()).toEqual(9)
  });

  it('adds ten if spare', function() {
    bowling.bowl(5)
    bowling.bowl(5)
    expect(bowling.returnScore()).toEqual(10)
  });

});
