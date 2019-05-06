'use strict';

describe('Score', function() {
  var bowlcard;

  beforeEach(function() {
    bowlcard = new Score()

  });

  it('begins at 0', function () {
    expect(bowlcard.total()).toEqual(0);
  });

  it('adds number to score', function () {
    bowlcard.add(5)
    expect(bowlcard.total()).toEqual(5);
  });

});
