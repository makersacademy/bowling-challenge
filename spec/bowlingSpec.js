'use strict';

describe('Bowling', function() {
  let bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('Should construct with an empty array to store bowls', function() {
    expect(bowling.frames).toEqual([]);
  });
});
