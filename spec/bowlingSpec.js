'use strict';

describe('Bowling', function() {
  let bowling;
  let frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame', ['add', 'total', 'spare', 'strike']);
    bowling = new Bowling(frame);
  });

  it('Should construct with an array and one frame object to store bowls', function() {
    expect(bowling.gameFrames).toEqual([frame]);
  });

  it('Should construct with a frame tracker starting at 0', function() {
    expect(bowling.frameNum).toEqual(0);
  });

  it('Should construct with a number of bowls tracker', function() {
    expect(bowling.turn).toEqual(0);
  });

  it('Should increment turn on each call of add', function() {
    bowling.bowl(6);
    expect(bowling.turn).toEqual(1);
  })

  it('Should have a method to increment frames', function() {
    bowling.nextFrame();
    expect(bowling.frameNum).toEqual(1);
  });

  it('Should add a new frame object to the gameFrames array', function() {
    expect(bowling.gameFrames).toEqual([frame]);
  })

  it('Should be able to add the a score via the Bowling class', function() {
    bowling.bowl(8);
    expect(frame.add).toHaveBeenCalledWith(8);
  })

  it('Should check if last frame needs bonus score for spare adding', function () {
    bowling.bowl(5);
    bowling.bowl(5);
    bowling.bowl(8);
    expect(frame.spare).toHaveBeenCalledTimes(1);
  });

  it('Should check if the last frame needs a bonus score for a strike', function() {
    bowling.bowl(10);
    bowling.bowl(4);
    expect(frame.strike).toHaveBeenCalledTimes(1);
  })

  it('Should check if the frame before last needs a bonus score for a strike', function() {
    bowling.bowl(10);
    bowling.bowl(10);
    bowling.bowl(4);
    expect(frame.strike).toHaveBeenCalledTimes(2);
  }) // all these tests will be reduced in size once I have started to add them as callbacks.
});
