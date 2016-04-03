'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('to start', function(){
    it('has empty turns array', function(){
      expect(frame.round).toEqual([]);
    });
    it('has 0 score', function(){
      expect(frame.score).toEqual(0);
    });
    it('has 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });
    it('has 0 balls rolled', function(){
      expect(frame.ballsRolled).toEqual(0);
    });
  })

  describe('Bowl', function(){

    it('adds to score', function(){
      frame.bowl(3);
      expect(frame.score).toEqual(3);
    });
    it('adds to array', function(){
      frame.bowl(3);
      expect(frame.round).toEqual([3]);
    });
    it('removes from pins', function(){
      frame.bowl(3);
      expect(frame.pins).toEqual(7);
    });
    // it('adds to balls rolled', function(){
    //   frame.bowl(3);
    //   expect(frame.ballsRolled).toEqual(1);
    // });
  });

});
