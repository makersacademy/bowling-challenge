'use strict';
var Frame = require('../lib/frame');

describe('Frame', function() {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('start with a score of 0', function() {
    expect(frame.score).toBe(0);
  });

  it('can save the score for the current roll')

  it('can save the score for the second roll')

  it('can calculate the total score of the frame')

  it('can calculate the bonus score if there is a spare')

  it('can calculate the bonus score if there is a strike')
});
