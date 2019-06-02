'use strict'

// eslint-disable-next-line no-undef
describe('Bowling', function() {
  
  it('starts a game of bowling', function() {
    var bowling = new Bowling();
  });

  it('can roll gutter game', function() {
    var bowling = new Bowling();
    for (var i = 0; i < 20; i++) {
      bowling.roll(0);
    };
    expect(bowling.score()).toBe(0)
  });

});