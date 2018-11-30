'use strict';

describe('Frame', function() {
  var frame;
  var game;
  beforeEach(function() {
    frame = new Frame();
    game = jasmine.createSpyObj('game',['addFrame','calcFrameScore']);
   });

  it('can get the number of knocked down pins in a roll', function () {
    expect(frame.getRoll(1)).toEqual(0);
  });
});
