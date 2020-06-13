'use strict';

describe('Bowling', function() {
  let bowling;
  let frame;

  beforeEach(function() {
    bowling = new Bowling();
    frame = jasmine.createSpy('frame')
  });

  it('Should construct with an empty array to store bowls', function() {
    expect(bowling.gameFrames).toEqual([]);
  });

  it('Should construct with a frame tracker starting at 0', function() {
    expect(bowling.frameNum).toEqual(0);
  });

  it('Should have a method to increment frames', function() {
    bowling.nextFrame();
    expect(bowling.frameNum).toEqual(1);
  });

  it('Should add a new frame object to the gameFrames array', function() {
    bowling.addFrame(frame);
    expect(bowling.gameFrames).toEqual([frame]);
  })

});
