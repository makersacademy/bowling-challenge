'use strict';

describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player("Bob");
  });

  it('has a name', function() {
    expect(player.name).toBeDefined();
  });

  it('can bowl to return a random score between 0 and 10', function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(player.bowl()).toEqual(0);
  });

})
