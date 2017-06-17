'use strict';
var Frame = require('../lib/frame');

describe('Frame', function() {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('start with a score of 0', function() {
    expect(frame.score()).toEqual(0);
  });

  it('can save the score for the first roll', function() {
    frame.firstRoll(5);
    expect(frame.rolls).toEqual([5, 0]);
  });

  it('can save the score for the second roll', function() {
    frame.secondRoll(3);
    expect(frame.rolls).toEqual([0, 3]);
  });

  it('can calculate the total score of the frame', function() {
    frame.firstRoll(1);
    frame.secondRoll(7);
    expect(frame.score()).toEqual(8);
  });

  it('can calculate the bonus score if there is a spare')

  it('can calculate the bonus score if there is a strike')
});
