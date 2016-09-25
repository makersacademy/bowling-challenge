/* jshint undef: true, unused: true */
/* globals Frame, expect */

describe('Frame', function() { 'use strict';

  it('calculates the total of two rolls', function() {
    var frame = new Frame([3,4]);
    expect(frame.total()).toEqual(7);
  })

  it('knows when is a spare', function() {
    var frame = new Frame([5,5]);
    expect(frame.isSpare()).toEqual(true);
  })

  it('knows when is a strike', function() {
    var frame = new Frame([10,0]);
    expect(frame.isStrike()).toEqual(true);
  })


});
