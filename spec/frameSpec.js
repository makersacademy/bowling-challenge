'use strict';

describe('Frame', function() {
  var frame;
  var frame2;
  var game;

  beforeEach(function() {
    frame = new Frame();
    game = jasmine.createSpyObj('game',['addFrame','calcFrameScore']);
   });

   it('can update the rolls in a frame', function () {
     frame.update(1, 3);
     expect(frame.getAllRolls()).toEqual([1, 3]);
   });

  it('can get the number of knocked down pins in a roll', function () {
    expect(frame.getRoll(1)).toEqual(0);
  });

  it('can return the number of all rolls in a frame', function () {
    expect(frame.getAllRolls()).toEqual([0, 0]);
  });

  it('can return the sum of all rolls in a frame', function () {
    frame.update(4, 3);
    expect(frame._rollSum()).toEqual(7);
  });

  it('can tell if a frame is a strike', function () {
    frame.update(10, 0);
    expect(frame._isStrike()).toEqual(true);
    expect(frame._isSpare()).toEqual(false);
  });

  it('can tell if a frame is a spare', function () {
    frame.update(4, 6);
    expect(frame._isSpare()).toEqual(true);
    expect(frame._isStrike()).toEqual(false);
  });

  it('can calculate the bonus for a strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcStrikeBonus(frame2)).toEqual(7);
  });

  it('can calculate the bonus for a spare', function () {
    frame.update(4, 6);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcSpareBonus(frame2)).toEqual(2);
  });

  it('can calculate the bonus as 0 if the frame is neither spare nor strike', function () {
    frame.update(3, 4);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcBonus(frame2)).toEqual(0);
  });

  it('can calculate the total score of a frame', function () {
    frame.update(4, 6);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcScore(frame2)).toEqual(12);
  });
});
