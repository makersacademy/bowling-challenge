/* jshint undef: true, unused: true */
/* globals Frame, expect */

describe('Frame', function() { 'use strict';

  it('calculates the total of two rolls', function() {
    var frame = new Frame([3,4]);
    expect(frame.total()).toEqual(7);
  })

});
