'use strict';

describe('Scorecard:', function() {

  var game;

  beforeEach(function() {
    game = new Scorecard();
  });

  describe('At the start of a game:', function() {
    
    it('_scores is empty', function() {
      expect(game._scores).toEqual([]);
    });

    it('_frames is empty', function() {
      expect(game._frames).toEqual([]);
    });
  });

  describe('Even check:', function() {

    it('returns true for 2, false for 3', function() {
      expect(game.even(2)).toEqual(true);
      expect(game.even(3)).toEqual(false);
    });
  });

  describe('Throws:', function() {

    beforeEach(function(){
      game.throw(4);
    });

    it('after one throw, _scores records result, _frames is empty', function() {
      expect(game._scores).toEqual([4]);
      expect(game._frames).toEqual([]);
    });

    it('after multiple throws, _frames records the running total', function() {
      game.throw(4);
      game.throw(4);
      game.throw(4);
      expect(game._frames[1]).toEqual(16);
    });
  });
  
  describe('Spares:', function() {

    beforeEach(function(){
      game.throw(0);
      game.throw(10);
    });

    it('_scores records the scores seperately', function() {
      expect(game._scores).toEqual([0,10]);
    });

    it('_frames does not total the scores', function() {
      expect(game._frames[0]).toEqual(undefined);
    });

    it('after one more throw, _frames shows the running total', function() {
      game.throw(10);
      expect(game._frames[0]).toEqual(20);
    })
  });

  describe('Strikes:', function() {

    beforeEach(function(){
      game.throw(10);
    });
    
    it('_scores records two scores (10, and 0)', function() {
      expect(game._scores).toEqual([10,0]);
    });

    it('_frames does not total the scores', function() {
      expect(game._frames[0]).toEqual(undefined);
    });

    it('after two more throws, _frames shows the running total', function() {
      game.throw(10);
      game.throw(10);
      expect(game._frames[0]).toEqual(30);
    });
  });

  describe('Display:', function() {

    it('_display holds correct symbols for 0, spare, and strike', function() {
      game.throw(10);
      game.throw(0);
      game.throw(10);
      game.throw(4);
      expect(game._display).toEqual(["", "X", "-", "/", 4])
    });
  });
});
