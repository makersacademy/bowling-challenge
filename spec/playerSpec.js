'use strict';

describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player("Bob");
  });

  it('has a name', function() {
    expect(player.name).toEqual("Bob");
  });

  describe('#throwBall',function(){

    it('can return 0', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(player.throwBall()).toEqual(0);
    });

    it('can return 5', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(player.throwBall()).toEqual(5);
    });

    it('can return 10', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(player.throwBall()).toEqual(10);
    });

  });

});
