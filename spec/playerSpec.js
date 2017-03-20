'use strict';

describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player("Bob");
  });

  describe('~constructor', function() {

    it('has a name', function() {
      expect(player.name).toEqual("Bob");
    });

  });

  describe('.throwBall',function(){

    it('can return 0', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(player.throwBall()).toEqual(0);
    });

    it('can return 1', function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(player.throwBall()).toEqual(1);
    });

    it('can return 2', function() {
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(player.throwBall()).toEqual(2);
    });

    it('can return 3', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      expect(player.throwBall()).toEqual(3);
    });

    it('can return 4', function() {
      spyOn(Math, 'random').and.returnValue(0.4);
      expect(player.throwBall()).toEqual(4);
    });

    it('can return 5', function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(player.throwBall()).toEqual(5);
    });

    it('can return 6', function() {
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(player.throwBall()).toEqual(6);
    });

    it('can return 7', function() {
      spyOn(Math, 'random').and.returnValue(0.7);
      expect(player.throwBall()).toEqual(7);
    });

    it('can return 8', function() {
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(player.throwBall()).toEqual(8);
    });

    it('can return 9', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(player.throwBall()).toEqual(9);
    });

    it('can return 10', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(player.throwBall()).toEqual(10);
    });

  });

});
