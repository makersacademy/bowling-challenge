'use strict';
describe('Scorecard', function() {
  var player;
  beforeEach(function() {
    player = new Scorecard;
  });
  it('start at tot score 0', function() {
    expect(player.totScore).toEqual(player.SCORE_DEFAULT);
  });
  describe('#up', function() {
    it('raises the numOfPinsDown', function() {
      player.up();
      expect(player.numOfPinsDown).toEqual(player.PINS_DOWN_DEFAULT + 1);
    });
  });
});
