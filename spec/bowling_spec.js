'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('It initializes on round one and starting points of 0', function () {
    expect(bowling.score).toEqual(0)
    expect(bowling.round).toEqual(0)
  });

});
