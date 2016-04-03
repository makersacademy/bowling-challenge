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
    // it('has 0 score', function(){
    //   expect(frame.score).toEqual(0);
    // });
    it('has 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });
    it('has 0 balls rolled', function(){
      expect(frame.ballsRolled).toEqual(0);
    });
  })

  describe('First bowl of frame', function(){

    beforeEach(function(){
      frame.bowl(3);
    });

    // it('adds to score', function(){
    //   expect(frame.score).toEqual(3);
    // });
    it('adds to array', function(){
      expect(frame.round).toEqual([3]);
    });
    it('removes from pins', function(){
      expect(frame.pins).toEqual(7);
    });
    it('adds to balls rolled', function(){
      expect(frame.ballsRolled).toEqual(1);
    });
  });

  describe('Strike', function(){
    it('cannot throw second bowl', function(){
      frame.bowl(10);
      expect( function(){ frame.bowl(1); } ).toThrow(new Error("Frame complete!"));
    });
    it('adds "X" to round', function(){
      frame.bowl(10);
      expect(frame.round).toEqual(["X"])
    });
  });

  describe('Spare', function(){
    it('adds "/" to round', function(){
      frame.bowl(3);
      frame.bowl(7);
      expect(frame.round).toEqual([3,"/"])
    });
  });

});
