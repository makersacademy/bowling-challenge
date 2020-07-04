'use strict';

describe('Bowling', function() {
  let bowling;
  let frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame', ['add', 'total', 'isSpare', 'isStrike', 'returnTotal']);
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

  it('Should increase the score for each bowl added', function() {
    bowling.bowl(6);
    expect(bowling.currentScore()).toEqual(6)
  })

  it('Should check if last frame needs bonus score for spare adding', function () {
    bowling.bowl(5);
    bowling.bowl(5);
    bowling.bowl(8);
    expect(frame.isSpare).toHaveBeenCalledTimes(1);
  });

  it('Should check if the last frame needs a bonus score for a strike', function() {
    bowling.bowl(10);
    bowling.bowl(4);
    expect(frame.isStrike).toHaveBeenCalledTimes(1);
  })

  it('Should check if the frame before last needs a bonus score for a strike', function() {
    bowling.bowl(10);
    bowling.bowl(10);
    bowling.bowl(4);
    expect(frame.isStrike).toHaveBeenCalledTimes(2);
  }) 
  
  it('Should keep track of current score', function() {
    for (let i = 0; i < 4; i++) {
      bowling.bowl(4);
    }
    expect(bowling.gameTotal).toEqual(16)
  }) // need to work out a way to get scores from each round
});
