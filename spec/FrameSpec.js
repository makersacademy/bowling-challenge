'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('can roll with score less than or equal to 10', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(frame._roll()).toEqual(5);
  });

  it('has a fixed frame with two rolls and a max framescore of 10', function() {
    frame.playFixedFrame(5,5);
    expect(frame._frame).toEqual([5,5]);
  });

  it('has a random frame with two rolls and a max framescore of 10', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(frame.playRandomFrame()).toEqual([5,5]);
  });

  it('can get the frame', function() {
    frame.playFixedFrame(6,3);
    expect(frame.getFrame()).toEqual([6,3]);
  });

  it('can get the frame score', function() {
    frame.playFixedFrame(6,3);
    expect(frame.getFrameScore()).toEqual(9);
  });

  it('can have a strike frame', function() {
    frame.playFixedFrame(10,0);
    expect(frame.isStrike()).toEqual(true);
  });

  it('can have a spare frame', function() {
    frame.playFixedFrame(6,3)
    expect(frame.isSpare()).toEqual(true);
  });

  //
  // describe('when you play a strike', function() {
  //   it('ends the frame', function(){
  //     spyOn(Math, 'random').and.returnValue(1);
  //     game.playNextFrame();
  //     currentFrame = game.getFrame(1);
  //     expect(currentFrame).toEqual([10,0]);
  //   });
  //
});
