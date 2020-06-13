'use strict';

describe('Bowling', function() {
  let bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('Should construct with an empty array to store bowls', function() {
    expect(bowling.frames).toEqual([]);
  });

  it('Should construct with a frame tracker starting at 0', function() {
    expect(bowling.frameNum).toEqual(0);
  });

  it('Should have a method to increment frames', function() {
    bowling.nextFrame();
    expect(bowling.frameNum).toEqual(1);
  });
});
